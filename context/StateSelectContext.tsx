import React, { createContext, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

interface State {
  label: string;
  value: string;
}

interface StateSelectContextProps {
  selectedState: State | null;
  setSelectedState: Dispatch<SetStateAction<State | null>>;
}

const StateSelectContext = createContext<StateSelectContextProps | undefined>(undefined);

export const StateSelectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedState, setSelectedState] = React.useState<State | null>(null);

  return (
    <StateSelectContext.Provider value={{ selectedState, setSelectedState }}>
      {children}
    </StateSelectContext.Provider>
  );
};

export const useStateSelect = (): StateSelectContextProps => {
  const context = useContext(StateSelectContext);
  if (!context) {
    throw new Error('useStateSelect must be used within a StateSelectProvider');
  }
  return context;
};
