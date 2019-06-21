import * as React from "react";
import {observer, inject} from "mobx-react";
import {STORE_COUNTER} from '../constans'
import {CounterStore} from '../stores'

export interface ICounterProps {
  [STORE_COUNTER]?: CounterStore,
}

@inject(STORE_COUNTER)
@observer
class Counter extends React.Component<ICounterProps, any> {
  public render() {
    const {number, increase, decrease} = this.props[STORE_COUNTER] as CounterStore;
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
      </div>
    );
  }
}

export default Counter;