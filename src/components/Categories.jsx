import React, { useEffect } from 'react';
import { Button, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setCategory } from '../store/productSlice.js';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.data?.map((product) => product.category));
  const selectedCategory = useSelector((state) => state.products.selectedCategory);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category === selectedCategory ? null : category));
  };

  return (
    <Grid container spacing={4} sx={{}}>
      {Array.from(new Set(categories)).map((category, i) => (
        <Grid item xs={6} key={i}>
            <Button
          key={category}
          variant={category === selectedCategory ? 'contained' : 'outlined'}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Categories;
