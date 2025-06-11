
import { div } from 'framer-motion/client';
import CountUp from 'react-countup';
import {Link} from 'react-router-dom';
const Services = () => {
  return (
        <div>
     <div className=" bg-[url('images/lfolwer.jpg')]  h-80  bg-cover z-0  w-full bg-center object-cover flex flex-col justify-center items-center text-white  ">
                    <h1 className='text-sm uppercase tracking-widest ml-5 text-center mt-12'>WHAT WE CAN DO</h1>
                      <h1 className='text-4xl font-semibold mt-1  ml-10 mb-7 text-center'>Eventify <span className='text-4xl font-bold text-purple-500'>Services</span></h1>
                     <div className='flex justify-center items-center gap-2 '>
                       <Link to="/">
                    <h1 className='text-white text-center hover:text-purple-600 font-semibold text-lg'>Home </h1>
                         </Link>
                  <Link to="/AboutUs">
                    <h1 className='text-white text-center hover:text-purple-600 font-semibold text-lg' >| About Us</h1>
                    </Link>
                     <h1 className='text-white text-center text-md' aria-current="page" >| Services</h1>
                    </div>
              </div>



    <section className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 py-20 px-6">
        <h1 className='font-semibold text-center text-4xl'>Our Expertise, Your <span className='text-purple-600 font-bold'> Perfect</span> Event</h1>
     
      {/* wedding div */}
      <div className="flex gap-5 border h-auto mt-10 bg-purple-200 p-3 rounded-l-full transition-all hover:scale-95 hover:shadow-[0_0_25px_#8245ec] cursor-pointer">
      <img className="w-[490px] h-56   rounded-l-full" src="./images/brideGroom.jpg" alt="" />
       <div>
        <h1 className="mt-8 text-purple-600 font-bold text-2xl"> Our Wedding Plans</h1>
      <p className="mt-3 text-md text-justify ">At &nbsp; Eventify,&nbsp; our &nbsp; wedding &nbsp; planning &nbsp;service&nbsp; is &nbsp;all&nbsp; about&nbsp; turning&nbsp; your&nbsp; dreams &nbsp;into&nbsp; reality&nbsp; with&nbsp; ease,&nbsp; elegance,&nbsp; and&nbsp; joy.
        &nbsp; We&nbsp; understand &nbsp;that&nbsp; every&nbsp; couple &nbsp;is&nbsp; unique,&nbsp; which&nbsp; is &nbsp;why &nbsp;we&nbsp; tailor&nbsp; every &nbsp;detail&nbsp; to&nbsp; match&nbsp; your&nbsp; vision.&nbsp; From&nbsp; the &nbsp;initial&nbsp; concept&nbsp; to&nbsp; the &nbsp;final&nbsp; send-off,&nbsp;
         we&nbsp; handle &nbsp;everything—venue&nbsp; selection,&nbsp; theme&nbsp; styling, &nbsp;vendor&nbsp; coordination,&nbsp; and &nbsp;logistics &nbsp;management—so&nbsp; you&nbsp; can &nbsp;truly &nbsp;enjoy &nbsp;your&nbsp; special &nbsp;day&nbsp; without &nbsp;stress.</p>
     </div>
      </div>
      {/* private events */}
       <div className="flex gap-5 border h-auto mt-10 bg-purple-200 p-3 rounded-r-full transition-all hover:scale-95 hover:shadow-[0_0_25px_#8245ec] cursor-pointer">
       <div>
        <h1 className="mt-8 text-purple-600 font-bold text-2xl"> Private Events</h1>
        <p className="mt-3 text-md text-justify tracking-wider ">At Eventify, we specialize in creating unforgettable private events tailored to your unique style and vision. From personalized themes and exquisite decor to seamless coordination and top-tier entertainment, we ensure your event reflects your personality while providing an exceptional experience for your guests. Let us turn your special moments into lifelong memories with sophistication and flair.</p>
     </div>
     <img className="w-[490px] h-56   rounded-r-full" src="./images/privateEvents.jpg" alt="" />
      </div>

      {/* corporate events */}

      <div className="flex gap-5 border h-auto mt-10 bg-purple-200 p-3 rounded-l-full transition-all hover:scale-95 hover:shadow-[0_0_25px_#8245ec] cursor-pointer">
      <img className="w-[490px] h-56   rounded-l-full" src="./images/meet.jpg" alt="" />
       <div>
        <h1 className="mt-8 text-purple-600 font-bold text-2xl"> Corporate Events</h1>
      <p className="mt-3 text-md text-justify tracking-wider">Eventify offers professional and detail-oriented corporate event planning designed to elevate your brand and engage your audience. Whether it's a product launch, company milestone celebration, conference, seminar, or team-building retreat, we tailor each event to align with your corporate values and objectives.</p>
     </div>
      </div>

    {/* festivals events */}

       <div className="flex gap-5 border h-auto mt-10 bg-purple-200 p-3 rounded-r-full transition-all hover:scale-95 hover:shadow-[0_0_25px_#8245ec] cursor-pointer">
       <div>
        <h1 className="mt-8 text-purple-600 font-bold text-2xl"> Festivals And Public Events</h1>
        <p className="mt-3 text-md text-justify tracking-wider ">At Eventify, we specialize in creating vibrant and large-scale festivals and public events that captivate communities and celebrate culture. Our creative team ensures each event is immersive, safe, and unforgettable, drawing crowds and creating shared memories that last a lifetime.
             With a passion for community engagement and high-energy experiences, we turn public gatherings into landmark celebrations.</p>
       </div>
       <img className="w-[490px] h-56   rounded-r-full" src="./images/public.jpg" alt="" />
        </div>

 {/* graduation ceremony events */}
<div className="flex gap-5 border h-auto mt-10 bg-purple-200 p-3 rounded-l-full transition-all hover:scale-95 hover:shadow-[0_0_25px_#8245ec] cursor-pointer">
      <img className="w-[490px] h-56   rounded-l-full" src="./images/graduate.jpg" alt="" />
       <div>
        <h1 className="mt-8 text-purple-600 font-bold text-2xl"> Graduation Ceremonies</h1>
      <p className="mt-3 text-md text-justify tracking-wider">At Eventify, we design and execute graduation events that honor the accomplishments of students while creating lasting memories for families, faculty, and guests. From elegant stage setups and sound systems to customized décor and seamless coordination, our team ensures that every detail reflects the significance of the occasion.</p>
     </div>
      </div>

 <div className=" max-w-full mt-20 text-center">
          <h2 className="text-3xl font-semibold text-black">
            We have many years of experience in
          </h2>
          <h3 className="text-3xl font-bold text-purple-600 mt-2">
            organizing events
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mt-10 bg-purple-200 p-7 rounded-lg">
            <div>
              <p className="text-4xl font-bold text-purple-500">
                <CountUp end={103} duration={2} />
              </p>
              <p className="mt-1 text-gray-600">completed projects</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-purple-600">
                <CountUp end={35} duration={2} />
              </p>
              <p className="mt-1 text-gray-600">original concepts</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-purple-600">
                <CountUp end={109} duration={2} />
              </p>
              <p className="mt-1 text-gray-600">regular customers</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-purple-600">
                <CountUp end={3} duration={2} />
              </p>
              <p className="mt-1 text-gray-600">years of experience</p>
            </div>
          </div>
        </div>
    </section>
    </div>
  );
};

export default Services;
