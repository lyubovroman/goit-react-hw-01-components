import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
  width: 75vw;
  margin: auto;
  border-spacing: 0;
  box-shadow: 1px 2px 10px -4px rgba(66, 68, 90, 1);
  margin-bottom: 40px;
  
`;
export const TableHead = styled.thead`
  background-color: #dbedff;
  height: 48px;
  
`;
export const TableBody = styled.tbody`
  background-color: snow;
  
`;
export const TransactionsTableTr = styled.tr`

  height: 40px;
  &:nth-of-type(1n) {
    background-color: #d1e8ff;
  }
  &:nth-of-type(2n) {
    background-color: #f5f9fd;
  }
`;
export const TransactionsTableTh = styled.th`
border-radius: 30px;
  padding: 0;
  width: 33.3%;
  border: 1px solid black;
  font-size: 24px;
  background-color: violet;
  &:nth-of-type(1) {
    border-right: none;
  }
  &:nth-of-type(2) {
    border-right: none;
  }
`;
export const TransactionsTableTd = styled.td`
border-radius: 30px;
  border: 1px solid black;
  text-align: center;
  font-size: 22px;
  color: grey;
  padding: 12px auto;
  &:nth-of-type(3) {
    border-right: 1px solid black;
  }
`;