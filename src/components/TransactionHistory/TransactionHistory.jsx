import PropTypes from 'prop-types';
import {
  TransactionsTable,
  TableHead,
  TableBody,
  TransactionsTableTr,
  TransactionsTableTh,
  TransactionsTableTd,
} from './TransactionHistory.styled';

export default function TransactionHistory({items}) {
    return (
<TransactionsTable>
      <TableHead>
        <TransactionsTableTr>
          <TransactionsTableTh>Type</TransactionsTableTh>
          <TransactionsTableTh>Amount</TransactionsTableTh>
          <TransactionsTableTh>Currency</TransactionsTableTh>
        </TransactionsTableTr>
      </TableHead>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionsTableTr key={id}>
            <TransactionsTableTd>{type}</TransactionsTableTd>
            <TransactionsTableTd>{amount}</TransactionsTableTd>
            <TransactionsTableTd>{currency}</TransactionsTableTd>
          </TransactionsTableTr>
        ))}
      </TableBody>
    </TransactionsTable>
    )
}

TransactionHistory.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};