import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FullpageContainer,
  FullpageSection,
} from '@shinyongjun/react-fullpage';
import '@shinyongjun/react-fullpage/css';

const LandingPageComp = () => {
  const handleSignIn = async () => {
    console.log("clicked");
    window.location.href = "http://localhost:3001/auth/signin";
  };
  const fullPageOptions = {
    scrollSensitivity: 5,
    touchSensitivity: 5,
    scrollSpeed: 5000,
    hideScrollBars: true,
    enableArrowKeys: true,
  };
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <FullpageContainer
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      onBeforeChange={(beforeIndex, afterIndex) => {
        console.log('before', beforeIndex, afterIndex);
      }}
      onAfterChange={(beforeIndex, afterIndex) => {
        console.log('after', beforeIndex, afterIndex);
      }}
    >
      <FullpageSection>
        <div id="section1" >
          <div className='flex flex-col'>
            <div className='flex justify-center items-center  pt-4 h-[5vh]'>
              <img
                className="w-[33%] mr-[3vw] object-contain my-auto"
                src="/images/logo.png"
                alt="logo"
              />
            </div>
            <div className="h-[90vh] z-0 pl-16 flex justify-between ">
              <div className="flex flex-1 flex-col px-[6vw] w-[60vw] justify-center items-center gap-[20px]">
                <h1 className="text-[48px] font-[500] text-center">
                  Unlock a world of <span className='text-[#4942E4]'>possibilities</span>
                </h1>
                <p className="text-[18px] text-center text-[#000000]">
                  Collaborate with peers, showcase your projects and
                  and expand your knowledge base.

                </p>
                <div className="button flex items-center justify-center gap-3 bg-[#4942E4] text-[white] font-medium w-[120px] p-[10px] border-none rounded-lg cursor-pointer">
                  <Link onClick={handleSignIn}>
                    <span>Sign In</span>
                  </Link>
                </div>
              </div>
              <div className=" h-[100vh] w-[40vw] flex items-center h-full">
                <img
                  className="w-[75%] object-contain my-auto mr-auto"
                  src="/images/world.png"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </FullpageSection>
      <FullpageSection>
        <div id="section2" >
          <div className="h-[100vh] z-0 pr-16 text-black flex justify-between ">
            <div className=" h-[100vh] w-[35vw] flex items-center h-full">
              <img
                className="w-[80%] object-contain ml-[6vw] mb-[40vh]"
                src="/images/community.png"
                alt="logo"
              />
            </div>
            <div className="flex flex-1 flex-col mt-[30vh] px-[6vw] w-[65vw] justify-center items-center gap-[20px]">
              <h1 className="text-[48px] font-[500]">
                Discover and <span className="text-[#4942E4]">connect</span>
              </h1>
              <p className="text-[18px] text-center">
                Engage in lively discussions, share insights and connect with like minded individuals from around the college.
              </p>
            </div>
          </div>
        </div>
      </FullpageSection>
      <FullpageSection>
        <div id="section3" >

          <div className="h-[100vh] z-0 flex justify-between">
            <div className="flex flex-1 flex-col mt-[25vh] px-[6vw]  w-[50vw] justify-start items-center gap-[20px]">
              <h1 className="text-[48px] font-[500]">
                Gain <span className="text-[#4942E4]">visibility</span>
              </h1>
              <p className="text-[18px] text-center">
                Showcase your projects to a wider audience and receive valuable feedback and recognition from your peers.

              </p>
            </div>
            <div className=" w-[60vw] flex flex-col">
              <img
                className="w-[90%] object-contain mt-[35vh] my-auto px-[6vw]"
                src="/images/project.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </FullpageSection>
      <FullpageSection>
        <div id="section4" >
          <div className="h-[100vh] w-[100vw] z-0 flex justify-between secondElement">
            <div className="flex flex-1 flex-col mt-[25vh] px-[6vw] w-[50vw] justify-start items-center gap-[20px]">
              <h1 className="text-[48px] font-[500]">
                Learn and <span className="text-[#4942E4]">Grow</span>
              </h1>
              <p className="text-[18px] text-center">
                Access a diverse range of course reviews, learn from others’ experiences, and make informed decisions about your educational journey.
              </p>
            </div>
            <div className="w-[60vw] flex flex-col">
              <img
                className="w-[60%] mt-[35vh] ml-[15vw] object-contain m-auto"
                src="https://cdn.dribbble.com/users/8810021/screenshots/17382086/media/89884526259d7b9a58d06fe5faac8010.gif"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </FullpageSection>
      <FullpageSection>
        <div id="section5" >
          <div className="h-[100vh] z-0 pr-16 text-black flex justify-between ">
            <div className=" h-[100vh] w-[35vw] flex items-center h-full">
              <img
                className="w-[70%] object-contain mt-[15vh] ml-[6vw] mb-[40vh]"
                src="/images/shield.png"
                alt="logo"
              />
            </div>
            <div className="flex flex-1 flex-col mt-[30vh] px-[6vw] w-[65vw] justify-center items-center gap-[20px]">
              <h1 className="text-[48px] font-[500]">
                Stay Safe and  <span className="text-[#4942E4]">Focussed</span>
              </h1>
              <p className="text-[18px] text-center">
                Our advanced spam filtering model ensures a respectful and a productive environment for all users
              </p>
            </div>
          </div>
        </div>
      </FullpageSection>
      <FullpageSection>
        <div id="section6" >
          <div className="h-[100vh] z-0 pr-16 text-black flex justify-between ">
            <div className=" h-[100vh] w-[35vw] flex items-center h-full">
              <img
                className="w-[90%] object-contain mt-[5vh] ml-[2vw] mb-[40vh]"
                src="/images/robo.png"
                alt="logo"
              />
            </div>
            <div className="flex flex-1 flex-col mt-[30vh] px-[6vw] w-[65vw] justify-center items-center gap-[20px]">
              <h1 className="text-[48px] font-[500]">
                Personalized   <span className="text-[#4942E4]">Experience</span>
              </h1>
              <p className="text-[18px] text-center">
                Refine projects based on your preferred selection of technology stacks.            </p>
            </div>
          </div>
        </div>
      </FullpageSection>
      <FullpageSection>
        <div id="section7" >
          <div className="h-[100vh] w-[100vw] z-0 flex justify-between secondElement">
            <div className="flex flex-1 flex-col mt-[25vh] px-[6vw] w-[50vw] justify-start items-center gap-[20px]">
              <h1 className="text-[48px] font-[500]">
                Collaborative  <span className="text-[#4942E4]">Workspace</span>
              </h1>
              <p className="text-[18px] text-center">
                Ignite synergy in our collaborative haven, where brilliance blooms and triumphs unite.            </p>
            </div>
            <div className="w-[50vw] flex flex-col">
              <img
                className="w-[70%] mt-[30vh] ml-[10vw] object-contain m-auto"
                src="/images/characters.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </FullpageSection>
      <FullpageSection isAutoHeight>
        <footer className='bg-[#D4D7F9] w-full flex-col gap-2 text-white text-[20px] font-[700] h-[15vh] flex justify-center items-center'>
          <div>
            Kriti 2024
          </div>
          <div>
            Lohit Hostel
          </div>
        </footer>
      </FullpageSection>
    </FullpageContainer>
  );
};

export default LandingPageComp;
