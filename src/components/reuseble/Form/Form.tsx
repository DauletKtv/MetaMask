import { useState } from "react";
import "./Form.css";
type Props = {
  name?: string;
  type?: string;
  cb?: any;
  loged?: boolean;
  text?: string;
};
export default function Form(props: Props) {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<any>(null);
  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleChange = (event: any) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }


    setEmail(event.target.value);
    if (event.target.value == "") {
      setError(null);
    }
    props.cb(event.target.value);
  };
  return (
    <div className="inputForLogin flex flex-col gap-2 mb-[25px] ">
      <label htmlFor={props.name}>{props.name!.toUpperCase()}</label>
      {props?.loged ? (
        <p className="text-[#E75626] text-[32px] leading-[38px] font-['Bebas_Neue']">
          {props?.text}
        </p>
      ) : (
        <input
          className={`new-input ${
            error && props.type == "email"
              ? "border-2 border-rose-500"
              : "border border-white"
          }`}
          placeholder={`We will display your ${props.name} in participation list `}
          type={props.type}
          name={props.name}
          onChange={handleChange}
        />
      )}
    </div>
  );
}
