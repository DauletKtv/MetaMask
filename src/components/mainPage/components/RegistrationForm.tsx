import "./RegistrationForm.css";
import Form from "../../reuseble/Form/Form";
import LoremText from "../../reuseble/LoremText";
import MainButton from "../../reuseble/MainButton";
import { useEffect } from "react";
import { useEthers } from "@usedapp/core";
import { useSelector, useDispatch } from "react-redux";

import {
  setNotLoged,
  setEmail,
  setDisabled,
  setName,
  setShowTable,
} from "../../../redux/loginSlice";

export default function RegistrationForm(props: any) {
  const dispatch = useDispatch();
  const globalState = useSelector((state: any) => state.log);
  const { account } = useEthers();
  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }
  useEffect(() => {
    if (
      !isValidEmail(globalState.email) ||
      globalState.email == "" ||
      globalState.name == "" ||
      !account
    ) {
      dispatch(setDisabled(true));
    } else if (
      isValidEmail(globalState.email) &&
      globalState.email !== "" &&
      globalState.name !== "" &&
      !!account
    ) {
      dispatch(setDisabled(false));
    }
    if (!globalState.notLoged) {
      dispatch(setDisabled(true));
    }
  }, [globalState.email, globalState.name]);
  return (
    <div className="RegistrationForm">
      <h3>Beta test registration</h3>
      <LoremText />
      {globalState.notLoged || !globalState.showTable ? (
        <div className="mt-9">
          <Form name="name" type="text" cb={(e: any) => dispatch(setName(e))} />
          <Form
            name="email"
            type="email"
            cb={(e: any) => dispatch(setEmail(e))}
          />
        </div>
      ) : (
        <div className="mt-9">
          <Form text={globalState.name} name="name" loged={true} />
          <Form text={globalState.email} name="email" loged={true} />
        </div>
      )}

      <MainButton
        text={
          globalState.notLoged ? "Get early access" : "List me to the table"
        }
        cb={(e: any) => {
          dispatch(setShowTable(true));
          dispatch(setNotLoged(false));
          dispatch(setDisabled(true));
        }}
        locked={globalState.disabled}
      />
    </div>
  );
}
