import React from "react";
import {
  EuiButton,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiTextColor,
} from "@elastic/eui";

const PointBoard = ({ setViewToShow }) => {
  return (
    <EuiFlexGroup gutterSize={"xl"} style={{ width: 900, padding: 20 }}>
      <EuiFlexItem>
        <EuiCard
          title={<EuiTextColor color="warning">78</EuiTextColor>}
          description="Potential points from unfinished items"
          icon={<EuiIcon type="logstashInput" size="xl" />}
          betaBadgeLabel="Incoming"
          footer={
            <EuiButton onClick={() => setViewToShow("logs")}>
              View Logs
            </EuiButton>
          }
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCard
          title={<EuiTextColor color="secondary">60</EuiTextColor>}
          betaBadgeLabel="Available"
          description="Points to exchange rewards"
          icon={<EuiIcon type="starFilledSpace" size="xl" />}
          footer={
            <EuiButton onClick={() => setViewToShow("exchange")}>
              Exchange rewards
            </EuiButton>
          }
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCard
          title={<EuiTextColor color="subdued">30</EuiTextColor>}
          betaBadgeLabel="Used"
          description="Exchanged points"
          icon={<EuiIcon type="check" size="xl" />}
          footer={
            <EuiButton onClick={() => setViewToShow("history")}>
              View History
            </EuiButton>
          }
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default PointBoard;
