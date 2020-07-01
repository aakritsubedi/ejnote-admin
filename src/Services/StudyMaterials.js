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
  
  static async getAllStudyMaterial() {
    const studyMaterials = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwtToken"),
      },
    });

    return studyMaterials;
  }

  static async getStudyMaterialById(id) {
    const studyMaterial = await axios.get(url + `/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwtToken"),
      },
    });
    console.log(studyMaterial);
    
    return studyMaterial;
  }

}

export default StudyMaterialService;
