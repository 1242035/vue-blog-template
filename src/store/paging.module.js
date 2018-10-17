

const state = {
    paginate: {
        nextText: '→',
        prevText: '←',
        pageRange: 5
    },
    currentPage: 0,
    pageSize: 10,
    page: {
        content: [],
        last: false,
        totalPages: 0,
        totalElements: 0,
        size: 2,
        number: 0,
        sort: null,
        numberOfElements: 0,
        first: true
    },
};

const actions = {
    setCurrentPage: ({ commit }, page) => {
        commit('currentPage', page);
    },
    setPage: ({ commit }, page) => {
        commit('page', page);
    },
    resetPage: ({ commit }) => {
        commit('currentPage', 0);
        commit('page', {
            content: [],
            last: false,
            totalPages: 0,
            totalElements: 0,
            size: 2,
            number: 0,
            sort: null,
            numberOfElements: 0,
            first: true
        });
    }
};

const mutations = {
    currentPage(state, page) {
        state.currentPage = page;
    },
    page(state, page) {
        state.page = page;
    },
};

export const paging = {
    namespaced: true,
    state,
    actions,
    mutations
};