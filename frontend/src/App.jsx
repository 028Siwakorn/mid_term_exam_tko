import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState();

  // Define API base URL based on environment
  const API_BASE_URL = import.meta.env.PROD ? import.meta.env.VITE_API_URL : ""; // Empty string uses the proxy in development

  useEffect(() => {
    // call api - Updated to use environment variable
    fetch(`${API_BASE_URL}/api/hi`)
      .then((res) => {
        // convert to json format
        return res.json();
      })
      .then((resp) => {
        console.log(resp.message);
        setText(resp.message);
      })
      .catch((error) => {
        console.error("Error fetching /api/hi:", error);
      });
  }, []);

  // ฟีเจอร์ใหม่: เรียก /api/time
  const [timeInfo, setTimeInfo] = useState(null);
  const handleCheckTime = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/time`);
      const data = await res.json();
      setTimeInfo(data);
    } catch (error) {
      console.error("Error fetching /api/time:", error);
    }
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
