import * as S from './styles'
import { useEffect } from 'react'
import { API } from '../../services/api'
export function TransactionsTable() {

  useEffect(() => {
    API.get('/transactions')
      .then(data => console.log('oi', data.data))
  }, [])

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
          <tr>
            <td>Freela</td>
            <td className='deposit'>R$ 6000,00</td>
            <td>Job</td>
            <td>11/02/2022</td>
          </tr>
          <tr>
            <td>Miojo doce</td>
            <td className='withDraw'>- R$ 1000,00</td>
            <td>Job</td>
            <td>11/02/2022</td>
          </tr>
          <tr>
            <td>Jogo do bicho</td>
            <td className='deposit'>R$ 3000,00</td>
            <td>Job</td>
            <td>11/02/2022</td>
          </tr>
        </tbody>
      </table>
    </S.TransactionsWrapper>
  )

}
