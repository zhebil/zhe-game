const basePath = '/api/data/';

export const getServerData = async function (type) {};

export const addData = async function (path, data) {
  const res = await fetch(`${basePath}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  return json;
};

class Api {
  constructor() {
    this.dataPath = '/api/data/';
    this.presetsPath = '/api/presets/';
  }
  async getDataByType(type) {
    const res = await fetch(`${this.dataPath}${type}`);
    const data = await res.json();
    return data;
  }
  async postData(path, data) {
    const res = await fetch(`${this.dataPath}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    return json;
  }
  async updateData(path, data, id) {
    const res = await fetch(`${this.dataPath}${path}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    return json;
  }
  async deleteData(path, data, id) {
    const res = await fetch(`${this.dataPath}${path}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    const json = await res.json();
    return json;
  }
  async getPresets() {
    const res = await fetch(`${this.presetsPath}`);
    const data = await res.json();
    return data;
  }
  async createPreset(name) {
    const res = await fetch(`${this.dataPath}/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    const json = await res.json();
    return json;
  }
}

export default new Api();
