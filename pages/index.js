import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Alchemy, Network } from "alchemy-sdk";
import toast from "react-hot-toast";
import {
  Preloader,
  Action,
  Filter,
  InputSearch,
  NFTDetails,
  Loader,
  PopUp,
} from "../Components/index";
import { CiHeart, FaRegCopy } from "../Components/SVG/index";

const ALCHEMY = process.env.NEXT_PUBLIC_ALCHEMY_API;
const DEFAULT_NETWORK = process.env.NEXT_PUBLIC_DEFAULT_NETWORK;
const TEST_ADDRESS = process.env.NEXT_PUBLIC_ADDRESS;

const seller = () => {
  const [wallet, setWallet] = useState();
  const [networkList, setNetworkList] = useState([]);
  const [selectedNetwork, setSelectedNetwork] = useState();
  const [nfts, setNfts] = useState([]);
  const [nftDetails, setNftDetails] = useState();
  const [loader, setLoader] = useState(false);
  const [reCall, setReCall] = useState(0);

  const notifySuccess = (msg) => toast.success(msg, { duration: 3000 });
  const notifyError = (msg) => toast.error(msg, { duration: 3000 });

  const FETCH_ALL_NFTS = async () => {
    if (wallet) {
      try {
        setLoader(true);
        let storeNetwork = localStorage.getItem("ACTIVE_NETWORK");
        if (storeNetwork == null) {
          storeNetwork = DEFAULT_NETWORK;
        } else {
          storeNetwork = storeNetwork;
        }
        const config = {
          apiKey: ALCHEMY,
          network: storeNetwork,
        };
        const alchemy = new Alchemy(config);

        const nfts = await alchemy.nft.getNftsForOwner(wallet);
        setNfts(nfts?.ownedNfts);
        console.log(nfts?.ownedNfts);
        setLoader(false);
      } catch (error) {
        console.log(error.message);
        notifyError(`Alchemy API Error: ${error.message}`);
        setLoader(false);
        setNfts([]);
      }
    }
  };

  useEffect(() => {
    FETCH_ALL_NFTS();
  }, [wallet, reCall]);

  useEffect(() => {
    const storeNetwork = localStorage.getItem("ACTIVE_NETWORK");
    if (storeNetwork == null) {
      setSelectedNetwork(DEFAULT_NETWORK);
    } else {
      setSelectedNetwork(storeNetwork);
    }

    const arrayWithNameAndValue = Object.entries(Network).map(
      ([key, value]) => ({
        name: key
          .toLowerCase()
          .replace(/_/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase()),
        value: value,
      })
    );

    console.log(arrayWithNameAndValue);
    setNetworkList(arrayWithNameAndValue);
  }, []);

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    notifySuccess("Text copied successfully");
  };

  const SHORTEN_ADDRESS = (address) =>
    `${address?.slice(0, 8)}...${address?.slice(address.length - 4)}`;

  const CHANGE_NETWORK = (network) => {
    localStorage.setItem("ACTIVE_NETWORK", network);
    setReCall(reCall + 1);
  };

  return (
    <>
      <Preloader />
      <div id="wrapper">
        <div id="page" className="pt-40">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="logo-main.png"
              alt="Logo"
              style={{ maxWidth: "300px", height: "auto" }}
            />
          </div>
          {/* <Action /> */}
          <div className="flat-title-page">
            <div className="themesflat-container">
              <div className="row">
                <div className="col-12">
                  <InputSearch
                    handleChange={(e) => setWallet(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          {/* //BODY */}
          <div className="tf-section-2 discover-item loadmore-12-item">
            <div className="themesflat-container">
              <div className="row">
                <Filter
                  networks={networkList}
                  CHANGE_NETWORK={CHANGE_NETWORK}
                  selectedNetwork={selectedNetwork}
                />
                {nfts?.length == 0 ? (
                  <div
                    style={{
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    <img
                      src="no-nft.png"
                      alt=""
                      style={{
                        width: "300px",
                      }}
                    />
                  </div>
                ) : (
                  <>
                    {nfts?.map((item, index) => (
                      <div
                        key={index}
                        className="  col-xl-3 col-lg-4 col-md-6 col-sm-6"
                      >
                        <div className="tf-card-box style-1">
                          <div className="card-media">
                            <a>
                              <img
                                src={item?.image.cachedUrl}
                                alt={item?.name}
                              />
                            </a>
                            <span className="wishlist-button ">
                              <CiHeart />
                            </span>
                            <div className="featured-countdown">
                              <span className="js-countdown">
                                {item?.contract.symbol}
                              </span>
                            </div>
                            <div class="button-place-bid">
                              <a
                                style={{
                                  color: "black",
                                }}
                                data-toggle="modal"
                                data-target={`#nftDetails`}
                                className="tf-button"
                                onClick={() => setNftDetails(item)}
                              >
                                <span>View NFT</span>
                              </a>
                            </div>
                          </div>
                          <h5 className="name">
                            <a>{item?.name}</a>
                          </h5>
                          <div className="author flex items-center">
                            <div className="avatar">
                              <img
                                src={"assets/images/avatar/avatar-box-03.jpg"}
                                alt="Image"
                              />
                            </div>
                            <div className="info">
                              <span>Created by: Unmesh</span>
                              <h6>
                                <a href="#">{SHORTEN_ADDRESS(wallet)}</a>{" "}
                              </h6>
                            </div>
                          </div>
                          <div className="divider" />
                          <div className="meta-info flex items-center justify-between">
                            <span className="text-bid">Contract </span>
                            <h6 className="price gem">
                              {SHORTEN_ADDRESS(item?.contract.address)} &nbsp;
                              <FaRegCopy
                                onClick={() => copyText(item?.contract.address)}
                              />
                            </h6>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
          <Action />
        </div>
      </div>
      <PopUp />
      <NFTDetails nftDetails={nftDetails} copyText={copyText} />
      {loader && <Loader />}
    </>
  );
};

export default seller;
