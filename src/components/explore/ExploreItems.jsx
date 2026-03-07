import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NftItem from "../UI/NftItem";
import NftItemSkeleton from "../UI/NftItemSkeleton";


const ExploreItems = () => {
  const [dataExploreItems, setDataExploreItems] = useState([])
  const [loadingExploreItems, setLoadingExploreItems] = useState(true)
  const [selectedValue, setSelectedValue] = useState("")
  const [index, setIndex] = useState(8)
  const incrementNftItems = 4;

  async function fetchExploreItems () {
    const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${selectedValue}`)
    setDataExploreItems(data) 
    setLoadingExploreItems(false)
  }

  useEffect(() => {
    fetchExploreItems()
  }, [index, selectedValue])


  return (
    <>
      <div>
        <select id="filter-items" defaultValue="" onChange={(event) => setSelectedValue(event.target.value)}>
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      
      {loadingExploreItems 
      ?
      new Array(8).fill(0).map((_, index) => (
        <div key={index} className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12" style={{ display: "block", backgroundSize: "cover" }}>
          <NftItemSkeleton />
        </div>
      ))
      :
      dataExploreItems.slice(0, index).map((exploreItem) => (
        <div key={exploreItem.id} className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12" style={{ display: "block", backgroundSize: "cover" }}>
          <NftItem nftItem={exploreItem}/>
        </div>
      ))}
      
      <div className="col-md-12 text-center">
        { (index >= dataExploreItems.length) 
        ?
        null
        :
        <Link to="" id="loadmore" className="btn-main lead" onClick={() => setIndex(index + incrementNftItems)}>
          Load more
        </Link>
        }
      </div>
    </>
  );
};

export default ExploreItems;
