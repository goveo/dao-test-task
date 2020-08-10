import * as React from 'react';
import { SelectProductTypeWidget } from './components/SelectProductTypeWidget';
import styled from 'styled-components';

const App: React.FC = () => {
  return (
    <AppRoot>
      <SelectProductTypeWidget
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
        onClick={(item) => console.log('selected', item)}
      />
    </AppRoot>
  );
};

const AppRoot = styled.div`
  margin: 40px 20px;
`;

export default App;
