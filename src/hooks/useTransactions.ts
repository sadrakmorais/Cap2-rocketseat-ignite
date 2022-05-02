import { useContext } from 'react';

import {
  TransactionContextData,
  TransactionsContext,
} from '../contexts/Transactions';

export function useTransactions(): TransactionContextData {
  return useContext(TransactionsContext);
}
