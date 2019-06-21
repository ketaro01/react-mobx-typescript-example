import * as React from 'react';
import styled from 'styled-components';

interface IBasketItemProps {
  name: string;
  price: number;
  count: number;
  onTake(name: string): void;
}

const styles = {
  container: styled.div`
    display: flex;
    width: 100%;
    .name {
      flex: 2;
    }
    
    .price {
      flex: 1;
    }
    
    .count {
      flex: 1;
    }
    
    .return {
      margin-left: auto;
      color: #f06595;
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
    
    +.basket_item {
      margin-top: 1rem;
    }
  `,
};


const BasketItem: React.FunctionComponent<IBasketItemProps> = ({ name, price, count, onTake }) => {
    return (
        <styles.container className="basket_item">
          <div className="name">{name}</div>
          <div className="price">{price}</div>
          <div className="count">{count}</div>
          <div className="return" onClick={() => onTake(name)}>갖다 놓기</div>
        </styles.container>
    )
};

export default BasketItem;