import React, { Fragment } from 'react';
import Obsolete from '../svg/obsolete.svg';
import SwissProt from '../svg/swissprot.svg';
import Trembl from '../svg/trembl.svg';
import ChevronDown from '../svg/chevron-down.svg';
import ChevronUp from '../svg/chevron-up.svg';
import Tag from '../svg/tag.svg';

const size = 50;

const iconDefinition = [
  {
    name: 'swissprot.svg',
    description: 'SwissProt reviewed',
    icon: <SwissProt width={size} height={size} />,
  },
  {
    name: 'trembl.svg',
    description: 'Trembl unreviewed',
    icon: <Trembl width={size} height={size} />,
  },
  {
    name: 'obsolete.svg',
    description: 'Obsolete entry',
    icon: <Obsolete width={size} height={size} />,
  },
  {
    name: 'tag.svg',
    description: 'Tag',
    icon: <Tag width={size} height={size} />,
  },
  {
    name: 'chevron-up.svg',
    description: 'Chevron Up',
    icon: <ChevronUp width={size} height={size} />,
  },
  {
    name: 'chevron-down.svg',
    description: 'Chevron Down',
    icon: <ChevronDown width={size} height={size} />,
  },
];

const Icons = () => (
  <Fragment>
    <h1 id="icons">Icons</h1>
    <div className="icon-list">
      {iconDefinition.map(d => (
        <div className="icon-container" key={d.name}>
          <h5>{d.description}</h5>
          {d.icon}
        </div>
      ))}
    </div>
  </Fragment>
);

export default Icons;
