import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";

const App = () => {
  const [imageData, setImageData] = useState([]);

  const getImages = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=4&limit=20",
    );

    setImageData(response.data);
  };

  useEffect(() => {
    getImages();
  }, []);

  let displayUserImages = "No image available";

  if (imageData.length > 0) {
    displayUserImages = imageData.map((el, idx) => {
      return (
        <div key={idx}>
          <a href={el.url} target="blank">
            <div key={idx} className="h-40 w-44 bg-white rounded-xl">
              <img
                className="h-full w-full object-cover rounded-xl"
                key={idx}
                src={el.download_url}
                alt="image"
              />
            </div>
            <h3 className="font-bold text-lg">{el.author}</h3>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto text-white h-screen p-5 ">
      <div className="flex flex-wrap gap-4">{displayUserImages}</div>
    </div>
  );
};

export default App;
