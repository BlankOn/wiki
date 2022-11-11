import React from 'react';
import Translate from '@docusaurus/Translate';
import {ThemeClassNames} from '@docusaurus/theme-common';
export default function EditThisPage({editUrl}) {
  return (
    <a
      href={editUrl}
      target="_blank"
      rel="noreferrer noopener"
      style={{marginRight: '15px'}}
      className={ThemeClassNames.common.editThisPage}>
      <svg
        fill="currentColor"
        height="1.2em"
        width="1.2em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 16 16"
        style={{
          marginRight: '0.3em',
          verticalAlign: 'sub',
        }}>
        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
      </svg>
      <Translate
        id="theme.common.editThisPage"
        description="The link label to edit the current page">
        Page History
      </Translate>
    </a>
  );
}
