import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { RadioInput } from '../RadioInput';
import Cart from '../../icons/CartIcon.svg';

type CartItem = {
  type: string;
  price: number;
};

export interface Props {
  prices: CartItem[];
  onSubmit(selected?: CartItem): void;
  submitButtonText?: string;
}

export const PriceSelector: React.FC<Props> = ({
  prices,
  onSubmit,
  submitButtonText = 'До кошика'
}) => {
  const [selectedItem, setSelectedItem] = useState<CartItem>();

  return (
    <Root>
      <Form>
        <Title>
          <span>Тип</span>
          <span>Ціна</span>
        </Title>
        {prices.map(({ type, price }) => (
          <PriceOption key={type} onClick={() => setSelectedItem({ type, price })}>
            <RadioInput
              value={type}
              checked={selectedItem?.type === type}
              onChange={() => setSelectedItem({ type, price })}
            />
            <InputPrice checked={selectedItem?.type === type}>{price} грн</InputPrice>
          </PriceOption>
        ))}
      </Form>
      <TotalPrice>
        {selectedItem && <Price>{selectedItem.price} грн</Price>}
        <Button disabled={!selectedItem} onClick={() => onSubmit(selectedItem)}>
          <StyledCard /> {submitButtonText}
        </Button>
      </TotalPrice>
    </Root>
  );
};

const Root = styled.div`
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  padding: 24px;
`;

const Form = styled.form`
  margin-bottom: 28px;
`;

const PriceOption = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  cursor: pointer;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-self: center;
`;

const Title = styled.span`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 18px;
  line-height: 21px;
  font-weight: 400;
`;

const InputPrice = styled.span<{ checked: boolean }>`
  min-width: 92px;
  text-align: right;
  font-weight: ${({ checked }) => (checked ? 'bold' : 'normal')};
  color: ${({ checked }) => (checked ? '#000000' : '#999999')};
`;

const Price = styled.span`
  font-size: 24px;
  line-height: 28px;
  margin-right: 16px;
`;

const StyledCard = styled(Cart)`
  margin-right: 8px;
`;

export default PriceSelector;
