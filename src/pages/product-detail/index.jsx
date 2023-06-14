import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MainLayout from '../../layouts/main';
import PageHeader from '../../components/Page-header';
import { useRouter } from 'next/router';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log('Fetching product:', id);
        const response = await axios.get(`http://localhost:8000/api/products/${id}`);
        setProduct(response.data);
        console.log('Fetched product:', response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <PageHeader title="Product Details" fullPath={[]} />
      <div>
        <h2>{product.name}</h2>
        <p>Price: £{product.price}</p>
        <p>{product.description}</p>
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
