import "./Header.css";
import MainButton from "../reuseble/MainButton";
import { useEthers } from "@usedapp/core";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setNotLoged,
  setEmail,
  setDisabled,
  setName,
  setShowTable,
} from "../../redux/loginSlice";
const Header = (props: any) => {
  const globalState = useSelector((state: any) => state.log);
  const dispatch = useDispatch();
  const { activateBrowserWallet, account, deactivate } = useEthers();
  const connetToWallet = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    props.cb();
    activateBrowserWallet();
  };
  const disconect = () => {
    deactivate();
    dispatch(setShowTable(false));
    dispatch(setNotLoged(true));
    dispatch(setDisabled(true));
    dispatch(setName(""));
    dispatch(setEmail(""));
  };

  return (
    <div className="main-header">
      <NavLink to="/">
        <div className="Logo">Logo</div>
      </NavLink>

      {account ? (
        <div
          className="text-[#E75626] w-36 text-ellipsis overflow-hidden account-text"
          onClick={disconect}
        >
          {account}
        </div>
      ) : (
        <MainButton cb={connetToWallet} text="Connect metamask" />
      )}
    </div>
  );
};

export default Header;
