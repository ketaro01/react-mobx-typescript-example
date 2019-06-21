import * as React from 'react';
import styled from 'styled-components';

interface ISuperMarketTemplateProps {
  items?: JSX.Element;
  basket?: JSX.Element;
}

const styles = {
  container: styled.div`
    width: 768px;
    display: flex;
    border: 1px solid black;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
    
    h2 {
        margin-top: 0;
    }
    
    > div {
      padding: 1rem;
      flex: 1;
    }
    
    .items-wrapper {
      background: #f8f9fa;
    }
  `,
};

const SuperMarketTemplate: React.FunctionComponent<ISuperMarketTemplateProps> = ({items, basket}) => {
  return (
    <styles.container>
      <div className="items-wrapper">
        <h2>상품</h2>
        {items}
      </div>
      <div className="basket-wrapper">
        <h2>장바구니</h2>
        {basket}
      </div>
    </styles.container>
  )
};

export default SuperMarketTemplate;