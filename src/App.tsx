import React, { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal'
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './contexts/Transactions';

Modal.setAppElement('#root');

function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  const handleOpenModalNewTransaction = () => setIsNewTransactionModalOpen(true)
  const handleCloseModalNewTransaction = () => setIsNewTransactionModalOpen(false)
  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenModalNewTransaction} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseModalNewTransaction} />

    </TransactionsProvider>
  );
}

export default App;
