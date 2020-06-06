import adminService from "@/Services/Admin";

const state = {
  statistics: {},
};

const getters = {
  statistics: (state) => state.statistics,
};

const actions = {
  getStatistics: async ({ commit }) => {
    const statistics = await adminService.getStatistics();
    let stat = {};
    await statistics.data.map((data) => {
      stat[data.TABLE_NAME] = data.COUNT
      
    });

    commit("setStatistics", stat);
  },
};

const mutations = {
  setStatistics: (state, value) => (state.statistics = value),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
