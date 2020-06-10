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
};

const getters = {
  uploaderMaterials: (state) => state.uploaderMaterials,
};

const actions = {
  getUploaderMaterials: async ({ commit }, userId) => {
    const studyMaterial = await studyMaterialService.getStudyMaterialByUploader(
      userId
    );
    
    commit("setUploaderMaterials", groupBy(studyMaterial.data.message,'semester'));
  },
};

const mutations = {
  setUploaderMaterials: (state, value) => (state.uploaderMaterials = value),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
