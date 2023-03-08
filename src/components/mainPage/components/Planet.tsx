import planet from "../../../assets/planet2.jpg";
import "./Planet.css";
import { useState } from "react";
export default function Planet(props: any) {
  const [styles, setStyles] = useState("circle-2");
  setTimeout(() => {
    setStyles("circle-2 fill-circle");
  }, 1000);
  const magnitiazePlanet = (e: any) => {
    if (props.magnitize) {
      let someX: number = window.innerWidth;
      if (window.innerWidth > 1000) {
        someX = someX - 1000 + (1920 - someX) / 2 + 10;
      }

      const x =
        e.clientX -
        e.currentTarget.querySelector("img").getBoundingClientRect().width / 2 -
        someX;
      const y =
        e.clientY -
        e.currentTarget.querySelector("img").getBoundingClientRect().height /
          2 -
        150 +
        window.pageYOffset;

      e.currentTarget.querySelector("img").style.transform =
        "translate3d(" + x + "px, " + y + "px, 0)";
    }
  };
  const leaveMagnitize = (e: any) => {
    if (props.magnitize) {
      e.currentTarget.querySelector("img").removeAttribute("style");
    }
  };

  return (
    <div
      className="first-circle"
      onMouseMove={(e) => magnitiazePlanet(e)}
      onMouseLeave={(e) => leaveMagnitize(e)}
    >
      <div className="second-circle">
        {props.magnitize && (
          <div className="gap-[8px] font-['Bebas_Neue'] text-[14px] absolute bg-white top-[-14px] left-[183px] w-20 h-[30px] flex items-center justify-center rounded-full">
            Q1 2022{" "}
            <span className="items-center justify-center w-3 h-3 shadow-2xl bg-white z-10 flex">
              <span className="bg-[#E75626] rounded-full w-[6px] h-[6px] block"></span>
            </span>
          </div>
        )}

        <svg className="speed__range" viewBox="0 0 32 32">
          <circle className="circle-1" r="16" cx="16" cy="16" />
          <circle className={styles} r="16" cx="16" cy="16" />
        </svg>
        <div className="third-circle">
          <div className="fourth-circl">
            <div className="fiveth-circle">
              <div className="six-circle">
                <img src={planet} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
