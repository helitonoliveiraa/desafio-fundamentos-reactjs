import styled, { keyframes } from 'styled-components';

interface CardProps {
  total?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: -150px;
`;

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Card = styled.div`
  background: ${({ total }: CardProps): string => (total ? '#FF872C' : '#fff')};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${({ total }: CardProps): string => (total ? '#fff' : '#363F5F')};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  cursor: pointer;

  transition: transform 0.2s;

  animation: ${appearFromTop} 2s;

  &:hover {
    transform: translateY(-5px);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const TableContainer = styled.section`
  margin-top: 64px;

  animation: ${appear} 3s;

  table {
    width: 100%;
    border-spacing: 0 8px;

    thead {
      > tr {
        align-content: center;
        > th {
          svg {
            margin-left: 12px;
            /* padding-top: 5px; */
          }

          &:last-child {
            svg {
              color: #ff872c;
            }
          }
        }
      }
    }

    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;

      &.title {
        color: #363f5f;
      }

      &.income {
        color: #12a454;
      }

      &.outcome {
        color: #e83f5b;
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }

  tbody {
    tr {
      transition: box-shadow 0.2s;

      &:hover {
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
        transform: translateY(-1px);
      }
    }
  }
`;
