import React, { useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./asset/styles/App.css";
import invalid from "./asset/images/404-error.png";
const FormInput = lazy(() => import("./component/form/form.component"));
const UserList = lazy(() => import("./component/userlist/userlist.component"));
const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
function PageNotFound() {
  return (
    <div className="centered-container">
      <img className="invalid" src={invalid} />
      <p className="error_page">Page not found</p>
    </div>
  );
}
const App = () => {
  const [userData, setUserData] = useState(null);
  const handleUserInfo = (data) => {
    setUserData(data);
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense
            fallback={
              <div className="lazy-loading">
                Form is loading, please wait...
              </div>
            }
          >
            <Navigation />
            <FormInput handleUserInfo={handleUserInfo} />
          </Suspense>
        }
      />
      <Route
        path="/userList"
        element={
          <Suspense
            fallback={
              <div className="lazy-loading">
                User Info is loading, please wait...
              </div>
            }
          >
            <Navigation />
            <UserList userData={userData} />
          </Suspense>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
export default App;
