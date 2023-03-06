import React from "react";
import "./MainButton.css";
type Props = {
  text: string;
  locked?: boolean;
  cb?: any;
};
export default function MainButton(props: Props) {
  return (
    <div>
      <button
        disabled={props?.locked}
        className={props.locked ? "main-btn opacity-50" : "main-btn"}
        onClick={(e) => props?.cb(e)}
      >
        {props.text}
      </button>
    </div>
  );
}
