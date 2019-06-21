import * as React from 'react';
import ShopItem from "./ShopItem";
import {inject, observer} from 'mobx-react';
import {STORE_MARKET} from "../constans";
import {MarketStore} from '../stores'

interface IShopItemListProps {
  [STORE_MARKET]?: MarketStore;
}

const items = [
  {
    name: '생수',
    price: 850,
  },
  {
    name: '신라면',
    price: 900,
  },
  {
    name: '포카칩',
    price: 1500,
  },
  {
    name: '새우깡',
    price: 1000,
  },
];

@inject(STORE_MARKET)
@observer
export default class ShopItemList extends React.Component<IShopItemListProps> {
  public render() {
    const marketStore = this.props[STORE_MARKET] as MarketStore;
    return (<>
      {items.map(item => <ShopItem {...item} key={item.name} onPut={marketStore.put} />)}
    </>);
  }
};
