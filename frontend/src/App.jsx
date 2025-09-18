import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState();

  useEffect(() => {
    // call api
    fetch("http://localhost:5000/api/hi")
      .then((res) => {
        // convert to json format
        return res.json();
      })
      .then((resp) => {
        console.log(resp.message);
        setText(resp.message);
      });
  }, []);

  // ฟีเจอร์ใหม่: เรียก /api/time
  const [timeInfo, setTimeInfo] = useState(null);
  const handleCheckTime = async () => {
    const res = await fetch("/api/time");
    const data = await res.json();
    setTimeInfo(data);
  };

  return (
    <>
      <h1>{text}</h1>
      <button className="timezone-btn" onClick={handleCheckTime}>
        Timezone in Server
      </button>
      {timeInfo && (
        <div style={{ marginTop: "1rem" }}>
          <h2>Server Time Info</h2>
          <ul style={{ textAlign: "left", display: "inline-block" }}>
            <li>
              <b>Timestamp:</b> {timeInfo.timestamp}
            </li>
            <li>
              <b>ISO Time:</b> {timeInfo.iso}
            </li>
            <li>
              <b>Timezone:</b> {timeInfo.timezone}
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
