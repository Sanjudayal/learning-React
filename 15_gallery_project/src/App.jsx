import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import Card from "./components/Card";

const App = () => {
  const [imageData, setImageData] = useState([]);
  const [page, setPage] = useState(1);

  const getImages = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=10`,
    );

    setImageData(response.data);
  };

  useEffect(() => {
    getImages();
  }, [page]);

  let displayUserImages = (
    <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h3>
  );

  if (imageData.length > 0) {
    displayUserImages = imageData.map((el, idx) => {
      return (
        <div key={idx}>
          <Card el={el} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black text-white h-screen px-10 pt-10 ">
      <div
        id="cardContainer"
        className="flex flex-wrap justify-center align-center gap-4 h-[83%] overflow-auto"
      >
        {displayUserImages}
      </div>
      <div className="flex justify-center items-center gap-3 lg:gap-6 px-4 py-6">
        <button
          style={{ opacity: page == 1 ? 0.6 : 1 }}
          className="bg-amber-400 text-black text-sm font-semibold px-5 py-2 rounded cursor-pointer active:scale-95"
          onClick={() => {
            if (page > 1) {
              setImageData([]);
              setPage(page - 1);
            }
            console.log(page);
          }}
        >
          prev
        </button>
        <h4 className="font-semibold">Page {page}</h4>
        <button
          className="bg-amber-400 text-black text-sm font-semibold px-5 py-2 rounded cursor-pointer active:scale-95"
          onClick={() => {
            setImageData([]);
            setPage(page + 1);
            console.log(page);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default App;
