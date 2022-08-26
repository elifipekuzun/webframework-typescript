import { CollectionView } from './CollectionView';
import { UserShow } from './UserShow';
import { User, UserProps } from '../models/User';

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
