import { useState, useEffect } from 'react';

const useProductsData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetch('https://fakestoreapi.com/products').then(
          (response) => {
            if (response.status >= 400) {
              throw new Error('server error');
            }
            return response.json();
          }
        );

        setProducts(data);
      } catch (error) {
        alert(error);
      }
    };

    fetchProducts();
  }, []);

  return products;
};

export default useProductsData;
