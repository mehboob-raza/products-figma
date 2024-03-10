import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../store/productSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.products.selectedProduct);

//   console.log('Fetching product with ID:', id);
    useEffect(() => {
    dispatch(fetchProductById(id));
    }, [dispatch, id]);

// console.log('Selected product:', selectedProduct);

  if (!selectedProduct) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <div>
      <Typography variant="h3">{selectedProduct?.productName}</Typography>
      <Typography variant="subtitle1">Brand: {selectedProduct?.brand.name}</Typography>
      <Typography variant="body1">Price: ${selectedProduct?.price}</Typography>
      <Typography variant="body1">Rating: {selectedProduct?.rating}</Typography>
      
    </div>
  );
};

export default ProductDetail;
