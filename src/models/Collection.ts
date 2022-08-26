import { Eventing } from './Eventing';
import { instance } from './ApiSync';
import { AxiosResponse } from 'axios';

export class Collection<T, K> {
  public models: T[] = [];
  public events: Eventing = new Eventing();

  constructor(public url: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    instance
      .get(this.url)
      .then((response: AxiosResponse) => {
        const collection = response.data;
        collection.forEach((value: K) => {
          const model = this.deserialize(value);
          this.models.push(model);
        });
        this.trigger('change');
      })
      .catch(console.log);
  }
}
