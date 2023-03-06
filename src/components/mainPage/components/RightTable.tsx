import React, { useState } from "react";
import "./RightTable.css";
import { useGetUnistoryApiQuery } from "../../../redux";
import { useEffect } from "react";
import { ItemsType, MetaType } from "../../../redux";
import {  useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setNotLoged,
  setEmail,
  setDisabled,
  setName,
  setShowTable,
} from "../../../redux/loginSlice";
export default function RightTable(props: any) {
  const globalState = useSelector((state: any) => state.log);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const { data, isLoading } = useGetUnistoryApiQuery(page);
  const nameField = React.useRef(null);
  const [maxPage, setMaxPage] = useState<MetaType>(data?.meta as MetaType);
  const [showOwnInformation, setShowOwnInformation] = useState(true);
  const [allPage, setAllPAge] = useState<ItemsType[]>(
    data?.items as ItemsType[]
  );

  const navigate = useNavigate();
  useEffect(() => {
    setMaxPage(data?.meta as MetaType);
    setAllPAge(data?.items as ItemsType[]);
  }, [isLoading]);

  const removeOwnInformation = () => {
    setShowOwnInformation(false);
    dispatch(setShowTable(false));
    dispatch(setNotLoged(true));
    dispatch(setDisabled(true));
    dispatch(setName(""));
    dispatch(setEmail(""));
  };

  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (
      e.currentTarget.scrollHeight -
        (e.currentTarget.scrollTop + e.currentTarget.clientHeight) <
      10
    ) {
      if (page == maxPage.totalPages) {
        return;
      }

      setPage(page + 1);
      setAllPAge((prev) => [...prev, ...(data?.items as ItemsType[])]);
    }
  };

  if (isLoading) return <h1><svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
</svg>
Loading</h1>;
  return (
    <div className="RightTable">
      <p className="RightTable-header">
        Participation listing (enable only for participants)
      </p>
      <div>
        <table className="">
          <tbody>
            <tr className="RightTable-tr">
              <th className="RightTable-th w-[187px] text-start">Name </th>
              <th className="RightTable-th w-[257px] text-start">Email</th>
              <th className="RightTable-th w-[224px] text-start">Wallet</th>
            </tr>
          </tbody>
        </table>
        <div
          className="pr-7 overflow-y-scroll h-[550px] RightTable-tbody"
          onScroll={(e) => {
            scrollHandler(e);
          }}
          ref={nameField}
        >
          <table className="">
            <tbody>
              {showOwnInformation && (
                <tr className="RightTable-tr text-[#E75626]">
                  <td className="w-[187px] text-start">
                    <span
                    title={props.nameValue}
                    className="w-[170px] block text-ellipsis overflow-hidden "
                    >
                      {props.nameValue}
                    </span>
                    
                    </td>
                  <td className="w-[257px] text-start">
                    <span
                      title={props.emailValue}
                      className="block text-ellipsis overflow-hidden w-[195px]"
                    >
                      {props.emailValue}
                    </span>
                  </td>
                  <td className="w-[224px] text-start">
                    <div className="flex gap-5">
                      <span
                        title={props.address}
                        className="white block w-[195px] text-ellipsis overflow-hidden"
                      >
                        {props.address}
                      </span>
                      <span
                        className="text-[white] cursor-pointer"
                        onClick={() => {
                          removeOwnInformation();
                        }}
                      >
                        x
                      </span>
                    </div>
                  </td>
                </tr>
              )}

              {allPage?.map((item: any, index) => (
                <tr
                  className="RightTable-tr cursor-pointer"
                  key={index}
                  onClick={() => {
                    navigate(`/profile/${item.id}`);
                  }}
                >
                  <td className="w-[187px] text-start">
                    <span
                    title={item.username}
                    className="w-[170px] block text-ellipsis overflow-hidden "
                    >{item.username}</span>
                    </td>
                  <td className="w-[257px] text-start">
                    <span
                      title={item.email}
                      className="block text-ellipsis overflow-hidden w-[195px]"
                    >
                      {item.email}
                    </span>
                  </td>
                  <td className="w-[224px] text-start">
                    <span
                      title={item.address}
                      className="white block w-[195px] text-ellipsis overflow-hidden"
                    >
                      {item.address}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
