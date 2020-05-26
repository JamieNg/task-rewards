import React from "react";

import { EuiCard, EuiIcon, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";

const icons = ["Beats", "Cloud", "Logging", "Kibana"];

const cardNodes = icons.map(function (item, index) {
  return (
    <EuiFlexItem key={index}>
      <EuiCard
        icon={<EuiIcon size="xxl" type={`logo${item}`} />}
        title={`Elastic ${item}`}
        description="Example of a card's description. Stick to one or two sentences."
        onClick={() => window.alert("Card clicked")}
      />
    </EuiFlexItem>
  );
});

const PointBoard = () => {
  return (
    <EuiFlexGroup gutterSize={"s"} style={{ width: 900, padding: 20 }}>
      <EuiFlexItem>
        <EuiCard
          title="Incoming"
          description="Potential points from not finished items"
          icon={<EuiIcon type="logstashInput" size="xl" />}
          onClick={() => {
            console.log("item clicked");
          }}
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCard
          title="Available"
          description="Points to exchange rewards"
          icon={<EuiIcon type="starFilledSpace" size="xl" />}
          onClick={() => {
            console.log("item clicked");
          }}
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCard
          title="Used"
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
