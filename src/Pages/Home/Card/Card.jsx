import CardInfo from "./CardInfo";

const Card = () => {
  return (
    <div>
      <div
        className=""
        style={{ backgroundImage: "url(https://i.ibb.co/6RCkRgv/Vector2.png)" }}
      >
        <div className="">
          <div className="px-4 md:px-32 mt-28">
            <h3 className="text-6xl mb-4 text-center font-bold">
              Want to{" "}
              <span className=" bg-gradient-to-r from-[#0076CE] to-[#9400D3] bg-clip-text text-transparent">
                Join
              </span>{" "}
              Us?
            </h3>
            <p className="text-sm text-center mb-20">
              To remain with us, it is essential that you diligently follow the
              steps provided
            </p>
            <div>
              <CardInfo></CardInfo>
            </div>
            <p className="text-xs mt-8 pb-5">
              * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200
              every day until you file the form . There is no maximum penalty
              amount. So, if you don't file the form for a year, you will owe
              ₹73,000 per form
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
