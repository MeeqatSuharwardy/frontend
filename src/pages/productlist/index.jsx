import React, { useEffect, useState } from 'react';
import MainLayout from "../../layouts/main";
import PageHeader from '../../components/Page-header';
import ProductCard from '../../components/ProductCard';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://mundo.herokuapp.com/api/products");
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <MainLayout>
      <PageHeader title="Accessories" fullPath={[]} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products && products.length > 0 && products.map((product) => (
  <ProductCard key={product.id} product={product} />
))}
      </div>
    </MainLayout>
  );
}
export default ProductList;
