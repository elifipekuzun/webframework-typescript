import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { Collection } from './Collection';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {
  static buildUser(data: UserProps): User {
    return new User(
      new Attributes<UserProps>(data),
      new Eventing(),
      new ApiSync<UserProps>('/users')
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    const collection = new Collection('/users', (json: UserProps) =>
      User.buildUser(json)
    );
    collection.fetch();
    return collection;
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
