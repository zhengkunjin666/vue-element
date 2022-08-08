class SessionStorage {
  constructor() {
    this.prefix = "pro_";
    this.stroage = window.sessionStorage;
  }
  set(key, value) {
    const prefixKey = this.prefix + key;
    const data = JSON.stringify(value);
    this.stroage.setItem(prefixKey, data);
  }
  get(key) {
    const prefixKey = this.prefix + key;
    const data = this.stroage.getItem(prefixKey);
    return JSON.parse(data);
  }
  delete(key) {
    const prefixKey = this.prefix + key;
    this.removeItem(prefixKey);
  }
}

export default SessionStorage;
