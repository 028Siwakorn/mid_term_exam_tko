import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState();

  useEffect(() => {
    // call api
    fetch("/api/hello")
      .then((res) => {
        // convert to json format
        return res.json();
      })
      .then((resp) => {
        console.log(resp.message);
        setText(resp.message);
      });
  }, []);

  // ฟีเจอร์ใหม่: เรียก /api/env
  const [env, setEnv] = useState(null);
  const handleCheckEnv = async () => {
    const res = await fetch('/api/env');
    const data = await res.json();
    setEnv(data);
  };

  return (
    <>
      <h1>{text}</h1>
      <button onClick={handleCheckEnv}>ตรวจสอบ Environment</button>
      {env && (
        <div style={{marginTop: '1rem'}}>
          <h2>Environment Info</h2>
          <pre>{JSON.stringify(env, null, 2)}</pre>
        </div>
      )}
    </>
  );
}

export default App;
