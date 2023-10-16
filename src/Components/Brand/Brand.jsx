import React, { useEffect, useState } from "react";

const Brand = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="bg-[#ECEAE3] p-8">
      <div className="w-9/12 mx-auto mt-4 gap-10 flex flex-col md:flex-row">
        {data.slice(0,4).map((item) => (
          <div key={item.id} >
            <div className="font-philospar">
                <img src={item.img} alt="" />
                <p className="font-semibold text-2xl mt-2">{item.title}</p>
                <p className="font-light mt-2">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
