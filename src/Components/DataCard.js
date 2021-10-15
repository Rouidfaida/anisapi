import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";

export const DataCard = ({ el }) => {
  const changes = useSelector((state) => state.changes);
  return (
    <div>
      <Card style={{ width: "15rem" }} className="m-2">
        <Card.Body>
          <Card.Title> Symbol: {el.symbol} </Card.Title>
          <Card.Text>Price Change: {el.priceChange}</Card.Text>
          <Card.Text> Last Price: {el.lastPrice} </Card.Text>
          <Card.Text> Open Price: {el.openPrice} </Card.Text>
          <Card.Text>
            {" "}
            <BsFillArrowUpCircleFill style={{ color: "green" }} /> High Price:{" "}
            {el.highPrice}{" "}
          </Card.Text>
          <Card.Text>
            {" "}
            <BsFillArrowDownCircleFill style={{ color: "red" }} />
            Low Price: {el.lowPrice}{" "}
          </Card.Text>
          <Button variant="primary">INFO </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default DataCard;
