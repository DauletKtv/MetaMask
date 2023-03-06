import { useEffect, useState } from "react";
import "./App.css";
import MainButton from "./components/reuseble/MainButton";
import { useEthers } from "@usedapp/core";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import MainPage from "./components/mainPage/MainPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App() {
  const { account, chainId } = useEthers();
  const { ethereum } = window as any;
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setShowModal(!ethereum);
  }, []);
  return (
    <div className="App">
      {showModal && !ethereum ? (
        <div className="checkAlert active">
          {/* <div className="checkAlert-bg"></div> */}
          <div className="checkAlert-block">
            <p className="checkAlert-header">metamask extention</p>
            <p className="checkAlert-text">
              To work with our application, you have to install the{" "}
              <a
                target="blank"
                href="https://metamask.io/download/"
                className="checkAlert-link"
              >
                Metamask browser extension
              </a>
            </p>
            <MainButton text="Skip this step" cb={() => setShowModal(false)} />
          </div>
        </div>
      ) : null}

      <Header cb={() => setShowModal(true)} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />}>
          <Route path=":profileID" element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
