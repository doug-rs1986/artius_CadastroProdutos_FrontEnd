import { Product } from '../types';

const API_GET_URL = 'https://localhost:7257/buscarProdutos';
const API_POST_URL = 'https://localhost:7257/cadastrarProduto';

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(API_GET_URL);
    if (!response.ok) throw new Error('Erro ao buscar produtos');
    const result = await response.json(); 
    if (Array.isArray(result)) return result;
    if (result && Array.isArray(result.data)) return result.data;
    throw new Error('Formato de resposta inesperado da API');
  } catch (err: any) {
    throw new Error(err.message || 'Erro ao buscar produtos');
  }
}

export async function createProduct(product: Omit<Product, 'id'>): Promise<Product> {
  const response = await fetch(API_POST_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  if (!response.ok) throw new Error('Erro ao criar produto');
  return response.json();
}
