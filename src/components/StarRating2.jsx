import React, { useState } from "react";

const StarRating = () => {
  const [score, setScore] = useState([false, false, false, false, false]);

  const starScore = (index) => {
    let star = [...score];
    for (let i = 0; i < 5; i++) {
      star[i] = i <= index;
    }
    setScore(star);
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        return (
          <span
            key={index}
            onClick={() => starScore(index)}
            style={{
              fontSize: "40px",
              cursor: "pointer",
              color: score[index] ? "red" : "#ddd",
            }}
          >
            {score[index] ? "★" : "★"}
          </span>
        );
      })}
      <p style={{ color: "gray", fontSize: "13px", margin: "2px" }}>평가하기</p>
    </div>
  );
};

export default StarRating;
