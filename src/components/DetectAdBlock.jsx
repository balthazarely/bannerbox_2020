import React, { useState, useEffect } from "react";
const noticeContentJSX = (cb) => {
  return (
    <div id="adblock-notice">
      <div className="message">
        <h3>Hey, you!</h3>
        <p>Your adblocker is on again.</p>
        <button onClick={cb}>Check for Adblocker again</button>
      </div>
    </div>
  );
};
const DetectAdBlock = () => {
  const [adBlockDetected, setAdBlockDetected] = useState(false);
  useEffect(() => {
    const head = document.getElementsByTagName("c")[0];
    const noAdBlockDetected = () => {
      setAdBlockDetected(false);
    };
    const adBlockDetected = () => {
      setAdBlockDetected(true);
    };
    const oldScript = document.getElementById("adblock-detection");
    if (oldScript) {
      head.removeChild(oldScript);
    }
    const script = document.createElement("script");
    script.id = "adblock-detection";
    script.type = "text/javascript";
    script.src = "/adframe.js"; // changed name of bait; seems ads.js was considered safe.
    script.onload = noAdBlockDetected;
    script.onerror = adBlockDetected;
    head.appendChild(script);
  });
  console.log(adBlockDetected);
  return (
    <div id="adblock-wrapper">
      {adBlockDetected
        ? noticeContentJSX(() => console.log("Detect again"))
        : "No adblocker here..."}
    </div>
  );
};
export default DetectAdBlock;
