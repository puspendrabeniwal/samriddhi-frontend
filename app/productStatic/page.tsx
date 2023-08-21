"use client";
import React, { useCallback, useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import axios from "axios";
export type StockDataListType = {
  id: string;
  imgUrl: string;
  inventoryStatus: string;
  category: string;
  company: string;
  description: string;
  stockPrice: string;
  quality: string;
  contentLevel: string;
  timeElapsed: string;
};
export default function ProductStatic() {
  const [stockDataList, setStockDataList] = useState<
    StockDataListType[] | null
  >(null);
  const [stockSlicedDataList, setStockSlicedDataList] = useState<
    StockDataListType[] | null
  >(null);
  const [count, setCount] = useState(6);
  const [hasMoreItems, setHasMoreItems] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");

  const getStockData = useCallback(async () => {
    const response = await axios.get("./stockData.json");
    const stockDataResponse = response.data as StockDataListType[];
    setStockDataList(stockDataResponse);
    setStockSlicedDataList(stockDataResponse.slice(0, count));
    if (stockDataResponse.length > count) {
      setHasMoreItems(true);
    } else {
      setHasMoreItems(false);
    }
  }, [count]);

  useEffect(() => {
    getStockData();
  }, [count]);

  const handleScrollToLoadMore = (ev: Event) => {
    if (
      window.innerHeight + Math.ceil(document.documentElement.scrollTop) + 2 >=
        document.scrollingElement.scrollHeight &&
      hasMoreItems
    ) {
      setHasMoreItems(false);
      setCount(count + 6);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleScrollToLoadMore(e));
    return () => {
      window.removeEventListener("scroll", handleScrollToLoadMore);
    };
  }, [hasMoreItems]);

  const handleSearchDebounce = (searchInput: string) => {
    if (searchInput === "" && stockDataList) {
      setCount(6);
      setStockSlicedDataList(stockDataList.slice(0, 6));
    }
    const searchResult = stockDataList?.filter((item) =>
      item?.company?.toLowerCase().includes(searchInput.toLowerCase())
    );
    if (searchResult) {
      setStockSlicedDataList(searchResult.slice(0, count));
      if (searchResult.length > count) {
        setHasMoreItems(true);
      } else {
        setHasMoreItems(false);
      }
    }
  };
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleSearchDebounce(searchInputValue);
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [searchInputValue]);

  // ============ Search parameter formik validation  ===========//
  // const onSubmitsearchJob = useCallback((e) => {
  //   e.preventDefault();
  //   if (e.target.value) {
  //     setSearchInput(e.target.value);
  //   }
  // }, []);

  const ProductStructure = ({
    listProduct,
  }: {
    listProduct: StockDataListType;
  }) => {
    return (
      <div className="col-sm-12 col-md-4 col-lg-4 ">
        <div className="product-grid-item card">
          <div className="product-grid-item-content">
            <img
              className="customerUserProfile"
              src={listProduct.imgUrl}
              // alt={listProduct.ticker}
            />
          </div>
          <div className="product-grid-item-content p-0 m-0">
            <span className="product-name p-0 m-0">{listProduct.company}</span>
          </div>
          <div className=" d-flex justify-content-center ">
            <small>Quality : </small>&nbsp;
            <small className="text-danger ">{listProduct.quality}</small>
          </div>
          <div className=" d-flex text-secondary justify-content-center ">
            <small>Content Level : </small>&nbsp;
            <small>{listProduct.contentLevel}</small>
          </div>
          {/* <div className="product-grid-item-top">
            <span className="product-category">{listProduct.category}</span>

            <span
              className={`product-badge status-${listProduct.inventoryStatus.toLowerCase()}`}
            >
              {listProduct.inventoryStatus}
            </span>
          </div> */}
          <div className="product-description">{listProduct.description}</div>
          <div className="product-price">{listProduct.stockPrice}</div>
        </div>
      </div>
    );
  };

  return (
    <main>
      {/*=========================== Search Input Field and Search Button ==========================*/}
      <form>
        <div className="search-div">
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
              value={searchInputValue}
              // onChange={inputHandler}
              placeholder="Search"
              className="input-width"
              onChange={(e) => {
                setCount(6);
                setSearchInputValue(e.currentTarget.value);
              }}
            />
          </span>
        </div>
      </form>

      <section>
        {stockSlicedDataList && stockSlicedDataList.length ? (
          <div className="row">
            {stockSlicedDataList.map((stockItem) => (
              <ProductStructure listProduct={stockItem} key={stockItem.id} />
            ))}
          </div>
        ) : null}
      </section>
    </main>
  );
}
