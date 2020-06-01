import React, { useState } from "react";
import PointBoard from "../components/PointBoard";
import RewardList from "../components/RewardList";
import Logs from "../components/Logs";

const Index = () => {
  const [viewToShow, setViewToShow] = useState("logs");
  const renderViewSwitch = () => {
    switch (viewToShow) {
      case "logs":
        return <Logs />;
      case "exchange":
        return <RewardList />;
      case "history":
        return null;
    }
  };
  return (
    <>
      <PointBoard setViewToShow={setViewToShow} />
      {renderViewSwitch()}
    </>
  );
};

export default Index;
