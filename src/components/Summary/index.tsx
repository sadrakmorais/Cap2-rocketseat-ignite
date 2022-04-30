import * as S from './styles'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
  return (
    <S.SummaryWrapper>
      <S.ItemWrapper>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </S.ItemWrapper>

      <S.ItemWrapper>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>R$ 200,00</strong>
      </S.ItemWrapper>

      <S.ItemWrapper>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 800,00</strong>
      </S.ItemWrapper>
    </S.SummaryWrapper>
  )
}
