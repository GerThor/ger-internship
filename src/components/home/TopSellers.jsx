import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Skeleton from "../UI/Skeleton";

const TopSellers = () => {
  const [dataTopSellers, setDataTopSellers] = useState([])
  const [loadingStateTopSellers, setLoadingStateTopSellers] = useState(true)



  async function fetchDataTopSellers () {
    const {data} = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers")
    setDataTopSellers(data)
    setLoadingStateTopSellers(false)
  }

  useEffect(() => {
    fetchDataTopSellers()
  }, [])





  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list">

            {loadingStateTopSellers 
            ?
            new Array(12).fill(0).map((_, index) => (
                <li key={index}>
                  <div className="author_list_pp">
                      <Skeleton width={"50px"} height={"50px"} borderRadius={"50%"}/>
                      <i className="fa fa-check"></i>
                  </div>
                  <div className="author_list_info">
                    <Skeleton width={"100px"} height={"20px"} />
                    <br/>
                    <Skeleton width={"40px"} height={"20px"} />
                  </div>
                </li>
              ))
              :
              dataTopSellers.map((topSeller) => (
                <li key={topSeller.id}>
                  <div className="author_list_pp">
                    <Link to={`/author/${topSeller.authorId}`}>
                      <img
                        className="lazy pp-author"
                        src={topSeller.authorImage}
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>
                  <div className="author_list_info">
                    <Link to={`/author/${topSeller.authorId}`}>{topSeller.authorName}</Link>
                    <span>{topSeller.price} ETH</span>
                  </div>
                </li>
              ))
            }

            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
