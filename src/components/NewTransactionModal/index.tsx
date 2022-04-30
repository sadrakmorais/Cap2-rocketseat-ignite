import * as S from './styles'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react'
import { API } from '../../services/api'

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [value, setValue] = useState(0)

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault()

    const data = {
      title,
      value,
      category,
      type,
    }

    API.post('/transactions', data)

  }

  return (
    <Modal
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button type='button' onClick={onRequestClose} id="react-modal-close"><img src={closeImg} alt="fechar modal" /></button>

      <S.Form onSubmit={handleCreateNewTransaction}>
        <h2>Nova Transação</h2>
        <input
          type="text"
          placeholder='Titulo'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder='Valor'
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />
        <S.WrapperTransactionType>
          <S.Button
            activated={type === 'deposit'}
            activeColor='green'
            type='button'
            onClick={() => setType('deposit')}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.Button>
          <S.Button
            activated={type === 'withdraw'}
            activeColor='red'
            type='button'
            onClick={() => setType('withdraw')}

          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </S.Button>

        </S.WrapperTransactionType>
        <input
          type="text"
          placeholder='Categoria'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </S.Form >
    </Modal >
  )
}
