import React from "react";

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      <p>That letter has already been selected</p>
    </div>
  );
};

export default Notification;
