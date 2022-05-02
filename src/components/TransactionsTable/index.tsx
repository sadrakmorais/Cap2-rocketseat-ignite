import * as S from './styles'
import { TransactionItem } from '../TransactionItem'
import { useTransactions } from './../../hooks/useTransactions';

export function TransactionsTable() {

  const { transactions } = useTransactions()

  return (
    <S.TransactionsWrapper>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {
            transactions.map(transaction => (
              <TransactionItem
                key={transaction.id}
                id={transaction.id}
                amount={transaction.amount}
                category={transaction.category}
                title={transaction.title}
                createdAt={transaction.createdAt}
                type={transaction.type}
              />
            ))
          }
        </tbody>
      </table>
    </S.TransactionsWrapper>
  )

}
