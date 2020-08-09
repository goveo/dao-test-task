import * as React from 'react';
import { SelectProductTypeWidget } from '../src/components/SelectProductTypeWidget/SelectProductTypeWidget';
import { action } from '@storybook/addon-actions';

export const Regular: React.FC = () => {
  return (
    <SelectProductTypeWidget
      prices={[
        {
          type: '500г',
          price: 500,
        },
        {
          type: '100г',
          price: 150,
        },
        {
          type: '50г',
          price: 90,
        },
      ]}
      onClick={() => console.log('clicked')}
    />
  );
};

export const WithLongTypes: React.FC = () => {
  return (
    <SelectProductTypeWidget
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

export default {
  title: 'Common/SelectProductTypeWidget',
  component: SelectProductTypeWidget,
};
