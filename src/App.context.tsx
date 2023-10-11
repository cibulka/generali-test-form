import { PropsWithChildren, createContext, useContext } from 'react';

import { Lang } from './constants/i18n';

const AppContext = createContext<{
  lang: Lang;
} | null>(null);

export function AppContextWrap(props: PropsWithChildren & { lang: Lang }) {
  return <AppContext.Provider value={{ lang: props.lang }}>{props.children}</AppContext.Provider>;
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('Missing AppContext');
  return ctx;
}
