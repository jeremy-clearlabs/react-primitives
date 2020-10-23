import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import usePrevious from '../../hooks/usePrevious';

const CheckboxWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 2rem;
  height: 2rem;
  vertical-align: middle;
  margin-right: 0.4rem;

  & input[type='checkbox'] {
    opacity: 0;
    z-index: 1;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  & + div {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 0;
  }

  & input[type='checkbox'] + div::before {
    content: '';
    position: absolute;
    top: 0;
    border: 1px solid #a7b7c4;
    width: 100%;
    height: 100%;
    border-radius: 0.2rem;
    box-sizing: border-box;
  }

  & input[type='checkbox']:checked + div::before {
    content: '';
    position: absolute;
    top: 0;
    border: 0;
    background-color: #39c5f3;
    width: 100%;
    height: 100%;
    border-radius: 0.2rem;
    box-sizing: border-box;
  }

  & input[type='checkbox']:checked + div::after {
    content: '';
    position: absolute;
    left: 20%;
    top: 30%;
    height: 20%;
    width: 45%;
    border-color: #1b3342;
    border-left: 2px solid;
    border-bottom: 2px solid;
    transform: rotate(-45deg);
  }

  & input[type='checkbox']:indeterminate + div::before {
    content: '';
    position: absolute;
    top: 0;
    border: 0;
    background-color: #39c5f3;
    width: 100%;
    height: 100%;
    border-radius: 0.2rem;
    box-sizing: border-box;
  }

  & input[type='checkbox']:indeterminate + div::after {
    content: '';
    position: absolute;
    left: 16%;
    top: 30%;
    height: 12%;
    width: 67%;
    border-bottom: 3px solid;
    border-color: #1b3342;
  }

  & input[type='checkbox']:focus + div::before {
    box-shadow: 0 0 2px 2px rgba(255, 255, 255, 0.45);
  }
`;
const StyledInput = styled.input`
  background-color: rgba(108, 120, 129, 0.24);
  border-radius: 0;
  border: 0;
  box-sizing: border-box;
  display: inline-block;
  font-size: 1.6rem;
  height: auto;
  margin: 0 0.2rem 0 0;
  width: auto;

  &:disabled {
    cursor: not-allowed;
  }
`;

interface CheckboxProps {
  checked: boolean;
  indeterminate: boolean;
  subtype: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, indeterminate, subtype, ...props }: CheckboxProps) => {
  const ref = useRef<HTMLInputElement>();
  const previousIndeterminate = usePrevious(indeterminate);
  const previousChecked = usePrevious(checked);

  // NOTE: Allow indeterminate prop to handle the input ref instance
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes
  useEffect(() => {
    if (indeterminate && ref?.current) {
      ref.current.indeterminate = true;
    }
    if (checked && ref?.current) {
      ref.current.checked = true;
    }
  }, []);

  useEffect(() => {
    if (previousIndeterminate && !indeterminate && ref?.current) {
      ref.current.indeterminate = false;
    }
    if (!previousIndeterminate && indeterminate && ref?.current) {
      ref.current.indeterminate = true;
    }
  }, [indeterminate]);

  useEffect(() => {
    if (previousChecked && !checked && ref?.current) {
      ref.current.checked = false;
    }
    if (!previousChecked && !indeterminate && checked && ref?.current) {
      ref.current.checked = true;
    }
  }, [checked]);

  if (subtype === 'normalCheckbox') {
    // NOTE: Does not need a forward ref if we are accessing normal DOM elements rather than React.Component
    return <input type="checkbox" ref={ref} {...props} checked={checked} />;
  }

  return (
    <CheckboxWrapper>
      <StyledInput ref={ref} type="checkbox" {...props} />
      <div />
    </CheckboxWrapper>
  );
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
