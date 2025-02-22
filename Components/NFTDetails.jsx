import React from "react";
import { FaRegCopy } from "../Components/SVG/index";

const NFTDetails = ({ nftDetails, copyText }) => {
  return (
    <div
      className="modal fade popup"
      id="nftDetails"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
          <div className="modal-body">
            <div className="logo-rotate">
              <img
                src={nftDetails?.image.cachedUrl}
                style={{
                  width: "80px",
                  borderRadius: "50%",
                  height: "auto",
                }}
              />
            </div>
            <h2>{nftDetails?.name}</h2>
            <p>{nftDetails?.description?.slice(0, 115)}...</p>

            <a
              style={{
                color: "black",
              }}
              className="tf-button style-1 h50"
              onClick={() => copyText(nftDetails?.contract.address)}
            >
              Copy Contract Address <FaRegCopy />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetails;
