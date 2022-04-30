import * as S from './styles';
import LogoImg from '../../assets/logo.svg';

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {


  return (
    <S.HeaderWrapper>
      <S.NavHeader>
        <img src={LogoImg} alt="Logo dtmoney" />
        <S.Button onClick={onOpenNewTransactionModal}>Nova transação</S.Button>
      </S.NavHeader>
    </S.HeaderWrapper>
  );
}
