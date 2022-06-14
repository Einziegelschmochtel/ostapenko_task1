import React, { useEffect, useState } from 'react';

import './static/css/bootstrap.css';
import './static/css/style.css';

import { getBTCPrice, getTransactions } from './api';

function App() {
  const [btcPrice, setBtcPrice] = useState();
  const [transactions, setTransactions] = useState();

  useEffect(() => {
    const run = async () => {
      getBTCPrice().then((data) => setBtcPrice(data));
      getTransactions().then((data) => setTransactions(data));
    };
    run();

    const interval = setInterval(run, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <div className="container-fluid d-flex flex-column p-0">
        <div className="container-fluid header position-static">

          <div className="row text-center justify-content-between mt-3">
            <div className="col-xs-8 col-sm-5">
              <img src="img/logo.svg" alt="crypto BTC" />
              <span className="fs-6 font-Circe text-light me-1">
                1 BTC = $
                {btcPrice}
              </span>
              <span className="procent fs-6 bg-light font-Circe py-1 px-1">-0.14%</span>
            </div>
            <div className="col-xs-4 col-sm-5">
              <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                  <button className="navbar-toggler btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="font-Circe fs-5">Menu</span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link active text-light btn-round-pill btn-hover font-Circe mx-3 my-2 py-2 px-3" aria-current="page" href="#">Sign in</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-light btn-round-pill btn-hover font-Circe mx-3 py-2 my-2 px-3" href="#">Sign up</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-light btn-round-pill btn-hover font-Circe mx-3 py-2 my-2 px-3" href="#">About</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-light btn-round-pill btn-hover font-Circe mx-3 py-2 my-2 px-3" href="#">Help</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="container-fluid mt-5">
            <div className="row text-center justify-content-center align-items-center mt-5">
              <div className=" col-xs-12 col-sm-10 col-md-7 mt-5">
                <div>
                  <span className="fs-1 fw-bold font-Circe text-uppercase text-light">Earn more than 100% a year</span>
                  <div className="my-4 w-100" />
                  <span className="fs-6 font-Circe text-light">
                    In the tumultuous business of cutting-in and attending to a whale, there
                    is much running backwards and forwards among the crew.
                  </span>
                </div>
                <div className="my-4 w-100" />
                <div className="d-grid mt-5 col-7 mx-auto">
                  <button className="btn btn-success btn-round-pill text-uppercase fw-bold font-Circe py-3 px-3 fs-3">Start Earning</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid grad p-0" />
        <div className="container-fluid main-background">
          <div className="row border-secondary border-bottom border-3 my-5">
            <div className="col-12 col-md-6 mx-auto">
              <div className="row my-5 mx-5">
                <span className="fs-1 font-Circe text-light fw-bold text-uppercase">Reliability</span>
                <div className="w-100" />
              </div>
            </div>
            <div className="col-12 col-md-6 mx-auto">
              <div className="row my-5 mx-5">
                <img src="./img/image1.png" alt="Graph" />
              </div>
            </div>
          </div>
          <div className="row text-center justify-content-center border-secondary border-3 border-bottom my-5">
            <div className="col-12 col-md-4 mx-auto my-5 mx-5">
              <img className="columnsImg" src="img/icon1.svg" alt="Anonymous" />
              <div className="my-4 w-100" />
              <div className="container">
                <span className="fs-3 font-Circe fw-bold text-uppercase text-light">Anonymous accounts</span>
                <div className="w-100" />
                <span className="fs-6 text-light-gray font-Circe my-4">
                  In the tumultuous business of cutting-in and attending to a whale, there
                  is much running backwards and forwards among the crew.

                </span>
              </div>
            </div>
            <div className="col-12 col-md-4 mx-auto my-5 mx-5">
              <img className="columnsImg" src="img/icon2.svg" alt="Anonymous" />
              <div className="w-100 my-4" />
              <div className="container">
                <span className="fs-3 font-Circe text-light text-uppercase fw-bold">Anonymous transactions</span>
                <div className="w-100" />
                <span className="fs-6 font-Circe text-light-gray my-4">
                  In the tumultuous business of cutting-in and attending to a whale, there
                  is much running backwards and forwards among the crew.

                </span>
              </div>
            </div>
            <div className="col-12 col-md-4 mx-auto my-5 mx-5">
              <img className="columnsImg" src="img/icon3.svg" alt="Anonymous" />
              <div className="w-100 my-4" />
              <div className="container">
                <span className="fs-3 font-Circe text-light text-uppercase fw-bold">100% SSL Encrypting</span>
                <div className="w-100" />
                <span className="fs-6 font-Circe text-light-gray my-4">
                  In the tumultuous business of cutting-in and attending to a whale, there
                  is much running backwards and forwards among the crew.

                </span>
              </div>
            </div>
          </div>
          <div className="row border-secondary border-3 border-bottom my-5">
            <div className="col-12 col-md-6 mx-auto">
              <div className="row mx-5 my-5">
                <img src="img/image2.png" alt="0%" />
              </div>
            </div>
            <div className="col-12 col-md-6 mx-auto">
              <div className="row mx-5 my-5">
                <span className="fs-1 font-Circe text-light text-uppercase fw-bold">Loyal conditions</span>
                <div className="w-100" />
                <div className="d-grid col-7 mt-3">
                  <button className="btn btn-line-bold btn-outline-success btn-round-pill py-2 px-2">
                    <span className="fs-5">Our Conditions</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row border-secondary border-bottom border-3 my-5" />
          <div className="row my-3">
            <div className="col-12 col-md-6 mx-auto justify-content-center">
              <div className="row my-5 mx-5">
                <span className="fs-1 font-Circe fw-bold text-uppercase text-light">Last transaction</span>
                <table className="table border border-1">
                  <tbody>
                    {transactions?.map((tx) => (
                      <tr>
                        <td className="fs-5 border" colSpan="2">{tx.txid}</td>
                        <td className="fs-5 border" colSpan="2">Unconfirmed</td>
                        <td className="fs-5 border" colSpan="2">
                          {tx.value / 100000000}
                          BTC
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-12 col-md-6 mx-auto justify-content-center">
              <div className="row my-5 mx-5">
                <span className="fs-1 font-Circe fw-bold text-light text-uppercase">News</span>
                <span className="fs-6 font-Circe text-light">Invest BTC in peer-to-peer loans and get 19% ARP with BTCJam.com</span>
                <div className="w-100" />

                <span className="fs-6 font-Circe text-light-gray my-5">BTCJam 1 minute ago</span>
                <div className="w-100" />

                <span className="fs-6 font-Circe text-light my-5">A spat between developers may split the digital currency</span>
                <div className="w-100" />

                <span className="fs-6 font-Circe text-light-gray my-5">Reddit 10 minutes ago</span>
                <div className="w-100" />

                <span className="fs-6 font-Circe text-light my-5">Bitcoin wallet Blockchain.info hits 4 million user mark</span>
                <div className="w-100" />

                <span className="fs-6 font-Circe text-light-gray my-5">CoinDesk 43 minutes ago</span>
                <div className="w-100" />

                <span className="fs-6 font-Circe text-light my-5">Destinia: Bitcoin-paying customers spen more on travel</span>
                <div className="w-100" />

                <span className="fs-6 font-Circe text-light-gray my-5">CEX.io 56 minutes ago</span>
                <div className="w-100" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid grad p-0" />
        <div className="container-fluid footer-background p-0">
          <div className="container-fluid mt-5">
            <div className="row justify-content-center">
              <div className="col-8 col-md-6 formLine" />
            </div>
            <div className="row justify-content-center">
              <div className="col-8 col-md-6 d-flex flex-column bg-white align-items-center">
                <h3 className="fs-1 text-uppercase my-3">Contact us</h3>
                <input type="text" name="contacts" className="contactForm col-10 font-Circe mt-2" placeholder="NAME" />
                <input type="text" name="contacts" className="contactForm col-10 font-Circe mt-2" placeholder="EMAIL" />
                <textarea className="col-10 font-Circe contactForm form-control-sm mt-2" rows="4" placeholder="YOUR MESSAGE" wrap="soft" />
                <button className="col-10 font-Circe btn btn-primary text-uppercase my-5 fs-6">send us your message</button>
              </div>
            </div>
          </div>
        </div>
        <div className="grad px-0 no-gutters" />
        <div className="container-fluid footerBackground no-gutters position-static p-0">
          <div className="row text-center justify-content-center align-text-bottom pt-5 my-5">
            <div className="col-12 col-md-6 pt-5 mt-5">
              <span className="fs-1 font-Circe fw-bold text-light my-5">Crypto - stable way to earn BTC now</span>
              <div className="w-100" />
              <div className="col-8 d-grid mx-auto my-5">
                <button className="font-Circe fw-bold btn btn-success btn-round-pill text-uppercase py-3 px-3 fs-3">Start earning</button>
              </div>
            </div>
          </div>
          <div className="row text-center justify-content-between footerBackground border-top border-secondary border-3">
            <div className="col-12 col-sm-5 align-items-center">
              <button className="btn btn-hover fs-5 font-Circe text-light my-2 mx-3 py-2 px-3">Rules</button>
              <button className="btn btn-hover fs-5 font-Circe text-light my-2 mx-3 py-2 px-3">Commission</button>
              <button className="btn btn-hover fs-5 font-Circe text-light my-2 mx-3 py-2 px-3">Conditions</button>
            </div>
            <div className="col-12 col-sm-3 align-items-center">
              <span className="fs-5 my-2 font-Circe text-light">@ Crypto 2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
