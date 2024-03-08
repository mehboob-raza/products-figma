import React, { useEffect, useState } from 'react';
import { Box, Card, Typography, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, setCategory, setBrand } from '../store/productSlice.js';
import { FaStar } from "react-icons/fa6";

const ProductCards = ({ sidebarOpen }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const selectedCategory = useSelector((state) => state.products.selectedCategory);
  const selectedFilter = useSelector((state) => state.products.selectedFilter);
  const selectedBrand = useSelector((state) => state.products.selectedBrand);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filterProducts = () => {
  let filtered = [...products];

  if (selectedCategory) {
    filtered = filtered.filter((product) => product.category === selectedCategory);
    dispatch(setBrand(null)); 
  }

  if (selectedBrand) {
    filtered = filtered.filter((product) => product.brand.name === selectedBrand);
    dispatch(setCategory(null)); 
  }

  setFilteredProducts(filtered.length > 0 ? filtered : products); 
};


  useEffect(() => {
    filterProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, selectedCategory, selectedFilter, selectedBrand]);

  const mainBodyStyle = {
    marginTop: '64px',
    marginLeft: sidebarOpen ? '320px' : '0', 
    transition: 'margin-left 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', 
    padding: '16px'
  };

  return (
    <div style={mainBodyStyle}>
      <Box>
        <Typography variant='h3' sx={{ mb: 4 }}> Products </Typography>
        <Grid container spacing={1}>
          {products && filteredProducts?.map((product) => (
            <Grid item key={product?.productId} md={4} sm={6} xs={12}>
              <Card
                sx={{
                  width: '100%',
                  height: '320px',
                  position: 'relative',
                  p: 2
                }}
              >
                <Box component='img' src={product?.imageUrl} alt='prod image' sx={{ width: '100%', height: '187', background: '#EDEDED' }} />
                <Box>
                  <Typography variant='h6' sx={{ fontWeight: '600', fontSize: '18px' }}>{product?.productName}</Typography>
                  <Typography sx={{ fontSize: '14px', color: '#000000' }}> {product?.brand?.name}</Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontWeight: '500', fontSize: '16px', color: '#000' }}>${product?.price}</Typography>
                    <Typography sx={{ fontWeight: '500', fontSize: '12px', color: '#000', display: 'flex', alignItems: 'center', gap: '2px' }}> <FaStar style={{
                      color: '#FFAD33',
                    }} /> {product?.rating}</Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ProductCards;
