import React, { useCallback } from 'react';
import { PriceSelector } from './components/PriceSelector';
import styled from 'styled-components';

const App: React.FC = () => {
  const onClick = useCallback((item) => {
    alert(`selected: ${JSON.stringify(item)}`);
  }, []);
  return (
    <AppRoot>
      <PriceSelector
        prices={[
          {
            type: '500 г',
            price: 500,
          },
          {
            type: '100 г',
            price: 150,
          },
          {
            type: '50 г',
            price: 90,
          },
        ]}
        onClick={onClick}
      />
    </AppRoot>
  );
};

const AppRoot = styled.div`
  margin: 40px 20px;
`;

export default App;
