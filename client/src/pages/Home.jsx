import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import {Swiper, SwiperSlide} from 'swiper/react'

export default function Home() {

  // const {offerListing, setOfferListing} = useState([]);
  // const {saleListing, setSaleListing} = useState([]);
  // const {rentListing, setRentListing} = useState([]);

  // useEffect(()=>{
  //   const fetchOfferListing = async () =>{
  //     try{

  //       const res = await fetch('/api/listing/get?offer=true&limit=4');
  //       const data = await res.json();
  //       setOfferListing(data);
  //       fetchRentListing();

  //     }
  //     catch(error){
  //       console.log(error);
  //     }

  //   }



  //   const fetchRentListing = async () =>{


  //     try{

  //       const res = await fetch('/api/listing/get?type=rent&limit=4');
  //       const data = await res.json();
  //       setRentListing(data);
  //       fetchSaleListing();

  //     }
  //     catch(error){
  //       console.log(error);
  //     }

  //   }


  //   const fetchSaleListing = async ()=>{
  //     try{

  //       const res = await fetch('/api/listing/get?type=sale&limit=4');
  //       const data = await res.json();
  //       setSaleListing(data);
        

  //     }
  //     catch(error){
  //       console.log(error);
  //     }
  //   }

  //   fetchOfferListing ();
  // },[])
  return (
    <div>
      {/* Top  */}
      <div className="flex flex-col gap-6 p-28 px-3 max-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find you next <span className="text-slate-500">perfect</span> <br />
          place with ease
        </h1>

        <div className=" text-gray-400 text-xs sm:text-sm ">
          Real Estate will help you find your next perfect place to live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>

        <Link to={"/search"} className="text-xs sm:text-sm text-blue-800 font-bold hover:underline">Let's Start now...</Link>
      </div>




      {/* Swiper */}
{/* 

      <Swiper>

        {
          offerListing && offerListing.length>0 && offerListing.map((listing)=>(
            <SwiperSlide>

            <div style={{background:`url(${listing.imageUrls[0]}) center no-repeat ` ,backgroundSize:"Cover"}} className="h-[500px] " key={listing._id}>

            </div>
            </SwiperSlide>
          ))
        }
      </Swiper> */}


      <div className="w-full">

              <img className="h-[600px] w-[95%] ml-8 mr-8 object-fit " src="https://source.unsplash.com/random/900×900/?building" alt="this building image"/>
      </div>








      {/* listing results for offer, sale and rent */}
    </div>
  );
}
