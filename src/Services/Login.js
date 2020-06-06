import axios from "axios";
import router from '@/router';

const url = process.env.VUE_APP_API_BASE_URL+"api/login";

class LoginService {
  static async login(users) {
    const loginUser = await axios.post(url, users);
    const { user, jwtToken } = loginUser.data;
    
    if(!user) {
      const { code, message } = loginUser.data;
      return {
        code: code,
        message: message
      }
    }
    this.saveToken(user,jwtToken);

    return user;
  }

  static saveToken(user,jwtToken) {
    localStorage.setItem("users", JSON.stringify(user))
    localStorage.setItem("jwtToken", jwtToken);
  }

  static logout(){
    localStorage.clear();
    router.push('login');
  }
}

export default LoginService;
