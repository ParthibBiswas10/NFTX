import React from "react";
import {
  Filter_1,
  Filter_2,
  Filter_3,
  Filter_4,
  Filter_5,
  FaEthereum,
  SiBlockchaindotcom,
  SiHiveBlockchain,
  SiBinance,
  BiPolygon,
} from "./SVG/index";

const Filter = ({ networks, CHANGE_NETWORK, selectedNetwork }) => {
  return (
    <div className="col-md-12 pb-30">
      <div className="tf-soft flex items-center justify-between">
        <div className="soft-left">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FaEthereum />
              <span className="inner">Ethereum</span>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a
                className="dropdown-item"
                onClick={() => CHANGE_NETWORK("eth-mainnet")}
              >
                <div className="sort-filter active">
                  <span>Ethereum</span>
                  <span className="icon-tick">
                    <span className="path2" />
                  </span>
                </div>
              </a>
              <a
                className="dropdown-item"
                onClick={() => CHANGE_NETWORK("eth-goerli")}
              >
                <div className="sort-filter">
                  <span>ETH Goerli</span>
                  <span className="icon-tick">
                    <span className="path2" />
                  </span>
                </div>
              </a>
              <a
                className="dropdown-item"
                onClick={() => CHANGE_NETWORK("eth-sepolia")}
              >
                <div className="sort-filter">
                  <span>ETH Sepolia</span>
                  <span className="icon-tick">
                    <span className="path2" />
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <Filter_2 />
              <span className="inner">Base </span>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a
                className="dropdown-item"
                onClick={() => CHANGE_NETWORK("base-mainnet")}
              >
                <div className="sort-filter active">
                  <span>Base Mainnet</span>
                  <span className="icon-tick">
                    <span className="path2" />
                  </span>
                </div>
              </a>
              <a
                className="dropdown-item"
                onClick={() => CHANGE_NETWORK("base-goerli")}
              >
                <div className="sort-filter">
                  <span>Base Goerli</span>
                  <span className="icon-tick">
                    <span className="path2" />
                  </span>
                </div>
              </a>
              <a
                className="dropdown-item"
                onClick={() => CHANGE_NETWORK("base-sepolia")}
              >
                <div className="sort-filter">
                  <span>Base Sepolia</span>
                  <span className="icon-tick">
                    <span className="path2" />
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton3"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <BiPolygon />
              <span className="inner">Polygon</span>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a
                className="dropdown-item"
                onClick={() => CHANGE_NETWORK("polygon-mainnet")}
              >
                <div className="sort-filter active">
                  <span>Polygon Mainnet</span>
                  <span className="icon-tick">
                    <span className="path2" />
                  </span>
                </div>
              </a>
              <a
                className="dropdown-item"
                onClick={() => CHANGE_NETWORK("polygon-amoy")}
              >
                <div className="sort-filter">
                  <span>Polygon Amoy</span>
                  <span className="icon-tick">
                    <span className="path2" />
                  </span>
                </div>
              </a>
              <a
                className="dropdown-item"
                onClick={() => CHANGE_NETWORK("polygon-mumbai")}
              >
                <div className="sort-filter">
                  <span>Polygon Mumbai</span>
                  <span className="icon-tick">
                    <span className="path2" />
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton4"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <SiBinance />
              <span className="inner">Binance</span>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a
                className="dropdown-item"
                onClick={() => CHANGE_NETWORK("bnb-mainnet")}
              >
                <div className="sort-filter active">
                  <span> Binance Mainnet</span>
                  <span className="icon-tick">
                    <span className="path2" />
                  </span>
                </div>
              </a>
              <a
                className="dropdown-item"
                onClick={() => CHANGE_NETWORK("bnb-testnet")}
              >
                <div className="sort-filter">
                  <span> Binance Testnet</span>
                  <span className="icon-tick">
                    <span className="path2" />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="soft-right">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton4"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <SiHiveBlockchain />
              <span>Active: {selectedNetwork}</span>
            </button>
            <div
              className="dropdown-menu filter-Height"
              aria-labelledby="dropdownMenuButton"
            >
              <h6>Networks</h6>
              {networks?.map((item, index) => (
                <a
                  className="dropdown-item"
                  onClick={() => CHANGE_NETWORK(item?.value)}
                >
                  <div className="sort-filter">
                    <span>{item?.name}</span>
                    <span className="icon-tick">
                      <span className="path2" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
