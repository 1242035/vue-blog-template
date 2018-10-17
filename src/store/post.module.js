import { postService } from '../services';
import _ from 'lodash';
const state = {
    loading:false,
    posts:null
};

const actions = {
    getAll({ dispatch, commit }, { params }) {
        commit('postRequest', { params: params });

        postService.piginate(params)
            .then(
                (page) => {
                    commit('postSuccess', page);
                },
                (error) => {
                    commit('postFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
};

const mutations = {
    postRequest(state, item) {
        state.loading = true;
    },
    postSuccess(state, items) {
        state.posts = items;
        state.loading = false;
    },
    postFailure(state) {
        state.posts = null;
        state.loading = false;
    }
};

export const post = {
    namespaced: true,
    state,
    actions,
    mutations
};