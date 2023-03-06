import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./redux";
import { BrowserRouter } from "react-router-dom";
import {
  Mainnet,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config,
  Goerli,
  Rinkeby,
} from "@usedapp/core";
import { getDefaultProvider } from "ethers";

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    // [Mainnet.chainId]: getDefaultProvider("mainnet"),
    // [Goerli.chainId]: getDefaultProvider("goerli"),
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter basename="/MetaMask">
    <Provider store={store}>
      <DAppProvider config={config}>
        <App />
      </DAppProvider>
    </Provider>
  </BrowserRouter>
);
