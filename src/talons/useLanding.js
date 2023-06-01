import _ from "lodash";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addNavbarData,
  fetchAllData,
  addBannerData,
  addPromoData,
  addCategoriesData,
  addOffersData,
  addProductsData,
  addFooterData,
  addSocialsData,
} from "../store/action/dataSlice.action";

const useLanding = () => {
  const {
    allData,
    navbar,
    banner,
    promo,
    categories,
    offers,
    products,
    footer,
    socials,
  } = useSelector((state) => state.data);

  console.log(socials, "*********");

  const dispatch = useDispatch();

  useEffect(() => {
    setNavbarData();
    setBannerData();
    setPromoData();
    setCategoriesData();
    setOfferData();
    setProductsData();
    setFooterData();
    setSocialsData();
  }, [allData]);

  /*** SEPRATE NAVBAR DATA ***/

  const setNavbarData = () => {
    if (_.size(allData) > 0) {
      if (allData.navbar && _.size(navbar) === 0) {
        const data = allData.navbar.map((item) => item.fields);
        dispatch(addNavbarData(data));
      }
    }
  };

  /*** SEPRATE BANNER DATA ***/

  const setBannerData = () => {
    if (_.size(allData) > 0) {
      if (allData.mainBanner && _.size(banner) === 0) {
        const data = allData.mainBanner.map((item) => item.fields);
        dispatch(addBannerData(data));
      }
    }
  };

  /*** SEPRATE PROMOTIONS DATA ***/

  const setPromoData = () => {
    if (_.size(allData) > 0) {
      if (allData.promo && _.size(promo) === 0) {
        const data = allData.promo.map((item) => item.fields);
        dispatch(addPromoData(data));
      }
    }
  };

  /*** SEPRATE TOP CATEGORIES DATA ***/

  const setCategoriesData = () => {
    if (_.size(allData) > 0) {
      if (allData.topCategories && _.size(categories) === 0) {
        const data = allData.topCategories.map((item) => item.fields);
        dispatch(addCategoriesData(data));
      }
    }
  };

  /*** SEPRATE FEATURED OFFERS DATA ***/

  const setOfferData = () => {
    if (_.size(allData) > 0) {
      if (allData.offers && _.size(offers) === 0) {
        const data = allData.offers.map((item) => item.fields);
        dispatch(addOffersData(data));
      }
    }
  };

  /*** SEPRATE FEATURED PRODUCTS DATA ***/

  const setProductsData = () => {
    if (_.size(allData) > 0) {
      if (allData.products && _.size(products) === 0) {
        const data = allData.products.map((item) => item.fields);
        dispatch(addProductsData(data));
      }
    }
  };

  /*** SEPRATE FOOTER DATA ***/

  const setFooterData = () => {
    if (_.size(allData) > 0) {
      if (allData.footer && _.size(footer) === 0) {
        const data = allData.footer.map((item) => item.fields);
        dispatch(addFooterData(data));
      }
    }
  };

  /*** SEPRATE SOCIALS DATA ***/

  const setSocialsData = () => {
    if (_.size(allData) > 0) {
      if (allData.socials && _.size(socials) === 0) {
        const data = allData.socials.map((item) => item.fields);
        dispatch(addSocialsData(data));
      }
    }
  };

  /*** FETCH ALL DATA ***/

  const fetchData = () => {
    dispatch(fetchAllData());
  };

  return { fetchData, promo, offers, products, footer };
};

export default useLanding;
