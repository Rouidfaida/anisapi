import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PublicCard from "./PublicCard";
import { handelSetPublic } from "../Redux/action";
import { Spinner, Button } from "react-bootstrap";

const PublicList = () => {
  const publics = useSelector((state) => state.allPublics.publics);
  const dispatch = useDispatch();

  const [pub, setPub] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPub = async () => {
      try {
        let res = await axios.get("https://api.publicapis.org/entries");
        setPub(res.data);
        setLoading(false);
        dispatch(handelSetPublic(res.data.entries));
      } catch (error) {
        console.log(error);
      }
    };
    getPub();
  }, []);
  if (loading === true) {
    return (
      <>
        <Spinner className="spinner" />
        <span className="visually-hidden">Loading...</span>
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </>
    );
  }

  return (
    <div>
      {publics.map((publ, i) => (
        <PublicCard el={publ} key={i} />
      ))}
    </div>
  );
};

export default PublicList;
