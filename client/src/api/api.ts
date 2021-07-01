import { store } from '../redux/store';
import { ID, oneDataItem } from '../types';
import { logError, logSuccess } from '../utillity';

interface postData {
  text: string;
}

type presetPaths = {
  truth: string;
  dare: string;
  never: string;
};
interface onePresetItem {
  id: ID;
  name: string;
  data: presetPaths;
}
interface IGetData {
  data: oneDataItem[];
  skip: number;
  total: number;
}

interface presetsData {
  message: string;
  presets: onePresetItem[];
}

class Api {
  constructor(private dataPath: string, private presetsPath: string) {}
  async getDataByType(type: string): Promise<IGetData> {
    const res = await fetch(`${this.dataPath}${type}`);
    const data = await res.json();

    return data;
  }

  async postData(path: string, data: postData) {
    const res = await fetch(`${this.dataPath}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await res.json();

    if (res.ok) {
      store.dispatch(logSuccess(json.message));
      return json;
    } else {
      store.dispatch(logError(json.message));
    }
  }

  async updateData(path: string, data: postData, id: ID) {
    const res = await fetch(`${this.dataPath}${path}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    return json;
  }

  async deleteData(path: string, data: postData, id: ID) {
    const res = await fetch(`${this.dataPath}${path}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    const json = await res.json();
    return json;
  }

  async getPresets(): Promise<presetsData> {
    const res = await fetch(`${this.presetsPath}`);
    const data = await res.json();

    return data;
  }

  async createPreset(name: string) {
    const res = await fetch(`${this.presetsPath}create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    const json = await res.json();
    if (res.ok) {
      store.dispatch(logSuccess(json.message));
      return json;
    } else {
      store.dispatch(logError(json.message));
    }
  }
}
export default new Api('/api/data/', '/api/presets/');
