import React from "react";
import { Button } from "react-bootstrap";

const HomePage = () => {
  return (
    <div>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          DEVISE
        </Button>
        <Button variant="secondary" size="lg">
          Block level button
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
