import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import { Product } from '../types';
import ProductForm from './ProductForm';
import './ProductList.css';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);

  const fetchProducts = () => {
    setLoading(true);
    getProducts()
      .then(setProducts)
      .catch((err) => setError('Erro ao carregar produtos: ' + (err?.message || err)))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductCreated = () => {
    setShowForm(false);
    fetchProducts();
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="product-list">
      <h2>Produtos Cadastrados</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th style={{ width: '160px', textAlign: 'left' }}>Nome</th>
            <th style={{ width: '120px', textAlign: 'left' }}>Preço</th>
            <th style={{ width: '160px', textAlign: 'left' }}>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr key={prod.id}>
              <td>{prod.nome}</td>
              <td>R$ {prod.preco}</td>
              <td>{prod.categoria}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setShowForm(true)} style={{marginTop: '16px'}}>Cadastrar Novo Produto</button>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowForm(false)}>&times;</button>
            <ProductForm onProductCreated={handleProductCreated} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
