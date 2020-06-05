const state = {
  users: {},
};

const getters = {
  users: (state) => state.users,
};

const actions = {
  getUserInfo: ({ commit }) => { 
    const user = localStorage.getItem('users');
    commit('setUsers', JSON.parse(user))
  }
};

const mutations = {
  setUsers: (state, value) => state.users = value
 };

export default {
  state,
  getters,
  actions,
  mutations,
};
