import React from 'react';
import styled from 'styled-components';

export interface Props {
  value: string | number;
  checked?: boolean;
  onChange(): void;
}

export const RadioInput: React.FC<Props> = ({ value, checked, onChange }) => {
  return (
    <label>
      <input
        type='radio'
        value={value}
        checked={checked}
        onChange={() => onChange()}
      />
      <ValueText checked={checked}>{value}</ValueText>
    </label>
  );
};

interface ValueTextProps {
  checked?: boolean;
}

const ValueText = styled.span<ValueTextProps>`
  color: ${({ checked }) => (checked ? '#000000' : '#999999')};
`;

export default RadioInput;
