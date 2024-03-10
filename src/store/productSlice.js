import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await axios.get('/api/products');
    return response.data;
  } catch (error) {
    throw Error('Error fetching products: ' + error.message);
  }
});

export const fetchProductById = createAsyncThunk('products/fetchProductById', async (productId) => {
  try {
    const response = await axios.get(`/api/products/${productId}`);
    return response.data;
  } catch (error) {
    throw Error('Error fetching product: ' + error.message);
  }
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    selectedCategory: null,
    selectedFilter: null,
    selectedBrand: 'null',
    selectedProduct: null, 
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },
    setBrand: (state, action) => {
      state.selectedBrand = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setProducts, setCategory, setFilter, setBrand, setSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;
