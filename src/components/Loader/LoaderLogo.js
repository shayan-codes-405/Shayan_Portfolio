import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="shayan-loader-container">
        <svg
          className="shayan-raw-logo"
          viewBox="0 0 440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Animated Tech Hexagon Frame */}
          <polygon
            className="shayan-hex-outer"
            points="220,20 330,85 330,215 220,280 110,215 110,85"
            stroke={theme.body}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polygon
            className="shayan-hex-inner"
            points="220,38 315,95 315,205 220,262 125,205 125,95"
            stroke={theme.highlight || "#A6E1FA"}
            strokeWidth="1.5"
            strokeDasharray="8 6"
            strokeLinecap="round"
          />

          {/* Monogram "S A" in Center */}
          <g className="shayan-monogram">
            {/* Letter S */}
            <path
              className="shayan-letter-s"
              d="M178 120 C178 102, 205 100, 215 110 C223 118, 221 130, 208 136 L188 146 C173 154, 172 168, 180 178 C190 190, 222 188, 224 170"
              stroke={theme.body}
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            {/* Letter A */}
            <path
              className="shayan-letter-a"
              d="M236 182 L254 108 L272 182 M242 160 L266 160"
              stroke={theme.highlight || "#A6E1FA"}
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>

          {/* Shayan Akhtar Name Branding Underneath */}
          <text
            x="220"
            y="308"
            textAnchor="middle"
            className="shayan-signature-text"
            fill={theme.body}
          >
            Shayan Akhtar
          </text>
        </svg>
      </div>
    );
  }
}

export default LogoLoader;
