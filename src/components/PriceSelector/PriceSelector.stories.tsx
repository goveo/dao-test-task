import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { PriceSelector } from './PriceSelector';

export const Regular: React.FC = () => {
  return (
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
      onClick={action('clicked')}
    />
  );
};

export const WithLongTypes: React.FC = () => {
  return (
    <PriceSelector
      prices={[
        {
          type: 'Example: Long name of product',
          price: 500.0,
        },
        {
          type:
            'Another very long string with symbols that describes type of product',
          price: 199.99,
        },
        {
          type:
            'Last\u00A0test\u00A0with\u00A0no\u00A0spaces\u00A0between\u00A0words\u00A0/\u00A0extra\u00A0large\u00A0word',
          price: 99.99,
        },
      ]}
      onClick={action('clicked')}
    />
  );
};

export const LongList: React.FC = () => {
  return (
    <PriceSelector
      prices={Array.from(Array(15).keys()).map((item) => ({
        type: item + 1 + '',
        price: (item + 1) * 100,
      }))}
      onClick={action('clicked')}
    />
  );
};

export default {
  title: 'Common/PriceSelector',
  component: PriceSelector,
};
