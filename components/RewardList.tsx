import React from "react";
import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiPanel } from "@elastic/eui";
import rewards from "../sample/rewards-sample";

const RewardList = () => {
  return (
    <EuiPanel style={{ width: 900 }}>
      <EuiFlexGroup wrap>
        {rewards.map()}
      </EuiFlexGroup>
    </EuiPanel>
  );
};

export default RewardList;
