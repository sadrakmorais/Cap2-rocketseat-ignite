import * as S from './styles'
import { useState, useEffect } from 'react';


export type TransactionItemProps = {
  id: string;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

export const handleFormatCurrencyBR = (amount: number) => {

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRl',
  }).format(amount)
}

export const handleFormatDate = (date: string) => {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date))
}

export function TransactionItem({ amount, category, createdAt, title, type }: TransactionItemProps) {

  const [formattedAmount, setFormattedAmount] = useState('')
  const [formattedDate, setFormattedDate] = useState('')

  useEffect(() => {
    setFormattedAmount(handleFormatCurrencyBR(amount))
    setFormattedDate(handleFormatDate(createdAt))
  }, [amount, createdAt])

  return (
    <S.TransactionItem>
      <td>{title}</td>
      <td className={type}>{type === 'deposit' ? formattedAmount : `- ${formattedAmount}`}</td>
      <td>{category}</td>
      <td>{formattedDate}</td>
    </S.TransactionItem>
  )

}
