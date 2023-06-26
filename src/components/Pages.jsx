import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const Pages = observer(() => {
  const { product } = useContext(Context);
  const pageCount = Math.ceil(product.totalCount / product.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li
          key={page}
          className={product.page === page ? 'pagination__item--active' : 'pagination__item'}
          onClick={() => product.setPage(page)}>
          <span>{page}</span>
        </li>
      ))}
    </ul>
  );
});

export default Pages;
