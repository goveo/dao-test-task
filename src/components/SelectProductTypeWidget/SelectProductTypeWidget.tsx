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
  text?: string;
}

export const SelectProductTypeWidget: React.FC<Props> = ({
  prices,
  onClick,
  text = 'До кошика'
}) => {
  const [selectedItem, setSelectedItem] = useState<CartItem>();

  return (
    <Root>
      <form>
        <InlineBlock>
          <Title>Тип</Title>
          <Title>Ціна</Title>
        </InlineBlock>
        {prices.map(({ type, price }) => (
          <InlineBlock key={type}>
            <RadioInput
              value={type}
              checked={selectedItem?.type === type}
              onChange={() => setSelectedItem({ type, price })}
            />
            <InputPrice checked={selectedItem?.type === type}>{price} грн</InputPrice>
          </InlineBlock>
        ))}
        <TotalPrice>
          <Price>{selectedItem?.price || 0} грн</Price>
          <Button disabled={!selectedItem} onClick={() => onClick(selectedItem)}>
            {text}
          </Button>
        </TotalPrice>
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

const InlineBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-self: center;
`;

const Title = styled.span`
  font-size: 18px;
  line-height: 21px;
`;

const InputPrice = styled.span<{ checked: boolean }>`
  min-width: 92px;
  text-align: right;
  font-weight: ${({ checked }) => (checked ? 'bold' : 'normal')};
`;

const Price = styled.span`
  font-size: 24px;
  line-height: 28px;
  margin-right: 16px;
`;

export default SelectProductTypeWidget;
