import RoadMapStats from "./components/RoadMapStats";
import RegistrationForm from "./components/RegistrationForm";
import RightTable from "./components/RightTable";
import "./MainPage.css";
import { useState } from "react";
import { useEthers } from "@usedapp/core";
import { useSelector } from "react-redux";
export default function MainPage() {
  const globalState = useSelector((state: any) => state.log);

  const { account } = useEthers();

  return (
    <div>
      <RoadMapStats />
      <div className="bottom-part flex justify-between pb-[84px]">
        <RegistrationForm />
        {globalState.showTable && (
          <RightTable
            nameValue={globalState.name}
            emailValue={globalState.email}
            address={account}
          />
        )}
      </div>
    </div>
  );
}
