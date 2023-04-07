import React from 'react';
import './App.css';

const Table = ({ data }) => {
  console.log('data', data);
  return (
    <table id="product">
      <thead>
        <tr>
          <th>상품번호</th>
          <th>상품명</th>
          <th>브랜드</th>
          <th>상품내용</th>
          <th>가격</th>
          <th>평점</th>
          <th>재고</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.brand}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.rating}</td>
            <td>{item.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
