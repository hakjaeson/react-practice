import React from 'react';
import { useParams } from 'react-router-dom';
import ProductModifyComponent from '../../components/product/ProductModifyComponent';

const ProductModifyPage = () => {
  const { pno } = useParams();
  return (
    <div>
      ProductModifyPage
      <ProductModifyComponent />
    </div>
  );
};

export default ProductModifyPage;
