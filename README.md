# Cadastro de Produtos - Frontend

Uma aplicação React + TypeScript para cadastro e listagem de produtos, integrando com uma API REST. Interface responsiva, clean e moderna, exibindo produtos em tabela e permitindo cadastro via popup.

## Tecnologias Utilizadas

- **React** (v18)
- **TypeScript**
- **Webpack** (empacotamento)
- **CSS Modules** (estilização)
- **Fetch API** (requisições HTTP)

## Bibliotecas Principais

- `react`
- `react-dom`
- `typescript`
- `webpack`, `webpack-cli`, `webpack-dev-server`
- `ts-loader`
- `css-loader`, `style-loader`

## Funcionalidades

- Listagem de produtos em tabela (Nome, Preço, Categoria)
- Cadastro de novos produtos via popup/modal
- Consumo de API REST (`GET` e `POST`)
- Interface responsiva para mobile, tablet e desktop
- Mensagens de erro e carregamento amigáveis

## Como Executar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/artius_CadastroProdutos_FrontEnd.git
   cd artius_CadastroProdutos_FrontEnd
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   ```
   O app estará disponível em [http://localhost:3000](http://localhost:3000).

4. **Certifique-se que a API está rodando em:**
   - `https://localhost:7257/buscarProdutos` (GET)
   - `https://localhost:7257/cadastrarProduto` (POST)

> **Atenção:**  
> Para funcionar localmente, a API precisa liberar CORS para o frontend (`http://localhost:3000`).  
> Se usar HTTPS, aceite o certificado no navegador.

## Estrutura de Pastas

```
src/
  ├── api/
  │     products.ts
  ├── components/
  │     ProductList.tsx
  │     ProductForm.tsx
  ├── styles/
  │     responsive.css
  ├── types/
  │     index.ts
  ├── App.tsx
  └── index.tsx
public/
  └── index.html
```

## Personalização

- Edite os estilos em `src/styles/responsive.css` para ajustar o visual.
- Ajuste os endpoints da API em `src/api/products.ts` conforme necessário.

## Licença

MIT

---

Desenvolvido por Douglas Rodrigues (https://github.com/doug-rs1986)
