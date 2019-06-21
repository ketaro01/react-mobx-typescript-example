import React from "react";
import SuperMarketTemplate from "./components/SuperMarketTemplate";
import SuperMarketList from './components/ShopItemList';
import BasketItemList from "./components/BasketItemList";
import Counter from './components/Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <Counter/>
      <hr/>
      <SuperMarketTemplate items={<SuperMarketList />} basket={<BasketItemList />} />
    </div>
  );
};

export default App;
