import userService from "@/Services/User";

const state = {
  users: {},
  allUsers: [],
  userById: {}
};

const getters = {
  users: (state) => state.users,
  allUsers: (state) => state.allUsers,
  userById: (state) => state.userById,
};

const actions = {
  getUserInfo: ({ commit }) => {
    const user = localStorage.getItem("users");
    commit("setUsers", JSON.parse(user));
  },
  getAllUsers: async ({ commit }) => {
    const users = await userService.getAllUsers();
    users.map(user => {
      user['name']= user.first_name+' '+user.last_name;
    })
    commit("setAllUsers", users);
  },
  getUserById: async ({ commit }, id) => {
    const userById = await userService.getUserById(id);  
    commit("setUserById", userById.data[0]);
  }
};

const mutations = {
  setUsers: (state, value) => (state.users = value),
  setAllUsers: (state, value) => (state.allUsers = value),
  setUserById: (state, value) => (state.userById = value),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
