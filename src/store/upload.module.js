
import store from 'store';

let user = store.get('user');
let token = '';
if (user != null) {
    token = user.token || '';
}
const state = {
    headers: {
        'Authorization': 'Bearer ' + token
    },
    office: {

        multiple: false,
        data: {},
        name: 'file',
        withCredentials: false,
        showFileList: false,
        accept: {

        }
    },

};

const actions = {

};

const mutations = {

};

export const upload = {
    namespaced: true,
    state,
    actions,
    mutations
};