import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Tab(props) {
  console.log(props.img)
  return (
    <NavLink
      to={props.to}
      activeClassName="active"
      className="grid grid-cols-10 md:w-full py-2 px-2 md:px-0 md:py-2 md:mb-2 rounded-full md:rounded-none"
    >
      <div className="col-span-12 md:col-span-4 flex items-center">
        <img
          src={(props.other ? '..' : "") + "/images/" + props.img + ".png"}
          alt="Description"
          className="mx-auto ml-auto  md:mr-[10%] object-cover object-center w-[1.25rem] h-[1.25rem]"
        />
      </div>
      <div className="md:col-span-8 hidden md:block">{props.name}</div>
    </NavLink>
  );
}

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isTop, setIsTop] = useState(true);

  const handleHover = () => {
    setIsExpanded(true);
  };

  const handleLeave = () => {
    setIsExpanded(false);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsTop(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`md:h-[full] md:max-w-[2rem] z-[500] fixed min-w-[1rem] transition-all duration-700 md:top-0 md:left-0 bottom-0 left-0
            transform bg-white border-r-[1px] drop-shadow-lg w-full ${
              isExpanded || isTop ? "md:w-[25vw]" : "md:w-[20vw]"
            }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="w-full">
        <div className="md:pt-[10vh] px-10 md:px-0 py-[2vh] items-center align-center text-xl text-[#424242] flex md:justify-normal justify-between md:flex-col">
          <Tab to="/feed" img="home" />
          <Tab to="/courseReview" img="courses" />
          <Tab to="/projects" img="projects" />
          <Tab to="/discussion" img="questions" />
          <Tab to="/search" img="search" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
