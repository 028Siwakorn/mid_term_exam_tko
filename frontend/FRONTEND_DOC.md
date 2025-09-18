# คู่มือการใช้งานฟีเจอร์ใหม่ฝั่ง Frontend

## 1. การแสดงข้อความจาก Backend
- เมื่อเปิดหน้าเว็บ จะมีข้อความจาก backend ("Hi, This is new feature") แสดงที่หัวข้อหลัก

## 2. การดูเวลาปัจจุบันของ Server
- มีปุ่ม "ดูเวลาปัจจุบันของ Server"
- เมื่อกดปุ่มนี้ จะเรียก API `/api/time` จาก backend
- จะแสดงข้อมูล:
  - Timestamp: เวลาปัจจุบันในรูปแบบตัวเลข
  - ISO Time: เวลาปัจจุบันในรูปแบบ ISO string
  - Timezone: เขตเวลาของ server

## 3. วิธีทดสอบ
1. ตรวจสอบว่า proxy ใน Vite (`vite.config.js`) ถูกตั้งค่าให้ `/api` ไปที่ backend (`http://localhost:5000`)
2. รัน backend ด้วยคำสั่ง `node server.js` ในโฟลเดอร์ backend
3. รัน frontend ด้วยคำสั่ง `npm run dev` ในโฟลเดอร์ frontend
4. เปิดเว็บ (เช่น http://localhost:5173)
5. กดปุ่ม "ดูเวลาปัจจุบันของ Server" เพื่อดูข้อมูล

## 4. ตัวอย่างโค้ดที่เกี่ยวข้อง
### เรียก API จาก frontend
```jsx
const handleCheckTime = async () => {
  const res = await fetch('/api/time');
  const data = await res.json();
  setTimeInfo(data);
};
```

### การแสดงผลข้อมูล
```jsx
{timeInfo && (
  <ul>
    <li><b>Timestamp:</b> {timeInfo.timestamp}</li>
    <li><b>ISO Time:</b> {timeInfo.iso}</li>
    <li><b>Timezone:</b> {timeInfo.timezone}</li>
  </ul>
)}
```

## 5. หมายเหตุ
- หากข้อมูลไม่แสดง ให้ตรวจสอบ proxy และการรัน backend ว่าอยู่ที่ port 5000
- สามารถแก้ไขข้อความหรือรูปแบบการแสดงผลได้ตามต้องการ
