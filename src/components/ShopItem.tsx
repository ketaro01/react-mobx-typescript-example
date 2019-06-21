import * as React from 'react';
import styled from 'styled-components';

interface IShopItemProps {
  name: string;
  price: number;
  onPut(name: string, price: number): void;
}

const styles = {
  container: styled.div`
    background: white;
    border: 1px solid #495057;
    padding: 0.5rem;
    border-radius: 2px;
    cursor: pointer;
    
    h4 {
      margin-top: 0;
      margin-bottom: 1rem;
    }
    
    :hover {
      background: #495057;
      color: white;
    }
    
    +.shop_item {
      margin-top: 1rem;
    }
  `
};

const ShopItem: React.FunctionComponent<IShopItemProps> = ({ name, price, onPut }) => {
    return (
        <styles.container className="shop_item" onClick={() => onPut(name, price)}>
          <h4>{name}</h4>
          <div>{price}원</div>
        </styles.container>
    )
}

export default ShopItem;