import React, { useState, useEffect } from "react";
import ReactSlickSlider from "../UI/ReactSlickSlider";
import axios from "axios";
import NftItem from "../UI/NftItem";
import NftItemSkeleton from "../UI/NftItemSkeleton";






const NewItems = () => {
  const [dataNewItems, setDataNewItems] = useState([])
  const [loadingStateNewItems, setLoadingStateNewItems] = useState(true)

  async function fetchDataNewItems () {
    const { data } = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems")
    setDataNewItems(data)
    setLoadingStateNewItems(false)
  }

  useEffect(() => {
    fetchDataNewItems();
  }, []) 


  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {loadingStateNewItems 
          ?
          <ReactSlickSlider>
          {new Array(4).fill(0).map((_, index) => (
            <div key={index}>
              <NftItemSkeleton />
            </div>
          ))}
          </ReactSlickSlider>
          :
          <ReactSlickSlider>
          {dataNewItems.map((item) => (
            <div key={item.id}>
              <NftItem nftItem={item}/>
            </div>
          ))}
          </ReactSlickSlider>
          }
        </div>
      </div>
    </section>
  );
};

export default NewItems;
