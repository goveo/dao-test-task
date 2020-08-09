import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { RadioInput } from '../RadioInput';

type CartItem = {
  type: string;
  price: number;
};

export interface Props {
  prices: CartItem[];
  onClick(selected?: CartItem): void;
}

export const SelectProductTypeWidget: React.FC<Props> = ({
  prices,
  onClick,
}) => {
  const [selectedItem, setSelectedItem] = useState<CartItem>();

  return (
    <Root>
      <form>
        <FormItem>
          <Title>Тип</Title>
          <Title>Ціна</Title>
        </FormItem>
        {prices.map(({ type, price }) => (
          <FormItem key={type}>
            <RadioInput
              value={type}
              checked={selectedItem?.type === type}
              onChange={() => setSelectedItem({ type, price })}
            />
            <Price checked={selectedItem?.type === type}>{price} грн</Price>
          </FormItem>
        ))}
        <Button disabled={!selectedItem} onClick={() => onClick(selectedItem)}>
          До кошика
        </Button>
      </form>
    </Root>
  );
};

const Root = styled.div`
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  padding: 24px;
`;

const FormItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
`;

const Title = styled.span`
  font-size: 18px;
  line-height: 21px;
`;

const Price = styled.span<{ checked: boolean }>`
  min-width: 92px;
  text-align: right;
  font-weight: ${({ checked }) => (checked ? 'bold' : 'normal')};
`;

export default SelectProductTypeWidget;
