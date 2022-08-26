import { Collection } from '../models/Collection';

export abstract class CollectionView<T, K> {
  abstract renderItem(model: T, itemParent: Element): void;
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  render(): void {
    this.parent.innerHTML = '';
    const template = document.createElement('template');
    this.collection.models.map((model) => {
      const itemParent = document.createElement('div');
      this.renderItem(model, itemParent);
      template.content.append(itemParent);
    });
    this.parent.append(template.content);
  }
}
