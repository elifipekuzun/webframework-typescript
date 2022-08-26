import { User } from './models/User';
import { UserList } from './views/UserList';

const userCollection = User.buildUserCollection();

userCollection.on('change', () => {
  const list = document.getElementById('root');
  if (list) {
    new UserList(list, userCollection).render();
  }
});
