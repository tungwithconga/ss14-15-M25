interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
  }
  
  async function fetchProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) {
      throw new Error('Lỗi');
    }
    return res.json();
  }
  export default async function ProductsPage() {
    const products: Product[] = await fetchProducts();
    return (
      <div>
        <h1>Danh sách sản phẩm</h1>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {products.map((product) => (
            <li key={product.id} style={{ marginBottom: '30px', borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>
              <img src={product.image} 
              alt={product.title} 
              style={{ width: '100px', 
              height: '100px', 
              objectFit: 'contain' }}/>
              <h2>{product.title}</h2>
              <p>Giá: ${product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  