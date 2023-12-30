import React from "react";
import Navbar from "../navbar/sidenav";
import "./profile.scss";
type Props = {};

const profile = (props: Props) => {
  return (
    <>
      <Navbar />
      <section className="pp">
        <div className="main">
          <div className="profile">
            <img
              src="https://media.istockphoto.com/id/1154370446/photo/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=pEtqycJb7GbnbvKnHuyqAi2eScR9A3LZYmMaWivi1h8="
              alt=""
            />
          </div>
          <div className="details">
            <div className="post">
              <h2>17</h2>
              <p>Post</p>
            </div>
            <div className="followers">
              <h2>17</h2>
              <p>Followers</p>
            </div>
            <div className="following">
              <h2>17</h2>
              <p>following</p>
            </div>
          </div>
          <br />
          <div className="info">
            <div className="names">
              <div className="name">
                <h3>Nahid</h3>
              </div>
              <div className="services">
                <h3>Babalar sozunu tutar!!!</h3>
              </div>
              <div className="work">
                <h3>Web progrommer</h3>
              </div>
            </div>
            <div className="button">
              <div className="edit">
                <br />
                <button>Edit profile</button>
                <button>Share profile</button>
              </div>
              <br />
              <hr className="hr" />
              <div className="links">
                <button>Posts</button>
                <button>Saved</button>
                <button>Tagged</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default profile;
