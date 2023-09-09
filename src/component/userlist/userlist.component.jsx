import React, { useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

function UserList({ userData }) {
  const toastShownRef = useRef(false);

  useEffect(() => {
    if (userData && !toastShownRef.current) {
      toast.success("Success!", {
        position: "top-right",
      });
      toastShownRef.current = true;
    }
  }, [userData]);

  return (
    <div className="userList-container">
      {userData && (
        <div>
          <h2>User Information</h2>
          <p>
            <span className="user-element">First Name:</span>
            {userData.firstName}
          </p>
          <p>
            <span className="user-element">Last Name:</span> {userData.lastName}
          </p>
          <p>
            <span className="user-element">State:</span> {userData.state}
          </p>
          <p>
            <span className="user-element">Passport number:</span>{" "}
            {userData.passport}
          </p>
          <p>
            <span className="user-element">Age:</span> {userData.age}
          </p>
          <p>
            <span className="user-element">Phone number:</span> {userData.phone}
          </p>
          <p>
            <span className="user-element">Sex:</span> {userData.sex}
          </p>
          <p>
            <span className="user-element">Email:</span> {userData.email}
          </p>
        </div>
      )}
      <ToastContainer position="top-right" />
    </div>
  );
}

export default UserList;
