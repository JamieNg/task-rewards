import React, { useState } from "react";
import PointBoard from "../components/PointBoard";
import RewardList from "../components/RewardList";
import Logs from "../components/Logs";
import History from "../components/History";

const Index = () => {
  const [viewToShow, setViewToShow] = useState("logs");
  const renderViewSwitch = () => {
    switch (viewToShow) {
      case "logs":
        return <Logs />;
      case "exchange":
        return <RewardList />;
      case "history":
        return <History />;
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
