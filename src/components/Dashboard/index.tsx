
import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'
import * as S from './styles'

export function Dashboard() {

  return (
    <S.DashboardWrapper>
      <Summary />
      <TransactionsTable />

    </S.DashboardWrapper>
  )
}
