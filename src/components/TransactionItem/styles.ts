import styled from 'styled-components';

export const TransactionItem = styled.tr`
  td {
    padding: 1rem 2rem;
    border: 0;
    background-color: var(--shape);
    color: var(--text-body);
    border-radius: 0.25rem;

    &:first-child {
      color: var(--text-title);
    }

    &.deposit {
      color: var(--green);
    }

    &.withdraw {
      color: var(--red);
    }

    @media (max-width: 500px) {
      padding: 0.8rem 1.5rem;
    }
  }
`;
