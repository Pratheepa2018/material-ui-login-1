class Auth {
  constructor() {
    this.authenticated = false;
  }
  isAuthenticated() {
    const token = localStorage.getItem('token');
    if(token) {
      this.authenticated = true;
      return this.authenticated;
    }else{
      return false;
    }
  }
}
export default new Auth();