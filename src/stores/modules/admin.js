import adminService from "@/Services/Admin";

const state = {
  statistics: {},
  visitorCount: 0
};

const getters = {
  statistics: (state) => state.statistics,
  visitorCount: (state) => state.visitorCount,
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

  getVisitorCount: async ({ commit }) => {
    const visitorCount = await adminService.getViewCount();
    
    commit("setVisitorCount", visitorCount.counts);
  }
};

const mutations = {
  setStatistics: (state, value) => (state.statistics = value),
  setVisitorCount: (state, value) => (state.visitorCount = value),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
