import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../contentful/client";
import {
  setNavbar,
  setBanner,
  setPromo,
  setCategories,
  setOffers,
  setProducts,
  setFooter,
  setSocials,
} from "../slices/dataSlice";

/*** ASYNC CALLS ***/

export const fetchAllData = createAsyncThunk(
  "dataSlice/fetchData",
  async () => {
    try {
      const { items } = await client.getEntries({
        content_type: "cms",
        select: "fields",
        include: 3,
      });
      //   console.log(items[0].fields);
      return items[0].fields;
    } catch (error) {
      console.log(error);
    }
  }
);

/*** SYNC CALLS ***/

export const addNavbarData = (data) => (dispatch) => {
  try {
    dispatch(setNavbar(data));
  } catch (error) {
    console.log(error);
  }
};

export const addBannerData = (data) => (dispatch) => {
  try {
    dispatch(setBanner(data));
  } catch (error) {
    console.log(error);
  }
};

export const addPromoData = (data) => (dispatch) => {
  try {
    dispatch(setPromo(data));
  } catch (error) {
    console.log(error);
  }
};

export const addCategoriesData = (data) => (dispatch) => {
  try {
    dispatch(setCategories(data));
  } catch (error) {
    console.log(error);
  }
};

export const addOffersData = (data) => (dispatch) => {
  try {
    dispatch(setOffers(data));
  } catch (error) {
    console.log(error);
  }
};

export const addProductsData = (data) => (dispatch) => {
  try {
    dispatch(setProducts(data));
  } catch (error) {
    console.log(error);
  }
};

export const addFooterData = (data) => (dispatch) => {
  try {
    dispatch(setFooter(data));
  } catch (error) {
    console.log(error);
  }
};

export const addSocialsData = (data) => (dispatch) => {
  try {
    dispatch(setSocials(data));
  } catch (error) {
    console.log(error);
  }
};
