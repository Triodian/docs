// The reader's chosen jurisdiction, shared by the navbar picker, the <Jurisdiction> content
// component and the per-page banner. Kept in localStorage under one key, and readable from a
// ?jurisdiction=au query parameter so a link can preselect it.

import React, {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import config from '@site/jurisdictions.json';

export const JURISDICTIONS = config.jurisdictions;
export const AVAILABLE = JURISDICTIONS.filter((j) => j.status === 'available');
export const DEFAULT_ID = AVAILABLE[0].id;
const STORAGE_KEY = 'triodian.jurisdiction';

const Ctx = createContext({id: DEFAULT_ID, jurisdiction: JURISDICTIONS[0], setId: () => {}});

function isSelectable(id) {
  return AVAILABLE.some((j) => j.id === id);
}

export function JurisdictionProvider({children}) {
  const isBrowser = useIsBrowser();
  const [id, setIdState] = useState(DEFAULT_ID);

  // On first render in the browser: the query parameter wins, then the stored choice.
  useEffect(() => {
    if (!isBrowser) return;
    let next = null;
    try {
      const fromQuery = new URLSearchParams(window.location.search).get('jurisdiction');
      if (fromQuery && isSelectable(fromQuery)) {
        next = fromQuery;
        window.localStorage.setItem(STORAGE_KEY, next);
      }
      if (!next) {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored && isSelectable(stored)) next = stored;
      }
    } catch {
      // storage unavailable: keep the default
    }
    if (next && next !== id) setIdState(next);
  }, [isBrowser]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!isBrowser) return;
    document.documentElement.setAttribute('data-jurisdiction', id);
  }, [isBrowser, id]);

  const setId = useCallback((next) => {
    if (!isSelectable(next)) return;
    setIdState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo(
    () => ({id, jurisdiction: JURISDICTIONS.find((j) => j.id === id) ?? JURISDICTIONS[0], setId}),
    [id, setId],
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useJurisdiction() {
  return useContext(Ctx);
}
