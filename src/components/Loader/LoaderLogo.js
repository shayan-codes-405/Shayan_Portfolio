import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        className="raw_logo"
        width="50%"
        height="40%"
        viewBox="0 0 440 305"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Same Dual Hexagon Stroke Animations from masterPortfolio */}
        <path
          className="myHexagon"
          d="M293.545 167.405L229.5 204.381C227.025 205.81 223.975 205.81 221.5 204.381L157.455 167.405C154.98 165.976 153.455 163.335 153.455 160.476L153.455 86.5234C153.455 83.6653 154.98 81.0243 157.455 79.5952L221.5 42.6187C223.975 41.1896 227.025 41.1897 229.5 42.6187L293.545 79.5952C296.02 81.0243 297.545 83.6653 297.545 86.5234L297.545 160.476C297.545 163.335 296.02 165.976 293.545 167.405Z"
          stroke={theme.body}
          strokeWidth="4"
        />
        <path
          className="myHexagon"
          d="M147.455 73.5953L211.5 36.6188C213.975 35.1898 217.025 35.1898 219.5 36.6188L283.545 73.5953C286.02 75.0244 287.545 77.6654 287.545 80.5235L287.545 154.477C287.545 157.335 286.02 159.976 283.545 161.405L219.5 198.381C217.025 199.81 213.975 199.81 211.5 198.381L147.455 161.405C144.98 159.976 143.455 157.335 143.455 154.477L143.455 80.5235C143.455 77.6654 144.98 75.0244 147.455 73.5953Z"
          stroke={theme.body}
          strokeWidth="4"
        />

        {/* S A Monogram inside the Hexagon */}
        <text
          className="letter"
          x="220"
          y="136"
          textAnchor="middle"
          dominantBaseline="central"
          fill={theme.body}
          stroke={theme.body}
          strokeWidth="1.5"
          fontFamily="'Google Sans', 'Montserrat', 'Segoe UI', sans-serif"
          fontWeight="800"
          fontSize="52"
          letterSpacing="6px"
        >
          SA
        </text>

        {/* Shayan Akhtar Signature using Agustina cursive font */}
        <text
          className="signature"
          x="220"
          y="262"
          textAnchor="middle"
          fill={theme.body}
          fontFamily="'Agustina Regular', 'Allura', 'Great Vibes', cursive, sans-serif"
          fontSize="38"
          fontWeight="600"
        >
          Shayan Akhtar
        </text>

        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            .signature {
              stroke: ${theme.body};
              fill: ${theme.body};
              stroke-width: 1px;
              stroke-dasharray: 600;
              stroke-dashoffset: 600;
              animation: drawSignature 2s ease-in-out forwards 0.5s;
            }

            @keyframes drawSignature {
              0% {
                stroke-dashoffset: 600;
                fill-opacity: 0;
              }
              65% {
                stroke-dashoffset: 0;
                fill-opacity: 0.3;
              }
              100% {
                stroke-dashoffset: 0;
                fill-opacity: 1;
              }
            }

            .letter {
              opacity: 0;
              animation: fadein 0.8s ease-out forwards 0.8s;
            }

            @keyframes fadein {
              from {
                opacity: 0;
                transform: scale(0.9);
                transform-origin: 220px 136px;
              }
              to {
                opacity: 1;
                transform: scale(1);
                transform-origin: 220px 136px;
              }
            }

            .myHexagon {
              stroke-dasharray: 800;
              stroke-dashoffset: 800;
              animation: dash 3.2s linear forwards 0.2s;
            }

            @keyframes dash {
              from {
                stroke-dashoffset: 800;
              }
              to {
                stroke-dashoffset: 0;
              }
            }
          `,
            }}
          />
        </defs>
      </svg>
    );
  }
}

export default LogoLoader;
