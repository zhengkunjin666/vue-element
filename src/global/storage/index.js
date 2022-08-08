import MyCookie from "./cookie";
import MyStorage from "./storage";
import MySession from "./session";

class DataStore {
  constructor() {
    this.init();
  }
  init() {
    this.map = new Map();
    this.storage = new MyStorage();
    this.session = new MySession();
    this.cookie = new MyCookie();
  }
  static getInstance() {
    if (!DataStore.instance) {
      DataStore.instance = new DataStore();
    }
    return DataStore.instance;
  }
  getToken() {
    return this.storage.get("token");
  }
  setToken(token) {
    this.storage.set("token", token);
  }
  clear() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  }
}

export default DataStore.getInstance();
