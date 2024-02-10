type UserInfo = {
  username: string;
  token: string;
};

class AuthStore {
  USER_IDENTY_KEY = "user1";

  storeToken(username: string, token: string) {
    localStorage.setItem(
      this.USER_IDENTY_KEY,
      JSON.stringify({ username, token }),
    );
  }

  async retrieveUsername() {
    try {
      const _userInfo0 = localStorage.getItem(this.USER_IDENTY_KEY);
      const _userInfo = (await JSON.parse(_userInfo0 ?? "")) as UserInfo;
      return _userInfo.username;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async retreiveToken() {
    try {
      const _userInfo0 = localStorage.getItem(this.USER_IDENTY_KEY);
      const _userInfo = (await JSON.parse(_userInfo0 ?? "")) as UserInfo;
      return _userInfo.token;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

const authStore = new AuthStore();
export default authStore;