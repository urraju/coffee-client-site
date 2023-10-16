import React from "react";
import UpdateCard from "../updateCard/UpdateCard";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const singleData = useLoaderData();
  return (
    <div>
      <UpdateCard singleData={singleData} />
    </div>
  );
};

export default Update;
