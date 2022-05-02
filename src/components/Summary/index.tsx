import * as S from './styles'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { handleFormatCurrencyBR } from '../TransactionItem'
import { useTransactions } from './../../hooks/useTransactions';

export function Summary() {

  const { transactions } = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    }
    else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })


  return (
    <S.SummaryWrapper>
      <S.ItemWrapper>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{handleFormatCurrencyBR(summary.deposits)}</strong>
      </S.ItemWrapper>

      <S.ItemWrapper>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- {handleFormatCurrencyBR(summary.withdraws)}</strong>
      </S.ItemWrapper>

      <S.ItemWrapper>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong> {handleFormatCurrencyBR(summary.total)}</strong>
      </S.ItemWrapper>
    </S.SummaryWrapper>
  )
}
