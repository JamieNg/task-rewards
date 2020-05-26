import React from "react";
import { EuiCard, EuiIcon, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";

const PointBoard = () => {
  return (
    <EuiFlexGroup gutterSize={"xl"} style={{ width: 900, padding: 20 }}>
      <EuiFlexItem>
        <EuiCard
          title="78"
          description="Potential points from not finished items"
          icon={<EuiIcon type="logstashInput" size="xl" />}
          betaBadgeLabel='Incoming'
          onClick={() => {
            console.log("item clicked");
          }}
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCard
          title="60"
          betaBadgeLabel='Available'
          description="Points to exchange rewards"
          icon={<EuiIcon type="starFilledSpace" size="xl" />}
          onClick={() => {
            console.log("item clicked");
          }}
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCard
          title="32"
          betaBadgeLabel='Used'
          description="Exchanged points"
          icon={<EuiIcon type="check" size="xl" />}
          onClick={() => {
            console.log("item clicked");
          }}
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default PointBoard;
