import { store } from '../redux/store';
import { ID, oneDataItem } from '../types';
import { logSuccess } from '../utillity';

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

type fetchParamsType = [string, object?];

class Api {
  constructor(private dataPath: string, private presetsPath: string) {}
  async getDataByType(type: string): Promise<IGetData> {
    const res = await fetch(`${this.dataPath}${type}`);
    const data = await res.json();

    return data;
  }

  private async fetchWrapper<T>(...fetchParams: fetchParamsType): Promise<T> {
    const res = await fetch(...fetchParams);
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.message);
    } else {
      store.dispatch(logSuccess(json.message));
      return json;
    }
  }

  postData(path: string, data: postData) {
    return this.fetchWrapper(`${this.dataPath}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  updateData(path: string, data: postData, id: ID) {
    return this.fetchWrapper(`${this.dataPath}${path}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  deleteData(path: string, id: ID) {
    return this.fetchWrapper(`${this.dataPath}${path}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  getPresets(): Promise<presetsData> {
    return this.fetchWrapper(`${this.presetsPath}`);
  }

  createPreset(name: string) {
    return this.fetchWrapper(`${this.presetsPath}create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
  }

  deletePreset(id: ID) {
    return this.fetchWrapper(`${this.presetsPath}${id}`, {
      method: 'DELETE',
    });
  }

  getPreset(name: string) {
    return this.fetchWrapper(`${this.presetsPath}${name}`);
  }
}
export default new Api('/api/data/', '/api/presets/');
