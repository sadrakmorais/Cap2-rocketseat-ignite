import styled from 'styled-components';

export const SummaryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemWrapper = styled.div`
  background-color: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--text-title);

  &:last-child {
    background-color: var(--green);
    color: var(--shape);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }

  @media (max-width: 500px) {
    padding: 1rem 1.5rem;
  }
`;
