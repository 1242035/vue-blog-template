import Parse from 'parse';
import { paginateQuery } from 'parse-paginate-query';

export const postService = {
    piginate
};

var Post = Parse.Object.extend('posts');

function piginate(params, offset, limit) {
    if( offset == null || offset < 0 ) {
        offset = 0;
    }
    if( limit == null || limit < 0 ) {
        limit = 25;
    }
    var query = Parse.Query(Post);
    if( params != null && _.isObject( params) ) {
        for(prop in params) {
            query.equalTo(prop, params[prop]);
        }
    }
    query.skip(offset);
    query.limit(limit);
    query.descending('updatedAt');

    return paginateQuery(query);
}
