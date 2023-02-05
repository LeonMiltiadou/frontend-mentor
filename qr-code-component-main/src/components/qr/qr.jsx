import { useState } from "react";
import "./index.css";
import qrImage from "../../../images/image-qr-code.png";

function QR() {
  const [count, setCount] = useState(0);

  return (
    <div className="qr-container">
      <img className="qr-code" src={qrImage} alt="qr image" />
      <h1 class="qr-title">
        Improve your front-end skills by building projects
      </h1>
      <p class="qr-paragraph">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default QR;
