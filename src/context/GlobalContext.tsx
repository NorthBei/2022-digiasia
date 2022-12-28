import { useDisclosure } from '@chakra-ui/react';
import { createContext, ReactNode, useContext } from 'react';

type GlobalContextValue = {
  eventClosedModal: ReturnType<typeof useDisclosure>;
};

type GlobalProviderProps = {
  children: ReactNode;
};

const GlobalContext = createContext<GlobalContextValue | null>(null);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
};

export const GlobalProvider = (props: GlobalProviderProps) => {
  const { children } = props;
  const eventClosedModal = useDisclosure();

  const value = {
    eventClosedModal,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
