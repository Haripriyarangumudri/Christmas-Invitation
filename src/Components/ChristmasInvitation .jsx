import React from "react";
import Snowfall from "react-snowfall";
import { useSpring, animated } from "react-spring";
import "./ChristmasInvitation.css";

const ChristmasInvitation = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
  });

  return (
    <div className="invitation-container">
      {/* Snowfall in the background */}
      <Snowfall snowflakeCount={100} color="white" />

      {/* Card Content */}
      <animated.div style={fadeIn} className="invitation-card">
        <h1 className="title"> Christmas Invitation </h1>
        <p className="title">🎄<b> NEO TECHNOLOGY</b>🎄</p>
        <p className="message">
        "Dear HR Team,
You are cordially invited to join us for a joyous Christmas celebration at the office—let's share the festive spirit together </p>
        <p className="details">
          <strong>Date:</strong> December 24, 2024<br />
          <strong>Time:</strong> 4:30 PM<br />
          
        </p>
        <p className="footer">We hope to see you there! 🎅✨</p>
      </animated.div>
    </div>
  );
};

export default ChristmasInvitation;