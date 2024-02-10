import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Logo from '../../assets/logo.svg';

export default function Contacts({ contacts, currentUser, changeChat }) {
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);
    var userSmall = '/images/user.svg'
    useEffect(() => {
        (async () => {
          if (currentUser) {
            setCurrentUserImage(userSmall);
            setCurrentUserName(currentUser.name);
          }
        })();
      }, [currentUser]);
      
    const changeCurrentChat = (index, contact) => {
        setCurrentSelected(index);
        changeChat(contact);
    };
    return (
        <>
            {
                currentUserImage && currentUserName && (
                    <Container>
                        <div className="brand">
                            <div className='title'>PeerPulse</div>
                        </div>
                        <div className="contacts">
                            {
                                contacts.map((contact, index) => {
                                    if (contact === null) return null;
                                    return ( 
                                        <div className={`contact ${index === currentSelected ? 'selected' : ''}`} key={index} onClick={() => changeCurrentChat(index, contact)}>
                                            <div className="avatar">
                                                <img src={userSmall} alt="" />
                                            </div>
                                            <div className="username">
                                                <h3>{contact.name}</h3>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                        {/*<div className="current-user">
                            <div className="avatar">
                                <img src={userSmall} alt="avatar" />
                            </div>
                            <div className="username">
                                <h2>{currentUserName}</h2>
                            </div>
                              </div>*/}
                    </Container>
                )
            }
        </>
    )
}

const Container = styled.div`
position: fixed;  
top: 0;
left: 0;
height: 100vh;
width: 25vw;
display: grid;
grid-template-rows: 10% 90%;
overflow: hidden;
background-color: #FFFFFF;
border-right: 1px solid #00000076;
.brand {
  display: flex;
  gap: 1rem;
  justify-content: center;
  .title {
    padding-top: 2vh;
    color: black;
    font-size: 1.5rem;
    font-weight: 600;
  }
}
.connections{
  display: flex;
  justify-content: start;
  margin-top:auto;
  margin-bottom: auto;
  .mycon{
    font-size: 1.1rem;
    font-weight: 500;
    padding-left: 5%;
  }
}
.contacts {
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  gap: 0.8rem;
  &::-webkit-scrollbar {
    width: 0.2rem;
    &-thumb {
      background-color: #ffffff39;
      width: 0.1rem;
      border-radius: 1rem;
    }
  }
  .contact {
    background-color: #FFFFFF;
    min-height: 5rem;
    cursor: pointer;
    width: 90%;
    border-radius: 0.2rem;
    padding: 0.4rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    transition: 0.5s ease-in-out;
    box-shadow: 0 3px 10px #00000055;
    .avatar {
      img {
        height: 3rem;
      }
    }
    .username {
      h3 {
        color: black;
      }
    }
  }
  .selected {
    box-shadow: 0 4px 10px #0016DA77;
  }
}

.current-user {
  background-color: #0d0d30;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  .avatar {
    img {
      height: 4rem;
      max-inline-size: 100%;
    }
  }
  .username {
    h2 {
      color: white;
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    gap: 0.5rem;
    .username {
      h2 {
        font-size: 1rem;
      }
    }
  }
}
`;
