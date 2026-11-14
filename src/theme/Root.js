import React from 'react';
import {JurisdictionProvider} from '@site/src/jurisdiction/context';

// Wraps the whole site so the jurisdiction choice is available everywhere.
export default function Root({children}) {
  return <JurisdictionProvider>{children}</JurisdictionProvider>;
}
