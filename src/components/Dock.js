import React from "react";
import { useMotionValue } from "framer-motion";

import { ReactComponent as Chrome } from "../assets/chrome.svg";
import { ReactComponent as Docs } from "../assets/docs.svg";
import { ReactComponent as Excel } from "../assets/excel.svg";
import { ReactComponent as Gmail } from "../assets/gmail.svg";
import { ReactComponent as Photoshop } from "../assets/photoshop.svg";
import { ReactComponent as Powerpoint } from "../assets/powerpoint.svg";
import { ReactComponent as Safari } from "../assets/safari.svg";
import { ReactComponent as Slack } from "../assets/slack.svg";
import { ReactComponent as Spotify } from "../assets/spotify.svg";
import { ReactComponent as Steam } from "../assets/steam.svg";
import { ReactComponent as Vlc } from "../assets/vlc.svg";

const logos = [
  Chrome,
  Docs,
  Excel,
  Gmail,
  Photoshop,
  Powerpoint,
  Safari,
  Slack,
  Spotify,
  Steam,
  Vlc,
];

function renderLogos() {
  return logos.map((Logo, index) => {
    return <Logo key={index} />;
  });
}

function Dock() {
  const mouseX = useMotionValue(null);

  return <div className="dock">{renderLogos()}</div>;
}

export default Dock;
