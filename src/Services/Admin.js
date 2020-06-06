import axios from "axios";

const url = process.env.VUE_APP_API_BASE_URL + "api/admin";

class AdminService {
  static async getStatistics() {
    const statistics = await axios.get(url + "/statistics", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwtToken"),
      },
    });

    return statistics;
  }
}

export default AdminService;
