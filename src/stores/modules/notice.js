import noticeService from "@/Services/Notice";

const state = {
  notices: [],
};

const getters = {
  notices: (state) => state.notices,
};

const actions = {
  getNotices: async ({ commit }) => {
    const notices = await noticeService.getNotices();

    commit("setNotices", notices);
  },
};

const mutations = {
  setNotices: (state, value) => (state.notices = value),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
