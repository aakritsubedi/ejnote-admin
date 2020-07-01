import axios from "axios";
import router from '@/router';

const url = process.env.VUE_APP_API_BASE_URL+"api/login";

class LoginService {
  static async login(users) {
    const loginUser = await axios.post(url, users);
    const { user, exp, jwtToken } = loginUser.data;
    
    if(!user) {
      const { code, message } = loginUser.data;
      return {
        code: code,
        message: message
      }
    }
    this.saveToken(user, exp, jwtToken);

    return user;
  }

  static saveToken(user, exp, jwtToken) {
    localStorage.setItem("users", JSON.stringify(user));
    localStorage.setItem("jwtToken", jwtToken);
    localStorage.setItem("exp", exp);
  }

  static logout(){
    localStorage.clear();
    router.push({ name: 'login' });
  }
}

export default LoginService;
