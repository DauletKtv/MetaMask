import "./RoadMapStats.css";
import StatList from "./StatList";

import Planet from "./Planet";
import LoremText from "../../reuseble/LoremText";

export default function RoadMapStats() {
  return (
    <div className="RoadMapStats">
      <div className="main-text">
        <h1 className="pointer-events-none">
          Explore Your own planet In <span className="text-mask">our New</span>{" "}
          metaverse
        </h1>
        <LoremText />
      </div>
      <Planet magnitize={true} />
      <div className="list-holder">
        <p className="list-holder-header"> Roadmap stats</p>
        <StatList />
        <hr />
        <StatList />
        <hr />
        <StatList />
      </div>
    </div>
  );
}
