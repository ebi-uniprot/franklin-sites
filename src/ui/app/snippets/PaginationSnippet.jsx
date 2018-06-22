import React from 'react';
import Paginator from '../../components/pagination';
import { fetchPage } from '../../common/sample-data';

const PaginationSnippet = () => (
  <Paginator.Pagination fetchPage={fetchPage} currentPage="3" itemsPerPage="5">
    <table className="hover" styles={{ margin: '10px' }}>
      <thead>
        <tr>
          <th>Column A</th>
          <th>Column B</th>
        </tr>
      </thead>
      <tbody>
        <Paginator.Page>
          <Paginator.Item
            template={item => (
              <tr>
                <td>A: {item.a}</td>
                <td>B: {item.b}</td>
              </tr>
            )}
          />
        </Paginator.Page>
      </tbody>
    </table>
    <Paginator.Pager
      template={button => () => (
        <button className={`button ${button.classes}`} onClick={button.onClick}>
          {button.label}
        </button>
      )}
    >
      <Paginator.Previous />
      <Paginator.Steps />
      <Paginator.Next />
    </Paginator.Pager>
  </Paginator.Pagination>
);

export default PaginationSnippet;
