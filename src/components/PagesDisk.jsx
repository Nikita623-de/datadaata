import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const PagesDisk = observer(() => {
  const { disk } = useContext(Context);
  const pageCount = Math.ceil(disk.totalCount / disk.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li
          key={page}
          className={disk.page === page ? 'pagination__item--active' : 'pagination__item'}
          onClick={() => disk.setPage(page)}>
          <span>{page}</span>
        </li>
      ))}
    </ul>
  );
});

export default PagesDisk;
