import React from 'react';
import styled from 'styled-components';

export interface Props {
  text?: string;
  color?: string;
  disabled?: boolean;
  onClick(): void;
}

export const Button: React.FC<Props> = ({
  text,
  disabled,
  color,
  onClick,
  children,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      color={color}
    >
      {text || children}
    </StyledButton>
  );
};

interface StyleProps {
  color?: string;
  disabled?: boolean;
}

const StyledButton = styled.button<StyleProps>`
  border: none;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  color: inherit;
  text-decoration: none;
  transition: opacity 0.2s ease-in-out;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;

  height: 48px;
  background-color: ${({ color }) => (color ? color : '#6ca22c')};

  font-weight: bold;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;

  ${({ disabled }) => (disabled ? 'opacity: 0.5' : '')};

  :active {
    opacity: 0.5;
    transition: none;
  }
`;

export default Button;
