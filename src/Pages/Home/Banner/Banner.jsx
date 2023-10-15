import img1 from '../../../../public/Picture 1.png';
import img2 from '../../../../public/Picture 2.png';
import img3 from '../../../../public/Picture 3.png';
import vector from '../../../../public/vector.png';

const Banner = () => {
  return (
    <div
      className="hero min-h-screen bg-cover"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/j3kM8n9/Gradient-background.png)",
      }}
    >
<div className='container'>
<div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 text-start px-4 md:ml-24">
    <div className="">
      <h1 style={{ fontFamily: 'Poppins, sans-serif' }} className=" mt-20 md:mb-5 text-2xl leading-normal md:leading-tight md:text-[58px] font-bold">Find  <span className=" bg-gradient-to-r from-[#0076CE] to-[#9400D3] bg-clip-text text-transparent">Partners</span> (CAs) available online</h1>
      <p className=" mb-5 mb:mb-[60px] text-sm md:text-lg mt-5">CONNECT with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
      <div className="flex relative justify-center">
        <input type="text" placeholder="Search by name" className="input input-bordered w-full pr-16" /> 
        <button className="btn bg-[#0076CE] text-white capitalize md:px-16 absolute top-0 right-0 rounded">Search</button>
      </div>
    </div>
    <div className='flex flex-col md:flex-row gap-4 md:mt-10 relative z-20'>
        <img className='w-full md:w-36 md:mt-20' src={img1} alt="" />
        <img className='w-full md:w-36 md:mb-20' src={img2} alt="" />
        <img className='w-full md:w-36 md:my-10' src={img3} alt="" />
    </div>
  </div>
</div>
<img className='hidden md:block bottom-0 absolute h-fit ' src={vector} alt="" />
  </div>
  );
};

export default Banner;
