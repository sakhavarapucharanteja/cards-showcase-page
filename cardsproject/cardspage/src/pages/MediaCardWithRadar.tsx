import React from "react";
import ImgMediaCard from "../components/ImgMediaCard";
import RadarChart from "../components/RadarChart";
import ShowcaseModalDemo from "../components/ShowcaseModalDemo";

const MediaCardWithRadar: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <ImgMediaCard />
      <div style={{ marginTop: "40px" }}>
        <RadarChart />
      </div>
      <div style={{ marginTop: "60px" }}>
        <ShowcaseModalDemo />
      </div>
    </div>
  );
};

export default MediaCardWithRadar;
