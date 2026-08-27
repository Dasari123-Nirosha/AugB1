// import React, { useState } from "react";
// import "./App.css";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [darkTheme, setDarkTheme] = useState(false);
//   const [isSignedIn, setIsSignedIn] = useState(false);

//   return (
//     <div className={darkTheme ? "control-app dark" : "control-app"}>

//       <div className="control-container">

//         {/* HEADER */}
//         <div className="control-header">
//           <div>
//             <div className="react-title">REACT • USESTATE</div>
//             <h1>My Control Center</h1>
//           </div>

//           <button
//             className="dark-btn"
//             onClick={() => setDarkTheme(!darkTheme)}
//           >
//             {darkTheme ? "☀ Light" : "🌙 Dark"}
//           </button>
//         </div>

//         {/* THREE CARDS */}
//         <div className="card-grid">

//           {/* SIGN IN CARD */}
//           <div className="dashboard-card">

//             <div className="card-icon lock-icon">
//               🔐
//             </div>

//             {!isSignedIn ? (
//               <>
//                 <div className="offline">
//                   ● OFFLINE
//                 </div>

//                 <h2>Welcome Back!</h2>

//                 <p>
//                   Sign in to access your personal home page.
//                 </p>

//                 <button
//                   className="purple-btn"
//                   onClick={() => setIsSignedIn(true)}
//                 >
//                   Sign In →
//                 </button>
//               </>
//             ) : (
//               <>
//                 <div className="online">
//                   ● ONLINE
//                 </div>

//                 <h2>Welcome Dasari Nirosha!</h2>

//                 <p>
//                   You are successfully signed in.
//                 </p>

//                 <button
//                   className="red-btn"
//                   onClick={() => setIsSignedIn(false)}
//                 >
//                   Sign Out
//                 </button>
//               </>
//             )}

//           </div>

//           {/* COUNTER CARD */}
//           <div className="dashboard-card counter-card">

//             <div className="card-icon counter-icon">
//               ⚡
//             </div>

//             <div className="counter-label">
//               COUNTER
//             </div>

//             <h2>Count Value</h2>

//             <div className="count-number">
//               {count}
//             </div>

//             <div className="counter-controls">

//               <button
//                 className="circle minus"
//                 onClick={() => setCount(count - 1)}
//               >
//                 −
//               </button>

//               <button
//                 className="reset-btn"
//                 onClick={() => setCount(0)}
//               >
//                 Reset
//               </button>

//               <button
//                 className="circle plus"
//                 onClick={() => setCount(count + 1)}
//               >
//                 +
//               </button>

//             </div>

//           </div>

//           {/* THEME CARD */}
//           <div className="dashboard-card">

//             <div className="card-icon theme-icon">
//               🎨
//             </div>

//             <h2>Theme Settings</h2>

//             <p>
//               Customize the appearance of your dashboard.
//             </p>

//             <div className="theme-status">
//               <span>●</span>
//               {darkTheme
//                 ? " Dark Theme Active"
//                 : " Light Theme Active"}
//             </div>

//             <button
//               className="purple-btn"
//               onClick={() => setDarkTheme(!darkTheme)}
//             >
//               {darkTheme
//                 ? "☀ Switch to Light"
//                 : "☾ Switch to Dark"}
//             </button>

//           </div>

//         </div>

//         <div className="footer">
//           Built with React • useState • State Management
//         </div>

//       </div>

//     </div>
//   );
// }


























// import React from "react";
// import RegistrationForm from "./Component/RegistrationForm";
// import "./App.css";

// export default function App() {
//   return (
//     <div>
//       <RegistrationForm />
//     </div>
//   );
// }

























// import React, { useEffect, useState } from "react";
// import "./App.css";

// export default function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch user data");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="app">
//       <div className="main-container">

//         {/* Header */}
//         <div className="header">
//           <div className="header-icon">👥</div>

//           <div>
//             <h1>User Information Dashboard</h1>
//           </div>
//         </div>

//         {/* API Information */}
//         <div className="api-box">
//           <div>
//             <span className="api-label">API SOURCE</span>
//             <p>JSONPlaceholder Users API</p>
//           </div>

//           <div className="status">
//             <span className="status-dot"></span>
//             Live API
//           </div>
//         </div>

//         {/* Loading */}
//         {loading && (
//           <div className="loading-box">
//             <div className="spinner"></div>
//             <h2>Loading...</h2>
           
//           </div>
//         )}

        // {/* Error */}
        // {error && (
        //   <div className="error-box">
        //     <span>⚠️</span>
        //     <div>
        //       <h3>Something went wrong</h3>
        //       <p>{error}</p>
        //     </div>
        //   </div>
        // )}

        // {/* User Table */}
        // {!loading && !error && (
        //   <>
        //     <div className="table-heading">
        //       <div>
        //         <h2>All Users</h2>
                
        //       </div>

        //       <div className="user-count">
        //         {users.length} Users
        //       </div>
        //     </div>

        //     <div className="table-wrapper">
        //       <table>
        //         <thead>
        //           <tr>
        //             <th>ID</th>
        //             <th>NAME</th>
        //             <th>USERNAME</th>
        //             <th>EMAIL</th>
        //             <th>PHONE NUMBER</th>
        //             <th>WEBSITE</th>
        //           </tr>
        //         </thead>

        //         <tbody>
        //           {users.map((user) => (
        //             <tr key={user.id}>
        //               <td>
        //                 <span className="id-circle">{user.id}</span>
        //               </td>

        //               <td>
        //                 <div className="name-cell">
        //                   <div className="avatar">
        //                     {user.name.charAt(0)}
        //                   </div>
        //                   <strong>{user.name}</strong>
        //                 </div>
        //               </td>

        //               <td>
        //                 <span className="username">
        //                   @{user.username}
        //                 </span>
        //               </td>

        //               <td>
        //                 <span className="email">
        //                   {user.email}
        //                 </span>
        //               </td>

        //               <td className="phone">
        //                 {user.phone}
        //               </td>

        //               <td>
        //                 <a
        //                   href={`https://${user.website}`}
        //                   target="_blank"
        //                   rel="noreferrer"
        //                 >
        //                   {user.website}
        //                 </a>
        //               </td>
        //             </tr>
        //           ))}
        //         </tbody>
        //       </table>
        //     </div>

//             {/* Footer */}
//             <div className="footer">
//               <div>
//                 <span className="footer-icon">✓</span>
//                 <h2>Data fetched successfully</h2>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }



























// import React, { useRef, useState } from "react";
// import "./App.css";

// export default function App() {
//   const fileInputRef = useRef(null);

//   const [profileImage, setProfileImage] = useState(null);
//   const [likes, setLikes] = useState(0);

//   const handleUploadClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setProfileImage(imageUrl);
//     }
//   };

//   const handleLike = () => {
//     setLikes(likes + 1);
//   };

//   return (
//     <div className="app">

//       <div className="profile-card">

//         {/* LEFT SIDE */}
//         <section className="profile-left">

//           <div className="avatar-wrapper">
//             {profileImage ? (
//               <img
//                 src={profileImage}
//                 alt="Profile"
//                 className="profile-image"
//               />
//             ) : (
//               <div className="default-avatar">
//                 <span>DN</span>
//               </div>
//             )}
//           </div>

//           <div className="profile-info">
//             <span className="small-title">MY PROFILE</span>

//             <h1>Dasari Nirosha</h1>

//             <h3>Frontend Developer</h3>

//             <p>
//               Creating clean, responsive and user-friendly
//               web applications.
//             </p>
//           </div>

//         </section>

        // {/* RIGHT SIDE */}
        // <section className="profile-right">

        //   <span className="section-label">
        //     PROFILE PICTURE MANAGER
        //   </span>

        //   <h2>Manage Your Profile</h2>

          // {/* DETAILS */}
          // <div className="details">

          //   <div className="detail-box">
          //     <div className="detail-icon">💼</div>

          //     <div>
          //       <span>ROLE</span>
          //       <strong>Frontend Developer</strong>
          //     </div>
          //   </div>

          //   <div className="detail-box">
          //     <div className="detail-icon">{"</>"}</div>

          //     <div>
          //       <span>SKILLS</span>
          //       <strong>React • JavaScript • CSS • HTML</strong>
          //     </div>
          //   </div>

          // </div>

          //  {/* UPLOAD */}
          //  <div className="upload-box">

          //   <div className="upload-text">
          //     <span className="upload-icon">↑</span>

          //     <div>
          //       <h3>Upload Profile Picture</h3>
          //       <p>Choose an image from your device</p>
          //     </div>
          //   </div>

          //   <button
          //     className="upload-button"
          //     onClick={handleUploadClick}
          //   >
          //     Upload Image
          //   </button>

          //   <input
          //     type="file"
          //     ref={fileInputRef}
          //     accept="image/*"
          //     onChange={handleImageChange}
          //     hidden
          //   />

          // </div>

//           {/* LIKE */}
//           <div className="like-section">

//             <button
//               className="like-button"
//               onClick={handleLike}
//             >
//               ♥
//             </button>

//             <div className="like-count">
//               <strong>{likes}</strong>
//               <span>LIKES</span>
//             </div>

//           </div>

//         </section>

//       </div>

//     </div>
//   );
// }




















import React, { createContext, useContext, useState } from "react";
import "./App.css";

// Create Context
const AppContext = createContext();

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const userData = {
    name: "Dasari Nirosha",
    role: "Frontend Developer",
    city: "Banglore",
  };

  const toggleTheme = () => {
    setDarkMode((previousMode) => !previousMode);
  };

  return (
    <AppContext.Provider
      value={{
        userData,
        darkMode,
        toggleTheme,
      }}
    >
      <div className={darkMode ? "app dark" : "app light"}>
        <div className="main-container">

          <div className="top-section">
            <div>
              <p className="small-title">REACT ASSIGNMENT</p>
              <h1>useContext Hook</h1>
              <p className="subtitle">
                Sharing data without prop drilling
              </p>
            </div>

            <button className="theme-btn" onClick={toggleTheme}>
              {darkMode ? "☀ Light Mode" : "☾ Dark Mode"}
            </button>
          </div>

          <div className="context-badge">
            <span>✓</span>
            Context Provider Active
          </div>

          <Component1 />
        </div>
      </div>
    </AppContext.Provider>
  );
}

// Component 1
function Component1() {
  const { userData } = useContext(AppContext);

  return (
    <section className="component-card">
      <div className="component-header">
        <div className="number">01</div>
        <div>
          <p className="component-label">NESTED COMPONENT</p>
          <h2>Component 1</h2>
        </div>
      </div>

      <p className="description">
        Component 1 receives data directly from Context.
      </p>

      <div className="info-row">
        <div className="info-box">
          <span>Name</span>
          <strong>{userData.name}</strong>
        </div>

        <div className="info-box">
          <span>Role</span>
          <strong>{userData.role}</strong>
        </div>
      </div>

      <Component2 />
    </section>
  );
}

// Component 2
function Component2() {
  const { userData } = useContext(AppContext);

  return (
    <div className="nested-card second">
      <div className="component-header">
        <div className="number">02</div>
        <div>
          <p className="component-label">NESTED COMPONENT</p>
          <h2>Component 2</h2>
        </div>
      </div>

      <p className="description">
        Data is accessed using useContext without passing props.
      </p>

      <div className="city-box">
        <span>📍 City</span>
        <strong>{userData.city}</strong>
      </div>

      <Component3 />
    </div>
  );
}

// Component 3
function Component3() {
  const { userData, darkMode } = useContext(AppContext);

  return (
    <div className="nested-card third">
      <div className="component-header">
        <div className="number">03</div>
        <div>
          <p className="component-label">DEEPEST COMPONENT</p>
          <h2>Component 3</h2>
        </div>
      </div>

      <p className="description">
        Component 3 accesses App data directly through Context.
      </p>

      <div className="success-box">
        <div className="success-icon">✓</div>

        <div>
          <strong>Context Data Received</strong>
          <p>
            Hello {userData.name}! Theme is currently{" "}
            <b>{darkMode ? "Dark" : "Light"}</b>.
          </p>
        </div>
      </div>
    </div>
  );
}

