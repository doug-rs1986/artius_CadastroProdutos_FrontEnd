import React, { useState } from 'react';
import { createProduct } from '../api/products';
import { Product } from '../types';
import './ProductForm.css';

interface Props {
  onProductCreated: (product: Product) => void;
}

const ProductForm: React.FC<Props> = ({ onProductCreated }) => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const product = await createProduct({ nome, preco: Number(preco), categoria });
      setMessage('Produto cadastrado com sucesso!');
      setNome('');
      setPreco('');
      setCategoria('');
      onProductCreated(product);
    } catch (err) {
      setMessage('Erro ao cadastrar produto.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <label>
        Nome:
        <input value={nome} onChange={e => setNome(e.target.value)} required />
      </label>
      <label>
        Preço:
        <input type="number" value={preco} onChange={e => setPreco(e.target.value)} required />
      </label>
      <label>
        Categoria:
        <input value={categoria} onChange={e => setCategoria(e.target.value)} required />
      </label>
      <button type="submit" disabled={loading}>Cadastrar</button>
      <div className="response-label">{message}</div>
    </form>
  );
};

export default ProductForm;
