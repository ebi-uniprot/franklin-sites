import React from 'react';

import Tile from '../components/tile';
import Paginator from '../components/pagination';

import { fetchPage } from '../common/sample-data';

const components = [{
  name: 'Tile',
  component: Tile,
  function: 'Provide a sneak peak and navigate to a searchable data section of the website.',
  purpose: 'Advertise a specific dataset of the website and provide searchable access to it.'
}, {
  name: 'Pagination',
  component: () => (
    <Paginator.Pagination fetchPage={fetchPage} currentPage="3" itemsPerPage="5" >
      <table className="hover" styles={{margin: '10px'}}>
        <thead>
          <tr>
            <th>Column A</th>
            <th>Column B</th>
          </tr>
        </thead>
        <tbody>
          <Paginator.Page>
            <Paginator.Item template={item => {
              return (
                <tr>
                  <td>A: {item.a}</td>
                  <td>B: {item.b}</td>
                </tr>
              );
            }} />
          </Paginator.Page>
        </tbody>
      </table>
      <Paginator.Pager template={button => () =>
        <button className={`button ${button.classes}`} onClick={button.onClick}>{button.label}</button>}
      >
        <Paginator.Previous />
        <Paginator.Steps />
        <Paginator.Next />
      </Paginator.Pager>
    </Paginator.Pagination>
  )
  ,
  function: 'Easy to use, customizable, Pagination component.',
  purpose: '...'
}];

export default components;
