import axiosClient from "./axiosClient";

const userApi = {
  userLogin(data) {
    const url = "auth/login";
    return axiosClient.post(url, data);
  },
  registerEmail(data) {
    const url = "/auth/signup";
    return axiosClient.post(url, data);
  },
  verifyRegisterToken(token) {
    const url = "/auth/activate";
    return axiosClient.post(url, { params: { token }});
  },
  registerUser(data) {
    const url = "/auth/activate";
    return axiosClient.post(url, data);
  },
  resetPassword(data) {
    const url = "/auth/reset_password";
    return axiosClient.post(url, data);
  },
  userLogout(data) {
    const url = "/auth/logout";
    return axiosClient.post(url, data);
  }
};

export default userApi;
