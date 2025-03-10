import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllEntities = () => {
  const [entities, setEntities] = useState([]);
  const getEntities = async () => {
    try {
      console.log(process.env.REACT_APP_BASE_URL);
      const { data } = await axios.get(
        `http://localhost:8080/entity/get-all-entities`
      );
      setEntities(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEntities();
  }, []);
  return (
    <div className="grid grid-cols-5 gap-4">
      {entities.map((entity) => {
        return (
          <Link to={`/data/${entity.Tables_in_vikranth}`}>
            <button className="btn btn-xs btn-outline sm:btn-sm md:btn-md lg:btn-md w-full">
              {entity.Tables_in_vikranth}
            </button>{" "}
          </Link>
        );
      })}
    </div>
  );
};

export default AllEntities;
