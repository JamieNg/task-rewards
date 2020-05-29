import React from "react";
import { EuiCard, EuiFlexItem } from "@elastic/eui";

const Rewards = ({ title, description }) => {
  return (
    <EuiFlexItem>
      <EuiCard title={title} description={description} />
    </EuiFlexItem>
  );
};

export default Rewards;
