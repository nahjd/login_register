// import React, { useState, useEffect, ChangeEvent } from "react";
// import axios from "axios";
// import { User } from "../../redux/slice/userSlice";

// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";

// import "./Search.scss";

// interface Props {}

// const SearchPage: React.FC<Props> = () => {
//   const [users, setUsers] = useState<User[]>([]);

//   useEffect(() => {
//     fetchData("");
//   }, []);

//   const fetchData = (searchValue: string) => {
//     if (!searchValue.trim()) {
//       axios.get(`http://localhost:5000/users`).then((res) => {
//         setUsers(res.data);
//       });
//     } else {
//       axios
//         .get(`http://localhost:5000/users?username=${searchValue}`)
//         .then((res) => {
//           setUsers(res.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching users:", error);
//         });
//     }
//   };

//   const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const searchValue = e.target.value;
//     fetchData(searchValue);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, p: 3 }}
//         style={{ padding: "0px" }}
//       >
//         <Grid container spacing={0}>
//           <Grid item xs={12} md={12}>
//             <div className="search-section">
//               <div className="search-header">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   onChange={handleSearchChange}
//                 />
//               </div>
//               <div className="founded-users">
//                 <span style={{ marginBottom: "20px" }}> Searched users:</span>
//                 {users.map((item) => (
//                   <div className="suggested-user" key={item._id}>
//                     <div className="about-user">
//                       <div className="user-img">
//                         {item.posts.length > 0 && (
//                           <img
//                             src={item.posts[0].imageSrc}
//                             alt={item.username}
//                           />
//                         )}
//                       </div>
//                       <div className="userName-follower">
//                         <div className="username">
//                           {item.username} {item.surname}
//                         </div>
//                         <div className="follower-count">
//                           {item.follower ? item.follower.length : 0}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="follow-btn">Follow</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default SearchPage;
