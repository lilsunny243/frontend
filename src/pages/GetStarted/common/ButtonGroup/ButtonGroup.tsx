import React from 'react';
import { Button } from '@/components/Button';
import styled from 'styled-components';

const ButtonGroupWrapper = styled.div`
  display: flex;

  button {
    padding: 8px;
    font-size: 0.85rem;
    color: var(--text-primary);
    font-weight: 600;
    position: relative;
    border-radius: 0;

    transition: background-color 0.1s;

    &.selected {
      background: var(--primary);
      color: #fff;
    }

    :only-child {
      border: 2px solid var(--border-color);
      border-radius: 5px;
    }

    :first-of-type:not(:only-of-type) {
      border: 2px solid var(--border-color);
      border-radius: 5px 0px 0px 5px;
    }

    :last-of-type:not(:only-of-type) {
      border-radius: 0px 5px 5px 0px;
    }

    border: 2px solid var(--border-color);
    border-left: 0px;
    background: var(--bg-primary);

    @media (min-width: 640px) {
      padding: 15px;
      font-size: 1rem;
    }
  }
`;

const OptionThumbnail = styled.img`
  height: 1em;
  width: 1em;
  margin-right: 0.5em;

  @media (min-width: 640px) {
    height: 2em;
    width: 2em;
    margin-right: 1em;
  }
`;

type ButtonGroupProps = {
  options: { key: string; label: string; logoURL?: string }[];
  selectedOption: string;
  setSelectedOption: (s: string) => void;
};

export const ButtonGroup = (props: ButtonGroupProps) => {
  return (
    <ButtonGroupWrapper>
      {props.options.map(({ key, logoURL, label }) => {
        return (
          <Button
            onClick={() => props.setSelectedOption(key)}
            className={`${props.selectedOption === key ? 'selected' : ''}`}
            key={key}
          >
            {logoURL && <OptionThumbnail src={logoURL} />}
            {label as string}
          </Button>
        );
      })}
    </ButtonGroupWrapper>
  );
};

export default ButtonGroup;
