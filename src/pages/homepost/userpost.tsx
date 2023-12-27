import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./userpost.scss";

interface Post {
  f_Id: string;
  tittle: string;
  imageSrc: string;
}

interface User {
  _id: string;
  username: string;
  surname: string;
  email: string;
  password: string;
  isPublic: boolean;
  posts: Post[];
  follower: any[];
  following: any[];
  blockList: any[];
  stories: any[];
  notifications: any[];
  bio: {
    info: string;
    country: string;
  };
}

const UserPosts = () => {
  const [usersData, setUsersData] = useState<User[]>([]);

  useEffect(() => {
    axios.get("https://depapi.onrender.com/users").then((res) => {
      setUsersData(res.data);
    });
  }, []);

  console.log(usersData);

  return (
    <section id="user_posters">
      <div className="containerrr">
        {usersData.map((user) => (
          <div key={user._id} className="posts-user-card id">
            {user.posts.map((post: Post) => (
              <Card
                key={post.f_Id}
                sx={{ maxWidth: 1280 }}
                className="postcards"
              >
                <CardContent style={{ display: "flex", gap: "10px" }}>
                  <CardMedia
                    sx={{
                      height: 100,
                      width: 100,
                      borderRadius: "50%",
                      border: "1px solid ",
                    }}
                    image={post.imageSrc}
                    title="profile image"
                  />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    {user.username}
                  </Typography>
                </CardContent>
                <CardMedia
                  sx={{ height: 900, width: 1200 }}
                  image={post.imageSrc}
                  title="post image"
                />
                <CardActions>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.tittle}
                  </Typography>
                </CardActions>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserPosts;
