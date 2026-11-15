import React from 'react';
import {JURISDICTIONS, useJurisdiction} from '@site/src/jurisdiction/context';

// In an .mdx page: <Jurisdiction au>…</Jurisdiction> shows its children only when the reader
// has chosen that jurisdiction; several ids may be given (<Jurisdiction au sg>). Content with
// no wrapper is shown to everyone.
export function Jurisdiction({children, ...flags}) {
  const {id} = useJurisdiction();
  const wanted = JURISDICTIONS.map((j) => j.id).filter((j) => flags[j]);
  if (wanted.length === 0 || wanted.includes(id)) return <>{children}</>;
  return null;
}

// <JurisdictionBanner /> (also placed automatically on pages whose front matter lists
// `jurisdictions`): says which jurisdiction's content is showing and which are planned.
export function JurisdictionBanner({covers}) {
  const {id, jurisdiction} = useJurisdiction();
  const list = covers && covers.length ? covers : JURISDICTIONS.filter((j) => j.status === 'available').map((j) => j.id);
  const planned = JURISDICTIONS.filter((j) => j.status === 'planned');
  const coveredHere = list.includes(id);
  return (
    <div className={`alert ${coveredHere ? 'alert--secondary' : 'alert--warning'} jurisdiction-banner`} role="note">
      {coveredHere ? (
        <>
          Showing content for <strong>{jurisdiction.name}</strong>.
        </>
      ) : (
        <>
          This page is about <strong>{list.map((l) => JURISDICTIONS.find((j) => j.id === l)?.name ?? l).join(', ')}</strong>;
          your jurisdiction is set to {jurisdiction.name}.
        </>
      )}
      {planned.length > 0 && (
        <>
          {' '}
          {planned.map((j) => j.name).join(' and ')} {planned.length > 1 ? 'are' : 'is'} planned; the picker in the top bar
          will offer {planned.length > 1 ? 'them' : 'it'} when {planned.length > 1 ? 'they arrive' : 'it arrives'}.
        </>
      )}
    </div>
  );
}
