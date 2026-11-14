import React from 'react';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import {JURISDICTIONS, useJurisdiction} from '@site/src/jurisdiction/context';

// A navbar dropdown listing every jurisdiction. Available ones select; planned ones are shown
// greyed with "coming", so a reader knows the site covers them in time without being able to
// pick an empty set of pages.
export default function JurisdictionDropdownNavbarItem({mobile, position, className}) {
  const {id, jurisdiction, setId} = useJurisdiction();
  const items = JURISDICTIONS.map((j) =>
    j.status === 'available'
      ? {
          label: j.name,
          to: '#',
          className: j.id === id ? 'dropdown__link--active' : undefined,
          onClick: (e) => {
            e.preventDefault();
            setId(j.id);
          },
        }
      : {
          label: `${j.name} (coming)`,
          to: '#',
          className: 'jurisdiction-dropdown__planned',
          onClick: (e) => e.preventDefault(),
        },
  );
  return (
    <DropdownNavbarItem
      mobile={mobile}
      position={position}
      className={className}
      label={
        <span className="jurisdiction-dropdown__label" title="Jurisdiction">
          <span aria-hidden="true">🌏</span> {mobile ? `Jurisdiction: ${jurisdiction.name}` : jurisdiction.short}
        </span>
      }
      items={items}
    />
  );
}
