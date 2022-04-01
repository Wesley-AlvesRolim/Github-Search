class LocalStorage {
  constructor(field) {
    this.field = field;
  }

  getItem() {
    const dataInLocalStorage = localStorage.getItem(this.field);
    let data = JSON.parse(dataInLocalStorage);
    data = data === null || typeof data[0] !== 'object' ? [] : data;
    return data;
  }

  setItem(value) {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(this.field, jsonValue);
  }
}

export { LocalStorage };
