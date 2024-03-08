import React, { useEffect, useState } from 'react';
import { Button, Box, Checkbox, FormControlLabel } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setBrand } from '../store/productSlice.js';
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Brands = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const selectedBrand = useSelector((state) => state.products.selectedBrand);

  const [brandsVisible, setBrandsVisible] = useState(false);
  const [checkedBrand, setCheckedBrand] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const brands = [...new Set(products?.map((product) => product.brand.name))];

  const handleBrandClick = (brand) => {
    dispatch(setBrand(brand === selectedBrand ? null : brand));
    setCheckedBrand(brand === selectedBrand ? null : brand);
    console.log('brand', brand);
  };

  const toggleBrandsVisibility = () => {
    setBrandsVisible(!brandsVisible);
  };

  return (
    <Box display="flex" flexDirection="column" >
      <Button onClick={toggleBrandsVisibility} endIcon={<span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: '700' }}>{brandsVisible ? <IoIosArrowUp /> : <MdOutlineKeyboardArrowDown />}</span>} sx={{
        color: '#000'
      }}>
        Brand
      </Button>
      {brandsVisible &&
        brands.map((brand) => (
          <Box key={brand} display="flex" alignItems="center">
            <FormControlLabel
              control={<Checkbox checked={checkedBrand === brand} onChange={() => handleBrandClick(brand)} />}
            />
            <Button
              variant={brand === selectedBrand ? 'contained' : 'outlined'}
              onClick={() => handleBrandClick(brand)}
            >
              {brand}
            </Button>
            <span style={{ marginLeft: '8px' }}>
              ({products.filter((product) => product.brand.name === brand).length})
            </span>
          </Box>
        ))}
    </Box>
  );
};

export default Brands;
