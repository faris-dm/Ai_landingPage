import React from "react";

const Ai_Logo = () => {
  return (
    <div
      style={{
        "--size": "50px",
        "--duration": "2s",
        "--logo-color": "grey",
        "--background":
          "linear-gradient(0deg, rgba(10,50,0,0.2) 0%, rgba(30,100,70,0.2) 100%)",
        height: "var(--size)",
        aspectRatio: "1",
        position: "relative",
      }}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            background: "var(--background)",
            borderRadius: "50%",
            borderTop: "1px solid rgba(100, 100, 100, 1)",
            boxShadow: "rgba(0, 0, 0, 0.3) 0px 10px 10px 0px",
            backdropFilter: "blur(5px)",
            animation: "ripple var(--duration) infinite ease-in-out",
            inset:
              i === 1
                ? "40%"
                : i === 2
                ? "30%"
                : i === 3
                ? "20%"
                : i === 4
                ? "10%"
                : "0%",
            zIndex: 100 - i,
            borderColor: `rgba(100, 100, 100, ${1 - i * 0.2})`,
            animationDelay: `${(i - 1) * 0.2}s`,
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          placeContent: "center",
          padding: "30%",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={{
            fill: "var(--logo-color)",
            width: "100%",
            animation: "color-change var(--duration) infinite ease-in-out",
          }}
        >
          <path d="M12 2L15 8H9L12 2ZM12 22L9 16H15L12 22ZM2 12L8 15V9L2 12ZM22 12L16 9V15L22 12Z" />
        </svg>
      </div>

      {/* Inline keyframes */}
      <style>
        {`
        @keyframes ripple {
          0% {
            transform: scale(1);
            box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px 0px;
          }
          50% {
            transform: scale(1.3);
            box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 20px 0px;
          }
          100% {
            transform: scale(1);
            box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px 0px;
          }
        }

        @keyframes color-change {
          0% { fill: var(--logo-color); }
          50% { fill: white; }
          100% { fill: var(--logo-color); }
        }
        `}
      </style>
    </div>
  );
};

export default Ai_Logo;
