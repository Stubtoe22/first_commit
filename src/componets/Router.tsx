import { Route, Routes } from "react-router-dom";
import App from "../App";
import Users from "../CardLists/Users";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/users" element={<Users />} />
      <Route path="/post-details/:postId" />
    </Routes>
  );
};

export default Router;
