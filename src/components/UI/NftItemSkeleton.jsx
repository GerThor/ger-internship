import React from 'react'
import Skeleton from './Skeleton';

const NftItemSkeleton = () => {
  return (
    <div className="nft__item">
      <div className="author_list_pp">
        <Skeleton width={"50px"} height={"50px"} borderRadius={"50%"}/>
          <i className="fa fa-check"></i>
      </div>

      <div className="nft__item_wrap">
        <Skeleton width={"100%"} height={"350px"}/>
        <div className="nft__item_extra"></div>
      </div>
      <br></br>
      <div className="nft__item_info">
          <Skeleton width={"180px"} height={"30px"}/>
          <Skeleton width={"100px"} height={"20px"}/>
        <div className="nft__item_like">
        </div>
      </div>
    </div>
  )
}


export default NftItemSkeleton;
