import * as React from 'react';
import styled, { css } from 'styled-components';

import { noop } from '../../utils/noop';

const StyledButton = styled.button`
  padding: 0px 20px;
  height: 49px;
  border-radius: 2px;
  border: 2px solid var(--ui-bkgd, #3d5567);
  display: inline-flex;
  background-color: var(--ui-bkgd, #3d5567);

  & span {
    margin: auto;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
  }

  ${({ disabled }: ButtonProps) =>
    disabled
      ? css`
          --ui-bkgd: rgba(61, 85, 103, 0.3);
        `
      : css`
          &:hover {
            cursor: pointer;
          }
        `}
`;

export interface ButtonProps {
  /** this dictates what the button will say  */
  children: React.ReactNode;
  /** this dictates what the button will do  */
  onClick: () => void;
  /**
   * Disables onclick
   *
   * @default false
   **/
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} onClick={!disabled ? onClick : noop}>
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
