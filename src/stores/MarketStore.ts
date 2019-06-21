import {observable, action, computed} from 'mobx';
import {STORE_COUNTER} from '../constans'
interface MarketItem {
  name: string;
  price: number;
  count: number;
}

export class MarketStore {
  public root: any;
  readonly selectedItems = observable<MarketItem>([]);

  constructor(root: any){
    this.root = root;
  }

  @action
  put = (name: string, price: number) => {
    const { number } = this.root[STORE_COUNTER];
    const exists = this.selectedItems.find(item => item.name === name);
    if (!exists) {
      this.selectedItems.push({
        name,
        price,
        count: 1,
      });
      return;
    }
    exists.count += number;
  };

  @action
  take = (name: string) => {
    const itemToTake = this.selectedItems.find(item => item.name === name);
    if (!itemToTake) return;
    itemToTake.count--;
    if (itemToTake.count === 0) {
      this.selectedItems.remove(itemToTake);
    }
  };

  @computed
  get total() {
    console.log('총합계산');
    return this.selectedItems.reduce((a, b) => {
      return a + b.price * b.count;
    }, 0)
  };


}