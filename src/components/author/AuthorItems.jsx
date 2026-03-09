import React from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import NftItem from "../UI/NftItem.jsx"
import NftItemSkeleton from "../UI/NftItemSkeleton.jsx"

const AuthorItems = ({ authorData, authorNftCollectionData, authorLoading }) => {
  console.log("authorloading: ", authorLoading)
  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {authorLoading 
          
          ?

          new Array(8).fill(0).map((_, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
              <NftItemSkeleton />
            </div>
          ))

          :

          authorNftCollectionData.map((nftItem, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
              <NftItem authorData={authorData} nftItem={nftItem}/>
            </div>
          ))

          }
          
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;