"use client";
import React, { useCallback, useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import axios from "axios";
import { slice } from "lodash";
export default function ProductStatic() {
  const [inputValue, setInputValue] = useState("");
  const [stockDataList, setStockDataList] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(false);
  const [cardItem, setCardItem] = useState([]);
  const [count, setCount] = useState(6);
  const initialPosts = slice(cardItem, 0, count);
  const [searchInput, setSearchInput] = useState("");
  const [inputForm, setInputForm] = useState("");

  const getStockData = useCallback(async () => {
    const response = await axios.get("./stockData.json");

    console.log(" response.data.data", response.data);
    const dt = response.data;
    setStockDataList(dt);
    setCardItem(dt);
    console.log("dt", dt.length);
  }, []);
  let inputHandler = (e: any) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    console.log(lowerCase);
    const searchResult = stockDataList.filter(
      (item) => item.company.toLowerCase() == lowerCase
    );
    setCardItem(searchResult);

    setInputValue(lowerCase);
  };
  useEffect(() => {
    getStockData();
  }, [searchInput]);

  const loadMore = () => {
    setCount(count + 6);
    if (count >= stockDataList.length) {
      setHasMoreItems(true);
    } else {
      setHasMoreItems(false);
    }
  };
  // ============ Search parameter formik validation  ===========//
  const onSubmitsearchJob = useCallback((e) => {
    e.preventDefault();
    if (e.target.value) {
      setSearchInput(e.target.value);
    }
  }, []);
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearchInput(inputForm);
    }, 900);

    return () => clearTimeout(delayDebounceFn);
  }, [inputForm]);

  const ProductStructure = ({
    listProduct,
  }: {
    listProduct: (typeof initialPosts)[0];
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

  const [searching, setSearching] = useState("");
  // return (
  //   <main>
  //     {/*=========================== Search Input Field and Search Button ==========================*/}
  //     <form>
  //       <div className="search-div">
  //         <span className="p-input-icon-left">
  //           <i className="pi pi-search" />
  //           <InputText
  //             // value={inputValue}
  //             // onChange={inputHandler}
  //             placeholder="Search"
  //             className="input-width"
  //             onChange={(e) => {
  //               setSearching(e.target.value);
  //             }}
  //           />
  //         </span>
  //       </div>
  //     </form>

  //     <section>
  //       <div className="row">
  //         {initialPosts
  //           .filter((val: any) => {
  //             if (searching === "") {
  //               return val;
  //             } else if (
  //               val.company.toLowerCase().includes(searching.toLowerCase())
  //             ) {
  //               return val;
  //             }
  //           })
  //           .map((stockItem: any, key: any) => {
  //             return (
  //               <div className="row">
  //                 <ProductStructure listProduct={stockItem} key={key} />
  //               </div>
  //             );
  //           })}
  //       </div>
  //     </section>
  //     <div className=" d-flex justify-content-center mb-3">
  //       {hasMoreItems ? (
  //         <button
  //           onClick={loadMore}
  //           type="button"
  //           className="btn btn-danger disabled"
  //         >
  //           That's It
  //         </button>
  //       ) : (
  //         <button onClick={loadMore} type="button" className="btn btn-danger">
  //           Load More +
  //         </button>
  //       )}
  //     </div>
  //   </main>
  // );

  return (
    <main>
      {/*=========================== Search Input Field and Search Button ==========================*/}
      <form>
        <div className="search-div">
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
              value={inputValue}
              onChange={inputHandler}
              placeholder="Search"
              className="input-width"
              // onChange={(e) => {
              //   setInputValue(e.currentTarget.value);
              // }}
            />
          </span>
        </div>
      </form>

      <section>
        <div className="row">
          {initialPosts.map((stockItem: any, key: any) => (
            <ProductStructure listProduct={stockItem} key={key} />
          ))}
        </div>
      </section>
      <div className=" d-flex justify-content-center mb-3">
        {hasMoreItems ? (
          <button
            onClick={loadMore}
            type="button"
            className="btn btn-danger disabled"
          >
            That's It
          </button>
        ) : (
          <button onClick={loadMore} type="button" className="btn btn-danger">
            Load More +
          </button>
        )}
      </div>
    </main>
  );
}
