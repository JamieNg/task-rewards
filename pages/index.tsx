import React from 'react';
import {EuiFacetButton, EuiIcon} from "@elastic/eui";


const Index = () => {
  return (
    <EuiFacetButton
      quantity={6}
      icon={<EuiIcon type="dot" color="secondary" />}
      isSelected>
    </EuiFacetButton>
  );
};

export default Index;