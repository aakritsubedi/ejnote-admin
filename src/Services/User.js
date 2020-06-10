import axios from "axios";

const url = process.env.VUE_APP_API_BASE_URL + "api/users";

class UserService {
  //Login
  static async getAllUsers() {
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

  static async getUserById(id) {
    const userById = await axios.get(url + "/" + id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwtToken"),
      },
    });

    return userById;
  }
}

export default UserService;
