import axios, { AxiosPromise } from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

export interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  constructor(public url: string) {}

  fetch(id: number): AxiosPromise {
    return instance.get(`${this.url}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      return instance.put(`${this.url}/${id}`, data);
    } else {
      return instance.post(this.url, data);
    }
  }
}
