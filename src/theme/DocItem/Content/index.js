import React from 'react';
import Content from '@theme-original/DocItem/Content';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import {JurisdictionBanner} from '@site/src/components/Jurisdiction';

// Pages whose front matter lists `jurisdictions: [au, …]` get the banner above their content.
export default function ContentWrapper(props) {
  const {frontMatter} = useDoc();
  const covers = frontMatter.jurisdictions;
  return (
    <>
      {Array.isArray(covers) && covers.length > 0 && <JurisdictionBanner covers={covers} />}
      <Content {...props} />
    </>
  );
}
