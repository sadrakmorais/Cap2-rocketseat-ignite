import styled from 'styled-components';

export const TransactionsWrapper = styled.div`
  margin-top: 4rem;
  overflow-x: auto;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
  }

  th {
    color: var(--text-body);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  @media (max-width: 500px) {
    margin-top: 1rem;

    th {
      padding: 0.8rem 1.5rem;
    }
  }
`;
