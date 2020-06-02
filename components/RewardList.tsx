import React, { useState } from "react";
import {
  EuiButton,
  EuiCard,
  EuiConfirmModal,
  EuiFlexGroup,
  EuiFlexItem,
  EuiMark,
  EuiOverlayMask,
  EuiPanel,
  EuiTextColor,
} from "@elastic/eui";
import rewards, { RewardCard } from "../sample/rewards-sample";
import Reward from "./Reward";

const CheckOut = ({ selectedRewards }: { selectedRewards: RewardCard[] }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const ConfirmModal = (
    <EuiOverlayMask>
      <EuiConfirmModal
        title="Do you want to exchange these rewards?"
        onCancel={() => setShowConfirm(false)}
        onConfirm={null}
        confirmButtonText="Exchange!"
        cancelButtonText="Cancel"
        defaultFocusedButton="confirm"
      >
        {selectedRewards.map((item) => (
          <p key={item.title}>
            {item.title} worth {item.point} points
          </p>
        ))}
      </EuiConfirmModal>
    </EuiOverlayMask>
  );

  return (
    <EuiFlexGroup
      alignItems="flexEnd"
      direction={"column"}
      style={{ padding: 20, marginRight: 50, width: 900 }}
    >
      <EuiFlexItem grow={false} style={{ fontSize: "large", fontWeight: 500 }}>
        <span>
          <EuiTextColor color="warning">
            {selectedRewards.map((item) => item.title).join(", ")}
          </EuiTextColor>{" "}
          have been selected, total cost is{" "}
          <EuiMark>
            {selectedRewards
              .map((item) => item.point)
              .reduce((total, curr) => total + curr, 0) + " Points"}
          </EuiMark>
        </span>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton fill onClick={() => setShowConfirm(true)}>
          Exchange
        </EuiButton>
      </EuiFlexItem>
      {showConfirm && ConfirmModal}
    </EuiFlexGroup>
  );
};

const RewardList = () => {
  const [selectedRewards, setSelectedRewards] = useState([]);
  const toggleSelected = (item) => {
    if (!selectedRewards.includes(item)) {
      setSelectedRewards([...selectedRewards, item]);
    } else {
      setSelectedRewards(
        selectedRewards.filter(
          (value, index, array) => item.title !== value.title
        )
      );
    }
  };
  return (
    <>
      <EuiPanel style={{ width: 900 }}>
        <EuiFlexGroup wrap>
          {rewards.map((item) => (
            <Reward
              item={item}
              key={item.title}
              toggleSelected={toggleSelected}
            />
          ))}
        </EuiFlexGroup>
      </EuiPanel>
      {selectedRewards.length > 0 ? (
        <CheckOut selectedRewards={selectedRewards} />
      ) : null}
    </>
  );
};

export default RewardList;
