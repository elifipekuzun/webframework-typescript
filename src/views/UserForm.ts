import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.save-model': this.onSaveClick,
      'click:.set-name': this.onSetNameClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSaveClick = async (): Promise<void> => {
    await this.model.save();
  };

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}"/>
        <div>
         <button class='set-name'>Change Name</button>
         <button class="set-age">Set Random Age</button>
        </div>
        <div>
         <button class="save-model">Save</button>
        </div>
      </div>
    `;
  }
}
