import axios from "axios";

const url = process.env.VUE_APP_API_BASE_URL + "api";

class AdminService {
  static async getStatistics() {
    const statistics = await axios.get(url + "/admin/statistics", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwtToken"),
      },
    });

    return statistics;
  }

  static async getViewCount() {
    const viewCount = await axios.get(url + "/view-counts");

    return viewCount.data[0];
  }
}

export default AdminService;
