import studyMaterialService from "@/Services/StudyMaterials";

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    // Add object to list for given key's value
    acc[key].push(obj);
    return acc;
  }, {});
}

const state = {
  uploaderMaterials: [],
  allMaterials: [],
  materialById: []
};

const getters = {
  uploaderMaterials: (state) => state.uploaderMaterials,
  allMaterials: (state) => state.allMaterials,
  materialById: (state) => state.materialById,
};

const actions = {
  getUploaderMaterials: async ({ commit }, userId) => {
    const studyMaterial = await studyMaterialService.getStudyMaterialByUploader(
      userId
    );

    commit(
      "setUploaderMaterials",
      groupBy(studyMaterial.data.message, "semester")
    );
  },
  getAllStudyMaterial: async ({ commit }) => {
    const studyMaterial = await studyMaterialService.getAllStudyMaterial();

    commit("setAllMaterials", studyMaterial.data.message);
  },
  getStudyMaterialById: async ({ commit }, id) => {
    const studyMaterial = await studyMaterialService.getStudyMaterialById(id);

    commit("setMaterialById", studyMaterial.data.message[0]);
  },
};

const mutations = {
  setUploaderMaterials: (state, value) => (state.uploaderMaterials = value),
  setAllMaterials: (state, value) => (state.allMaterials = value),
  setMaterialById: (state, value) => (state.materialById = value)
};

export default {
  state,
  getters,
  actions,
  mutations,
};
