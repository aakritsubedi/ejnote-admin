import axios from "axios";

const url = process.env.VUE_APP_API_BASE_URL + "api/notice";

class NoticeService {
  static async getNotices() {
    return axios
      .get(url, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwtToken"),
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((error) => console.log(error));
  }

  static async addNotice(notice) {
    return axios.post(url, notice, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwtToken"),
      },
    })
  }
}

export default NoticeService;
