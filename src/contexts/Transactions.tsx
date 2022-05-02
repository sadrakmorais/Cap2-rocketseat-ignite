import { createContext, ReactNode, useEffect, useState } from 'react'
import { TransactionItemProps } from '../components/TransactionItem';
import { API } from '../services/api';


type TransactionsProviderProps = {
  children: ReactNode;
}

type TransactionInputProps = Omit<TransactionItemProps, 'id' | 'createdAt'>

export type TransactionContextData = {
  transactions: TransactionItemProps[];
  createNewTransaction: (transaction: TransactionInputProps) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {

  const [transactions, setTransactions] = useState<TransactionItemProps[]>([])

  useEffect(() => {
    API.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  const createNewTransaction = async (transactionInput: TransactionInputProps) => {

    const response = await API.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    })
    const { transaction } = response.data

    setTransactions([
      ...transactions,
      transaction
    ])


  }

  return (

    <TransactionsContext.Provider value={{ transactions, createNewTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )

}
