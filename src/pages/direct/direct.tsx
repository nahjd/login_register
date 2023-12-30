import Navbar from "../navbar/sidenav";
import "./direct.scss";
const Direct = () => {
  return (
    <>
      <Navbar />
      <section className="directt">
        <div className="direct-headerr">
          <p className="messages">Messages</p>
          <p className="requests">Requests</p>
        </div>
        <div className="containerrrr">
          <div className="my-direct-friend-box">
            <div className="user-img">
              <img
                src="https://images.pexels.com/photos/5558237/pexels-photo-5558237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="userName-bio">
              <div className="username">Ismayil</div>
              <div className="bio">Who are you?</div>
            </div>
          </div>
          <div className="my-direct-friend-box">
            <div className="user-img">
              <img
                src="https://images.pexels.com/photos/5558237/pexels-photo-5558237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="userName-bio">
              <div className="username">Ismayil</div>
              <div className="bio">Who are you?</div>
            </div>
          </div>
          <div className="my-direct-friend-box">
            <div className="user-img">
              <img
                src="https://images.pexels.com/photos/5558237/pexels-photo-5558237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="userName-bio">
              <div className="username">Ismayil</div>
              <div className="bio">Who Are you?</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Direct;
