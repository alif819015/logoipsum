import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CaInformation = () => {
  const location = useLocation();
  const selectedItem = location.state?.selectedItem;

  const [infos, setInfos] = useState();

  useEffect(() => {
    if (selectedItem && selectedItem.id) {
      fetch(`/public/ca.json`)
        .then((res) => {
          console.log("Response:", res);
          return res.json();
        })
        .then((data) => {
          console.log("Data:", data);
          const selectedInfo = data.find((item) => item.id === selectedItem.id);
          setInfos(selectedInfo);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [selectedItem]);
  return (
    <div className="">{infos ? <p>{infos.name}</p> : <p>Loading...</p>}</div>
  );
};

export default CaInformation;
