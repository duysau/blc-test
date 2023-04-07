import React, { useState } from 'react';
import Table from './Table';

const Pagination = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  const handleClick = (type) => {
    if (type === 'prev') {
      setCurrentPage(currentPage - 1);
    } else if (type === 'next') {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(type);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const pageNumbers = [];
  for (let i = 1; i <= maxPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Table data={currentItems} />
      <div>
        <button
          onClick={() => handleClick('prev')}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handleClick(number)}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => handleClick('next')}
          disabled={currentPage === maxPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
