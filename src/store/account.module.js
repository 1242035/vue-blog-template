import Parse from 'parse';
import _ from 'lodash';
import { userService } from '../services';
import router from '../router';

const user = Parse.User.current();
const state = user
    ? { status: { loggedIn: false }, user }
    : { status: {}, user: null };

const actions = {
    login({ dispatch, commit }, { username, password }) {
        commit('loginRequest');

        userService.login(username, password)
            .then(
                () => {
                    commit('loginSuccess', Parse.User.current());
                    router.push({'name':'home'});
                },
                (error) => {
                    commit('loginFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
    logout({ commit }) {
        userService.logout()
        .then( () => {
            commit('logout');
            router.push({'name':'login'});
        })
        .catch( (error) => {

        } );
    },
    register({ dispatch, commit }, user) {
        commit('registerRequest', user);

        userService.register(user)
            .then(
                () => {
                    commit('registerSuccess');
                    router.push({'name':'login'});
                    setTimeout(() => {
                        // display success message after route change completes
                        dispatch('alert/success', 'Registration successful', { root: true });
                    })
                },
                error => {
                    commit('registerFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    }
};

const mutations = {
    loginRequest(state) {
        state.status = { loggingIn: false };
        state.user = null;
    },
    loginSuccess(state, user) {
        state.status = { loggedIn: true };
        state.user = user;
    },
    loginFailure(state) {
        state.status = { loggedIn: false };
        state.user = null;
    },
    logout(state) {
        state.status = { loggedIn: false };
        state.user = null;
    },
    registerRequest(state, user) {
        state.status = { register: true };
    },
    registerSuccess(state) {
        state.status = {};
    },
    registerFailure(state, error) {
        state.status = {};
    }
};

export const account = {
    namespaced: true,
    state,
    actions,
    mutations
};