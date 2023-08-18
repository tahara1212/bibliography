import { navigationItems } from '@/const/navigationItems';
import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react';

type NavigationContextType = {
  openList: boolean[]
  setOpen: Dispatch<SetStateAction<boolean[]>>
}

export const NavigationContext = createContext<NavigationContextType>({
  openList: [],
  setOpen: () => {}
});

type Children = {
  children: ReactNode;
};

export const NavigationProvider = ({ children }: Children) => {
  const [openList, setOpen] = useState(() => {
    return navigationItems.map((v, i) => (i === 0 ? true : false));
  });

  return (
    <NavigationContext.Provider value={{ openList, setOpen }}>
      {children}
    </NavigationContext.Provider>
  );
};
