import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';

function App() {
  const [dataProduct, setDataProduct] = useState([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/products?limit=100');
      const jsonData = await response.json();
      const { products } = jsonData;
      setDataProduct(products);
    };
    fetchData();
  }, []);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filter = dataProduct.filter((products) =>
      products.title.toLowerCase().includes(query.toLowerCase())
    );
    setDataProduct(filter);
  };

  return (
    <>
      <div class="card">
        <h4>
          <b>Products</b>
        </h4>
        <p>Search</p>
        <form onSubmit={handleSubmit}>
          <select value={category} onChange={handleCategoryChange}>
            <option value="all">전체</option>
            <option value="product">상품명</option>
            <option value="brand">브랜드</option>
            <option value="description">상품내용</option>
          </select>
          <input type="text" value={query} onChange={handleQueryChange} />
          <button type="submit">Search</button>
        </form>
      </div>
      <Pagination data={dataProduct} itemsPerPage={10} />;
    </>
  );
}

export default App;
