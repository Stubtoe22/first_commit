import React from "react";
import {CodeBranchIcon} from '@patternfly/react-icons';
import { Button } from "@patternfly/react-core";

const MastheadToggler = () => {
  const handleButtonClick = () => {
    window.location.href = "https://jsonplaceholder.typicode.com/";
  };

  return (
    <Button
      variant="plain"
      onClick={handleButtonClick}
      aria-label="Global navigation"
    >
      <CodeBranchIcon />
    </Button>
  );
};

export default MastheadToggler;
