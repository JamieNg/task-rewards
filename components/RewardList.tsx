import React from "react";
import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiPanel } from "@elastic/eui";
import rewards from "../sample/rewards-sample";
import Reward from "./Reward";

const RewardList = () => {
  return (
    <EuiPanel style={{ width: 900 }}>
      <EuiFlexGroup wrap>
        {rewards.map((item) => (
          <Reward item={item} key={item.title} />
        ))}
      </EuiFlexGroup>
    </EuiPanel>
  );
};

export default RewardList;
