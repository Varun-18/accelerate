import { createSlice } from "@reduxjs/toolkit";
import { fetchAllData } from "../action/dataSlice.action";

const state = {
  allData: {},
  loading: false,
  navbar: [],
  banner: [],
  promo: [],
  categories: [],
  offers: [],
  products: [],
  footer: [],
  socials: [],
  error: "",
};

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: state,
  reducers: {
    setNavbar: (state, action) => {
      return { ...state, navbar: action.payload };
    },
    setBanner: (state, action) => {
      return { ...state, banner: action.payload };
    },
    setPromo: (state, action) => {
      return { ...state, promo: action.payload };
    },
    setCategories: (state, action) => {
      return { ...state, categories: action.payload };
    },
    setOffers: (state, action) => {
      return { ...state, offers: action.payload };
    },
    setProducts: (state, action) => {
      return { ...state, products: action.payload };
    },
    setFooter: (state, action) => {
      return { ...state, footer: action.payload };
    },
    setSocials: (state, action) => {
      return { ...state, socials: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllData.pending, (state, action) => {
        return { ...state, loading: true };
      })
      .addCase(fetchAllData.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          allData: action.payload,
        };
      })
      .addCase(fetchAllData.rejected, (state, action) => {
        return { ...state, loading: false, error: "cant fetch all data" };
      });
  },
});

export const {
  setNavbar,
  setBanner,
  setPromo,
  setCategories,
  setOffers,
  setProducts,
  setFooter,
  setSocials
} = dataSlice.actions;

export default dataSlice.reducer;
