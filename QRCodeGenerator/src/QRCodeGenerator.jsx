import { useState } from "react";
import { QRCode } from "react-qr-code";


export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div className="container">
      <h1>QR Code Generator</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter value"
      />

      <button disabled={!input.trim()} onClick={handleGenerateQrCode}>
        Generate
      </button>

      <div className="qr-box">
        <QRCode value={qrCode || " "} size={220} />
      </div>
    </div>
  );
}