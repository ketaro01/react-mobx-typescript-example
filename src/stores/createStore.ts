import {MarketStore} from "./MarketStore";
import {STORE_MARKET, STORE_COUNTER} from '../constans';
import {CounterStore} from "./CounterStore";

export class createStores {
  private readonly [STORE_MARKET]: MarketStore;
  private readonly [STORE_COUNTER]: CounterStore;

  constructor() {
    this[STORE_MARKET] = new MarketStore(this);
    this[STORE_COUNTER] = new CounterStore(this);
  }
}
