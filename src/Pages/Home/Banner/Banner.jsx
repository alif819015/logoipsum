import { useEffect, useState } from "react";
import img1 from "../../../../public/Picture 1.png";
import img2 from "../../../../public/Picture 2.png";
import img3 from "../../../../public/Picture 3.png";
import vector from "../../../../public/vector.png";
import { Link } from "react-router-dom";

const Banner = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../../../public/ca.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error loading JSON data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(filteredResults);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div
      className="hero min-h-screen bg-cover"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/j3kM8n9/Gradient-background.png)",
      }}
    >
      <img className="hidden md:block -bottom-5 absolute" src={vector} alt="" />
      <div className="container">
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 text-start px-4 md:pl-24">
          <div className="">
            <h1 className=" mt-20 md:mb-5 text-2xl leading-normal md:leading-tight md:text-[58px] font-bold">
              Find{" "}
              <span className=" bg-gradient-to-r from-[#0076CE] to-[#9400D3] bg-clip-text text-transparent">
                Partners
              </span>{" "}
              (CAs) available online
            </h1>
            <p className=" mb-5 mb:mb-[60px] text-sm md:text-lg mt-5">
              CONNECT with us where your services are listed and visible to a
              myriad of businesses seeking CA’s for compliance support
            </p>
            <div className="flex relative justify-center">
              <input
                type="text"
                placeholder="Search by name"
                className="input input-bordered w-full pr-16"
                value={searchTerm}
                onChange={handleInputChange}
              />
              <button
                onClick={handleSearch}
                className="btn bg-[#0076CE] text-white capitalize md:px-16 absolute top-0 right-0 rounded"
              >
                Search
              </button>

              <ul>
                {filteredData.map((item) => (
                  <li
                    className="bg-gradient-to-r from-[#0076CE] to-[#9400D3] bg-clip-text"
                    key={item.id}
                  >
                    <Link
                      to={{
                        pathname: "/information",
                        state: { selectedItem: item },
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:mt-10 relative z-20">
            <img className="w-full md:w-36 md:mt-20" src={img1} alt="" />
            <img className="w-full md:w-36 md:mb-20" src={img2} alt="" />
            <img className="w-full md:w-36 md:my-10" src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
