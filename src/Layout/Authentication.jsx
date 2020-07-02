class Auth {
  constructor() {
    this.authenticated = false;
    this.tenant_id = '';
  }
  setToken(data) {
    console.log(data);
    const expires = new Date(data.expires);
    const item = {
      value: data.token,
      expiry: expires,
      tenantId: data.tenant_id
    }
    localStorage.setItem("token", JSON.stringify(item));
  }

  tokenExpirityChecking(token) {
    const item = JSON.parse(token);
    const now = new Date();
    const expiry = new Date(item.expiry);
    if(now.getTime() > expiry.getTime()) {
      localStorage.removeItem("token");
      return false
    } 
    return true;
    
  }
  isAuthenticated() {
    const token = localStorage.getItem('token');
    if(token) {
      if(this.tokenExpirityChecking(token)) {
        this.authenticated = true;
        return this.authenticated;
      } 
      return false
    }
    return false;
  }
}
export default new Auth();