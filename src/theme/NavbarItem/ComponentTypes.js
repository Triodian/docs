import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import JurisdictionDropdownNavbarItem from './JurisdictionDropdownNavbarItem';

// Registers {type: 'custom-jurisdiction'} for docusaurus.config.js navbar items.
export default {
  ...ComponentTypes,
  'custom-jurisdiction': JurisdictionDropdownNavbarItem,
};
