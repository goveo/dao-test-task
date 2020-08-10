import React from 'react';
import styled from 'styled-components';

export interface Props {
  labelText?: string;
  value: string;
  checked?: boolean;
  onChange(): void;
}

export const RadioInput: React.FC<Props> = ({ labelText, value, checked, onChange }) => {
  return (
    <Root>
      <Radio checked={checked}>
        <label>
          <Input
            type='radio'
            onChange={onChange}
            name={name}
            value={value}
            checked={checked}
            aria-checked={checked}
          />
          <CheckedDot />
        </label>
      </Radio>
      <ValueText checked={checked} onClick={onChange}>{labelText || value}</ValueText>
    </Root>
  );
};

interface ValueTextProps {
  checked?: boolean;
}

const ValueText = styled.span<ValueTextProps>`
  color: ${({ checked }) => (checked ? '#000000' : '#999999')};
  margin-left: 16px;
  cursor: pointer;
  word-break: break-word;
`;

const Root = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Radio = styled.div<{checked?: boolean}>`
  min-width: 24px;
  height: 24px;
  position: relative;

  &::before {
    content: '';
    border-radius: 100%;
    border: 1px solid ${({checked}) => checked ? '#6CA22C' : '#999999'};
    background: #FFFFFF;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 0;
  }
`;

const CheckedDot = styled.div`
  background: #6CA22C;
  width: 0;
  height: 0;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-in, height 0.2s ease-in;
  pointer-events: none;
  z-index: 1;
`;

const Input = styled.input`
  opacity: 0;
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:checked {
    & ~ ${CheckedDot} {
      width: calc(100% / 3);
      height: calc(100% / 3);
      transition: width 0.2s ease-out, height 0.2s ease-out;
    }
  }
`;

export default RadioInput;
