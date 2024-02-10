import React from "react";

const TopbarChat = (props) => {
  console.log(props);
  return (
    <div className="w-full bg-white flex items-center drop-shadow-sm">
      <div className="flex w-full items-center align-center justify-between">
        <div className="topic md:text-xl md:text-lg h-fit pl-[2vw]">
          Chats
        </div>
        <div className="flex gap-2 items-center mr-4">
            <div>
              <img
                src={props.currentUser && props.currentUser.profilePic || "/images/defaultThumbnail.jpeg"}
                alt="Profile"
                className="profile w-[2rem] h-[2rem] object-cover overflow-hidden rounded-full"
              />
            </div>
          <div className="text-[#080808]">{props.currentUser.name}</div>
        </div>
      </div>
    </div>
  );
};

export default TopbarChat;
