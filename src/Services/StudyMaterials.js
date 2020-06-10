import axios from "axios";

const url = process.env.VUE_APP_API_BASE_URL + "api/studyMaterials";

class StudyMaterialService {
  static async getStudyMaterialByUploader(userId) {
    const studyMaterial = await axios.get(url + `/uploader/${userId}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwtToken"),
      },
    });

    return studyMaterial;
  }
}

export default StudyMaterialService;
