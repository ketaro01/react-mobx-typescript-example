import * as React from 'react';
import BasketItem from "./BasketItem";
import {inject, observer} from 'mobx-react';
import {STORE_MARKET} from "../constans";
import {MarketStore} from '../stores'

interface IBasketItemListProps {
  [STORE_MARKET]?: MarketStore;
}

@inject(STORE_MARKET)
@observer
export default class BasketItemList extends React.Component<IBasketItemListProps> {
  public render() {
    const marketStore = this.props[STORE_MARKET] as MarketStore;
    return (
      <div>
        {marketStore.selectedItems.map((v, i) =>
          <BasketItem name={v.name} price={v.price} count={v.count} key={`${v.name}_${i}`} onTake={marketStore.take}/>
        )}
        <hr/>
        <p>
          <b>총합: </b> {marketStore.total}원
        </p>
      </div>
    )

  }
};