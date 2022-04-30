import styled from 'styled-components';
import { darken, transparentize } from 'polished';

type ButtonProps = {
  activated: boolean;
  activeColor: 'green' | 'red';
};

const colors = {
  green: '#33cc95',
  red: '#e52e40',
};

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  h2 {
    color: var(--tect-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    transition: 0.3s all ease;
    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const WrapperTransactionType = styled.div`
  width: 100%;
  gap: 0.5rem;
  display: flex;
`;

export const Button = styled.button<ButtonProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 0;
  gap: 1rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background: ${props =>
    props.activated
      ? transparentize(0.9, colors[props.activeColor])
      : 'transparent'};

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    color: var(--text-title);
  }
`;
