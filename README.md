# Mid-term Exam Application

โปรเจกต์นี้เป็นการทดสอบการเชื่อมต่อระหว่าง Frontend และ Backend โดยใช้ React (Vite) และ Node.js (Express) ซึ่งสามารถทดสอบการรับข้อมูลจาก API ต่าง ๆ รวมทั้งแสดงผลในหน้าเว็บได้

## รายละเอียดโครงการ

- **ชื่อโครงการ**: Mid-term Exam Application
- **วันที่ Deploy**: 23 กันยายน 2025
- **Architecture**: Frontend (Vercel) + Backend (Render)
- **เวอร์ชั่น**: 1.0.0

## URLs การ Deploy

### Production URLs

- **Frontend**: [https://mid-term-exam-tko.vercel.app](https://mid-term-exam-tko.vercel.app)
- **Backend**: [https://mid-term-exam-tko.onrender.com](https://mid-term-exam-tko.onrender.com)
- **API Base URL**: [https://mid-term-exam-tko.onrender.com/api](https://mid-term-exam-tko.onrender.com/api)

## ฟีเจอร์ของโครงการ

### 1. ฟีเจอร์ของ Backend

#### 1.1 `/api/hi`

- คืนข้อความตัวอย่าง: `{ message: "Hi, This is new feature" }`
- ใช้สำหรับทดสอบการเชื่อมต่อเบื้องต้น

#### 1.2 `/api/time`

- คืนเวลาปัจจุบันของ server
- **Response ตัวอย่าง**:

    ```json
    {
      "timestamp": 1695012345678,
      "iso": "2025-09-18T12:34:56.789Z",
      "timezone": "Asia/Bangkok"
    }
    ```

- ใช้สำหรับตรวจสอบเวลาปัจจุบันและ timezone ของ server

### 2. ฟีเจอร์ของ Frontend

#### 2.1 การแสดงข้อความจาก Backend

- เมื่อเปิดหน้าเว็บ จะมีข้อความจาก backend ("Hi, This is new feature") แสดงที่หัวข้อหลัก

#### 2.2 การดูเวลาปัจจุบันของ Server

- มีปุ่ม "ดูเวลาปัจจุบันของ Server"
- เมื่อกดปุ่มนี้ จะเรียก API `/api/time` จาก backend
- จะแสดงข้อมูล:
  - **Timestamp**: เวลาปัจจุบันในรูปแบบตัวเลข
  - **ISO Time**: เวลาปัจจุบันในรูปแบบ ISO string
  - **Timezone**: เขตเวลาของ server

### 3. วิธีทดสอบ

1. ตรวจสอบว่า proxy ใน Vite (`vite.config.js`) ถูกตั้งค่าให้ `/api` ไปที่ backend (`http://localhost:5000`)
2. รัน backend ด้วยคำสั่ง `node server.js` ในโฟลเดอร์ backend
3. รัน frontend ด้วยคำสั่ง `npm run dev` ในโฟลเดอร์ frontend
4. เปิดเว็บ (เช่น [http://localhost:5173](http://localhost:5173))
5. กดปุ่ม "ดูเวลาปัจจุบันของ Server" เพื่อดูข้อมูล

### 4. ตัวอย่างโค้ดที่เกี่ยวข้อง

#### เรียก API จาก frontend

```jsx
const handleCheckTime = async () => {
  const res = await fetch('/api/time');
  const data = await res.json();
  setTimeInfo(data);
};


