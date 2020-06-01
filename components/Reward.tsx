import React, { useState } from "react";
import { EuiBetaBadge, EuiCard, EuiFlexItem, EuiIcon } from "@elastic/eui";

const Reward = ({ item, toggleSelected }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <EuiFlexItem>
      <EuiCard
        title={item.title}
        description={item.description}
        icon={<EuiIcon size="original" type={`assets/${item.icon}`} />}
        selectable={{
          isSelected: isSelected,
          onClick: () => {
            setIsSelected(!isSelected);
            toggleSelected(item);
          },
        }}
        footer={<EuiBetaBadge label={`${item.point} Points`} />}
      />
    </EuiFlexItem>
  );
};

export default Reward;
