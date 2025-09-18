# คู่มือการใช้งานฟีเจอร์ใหม่ฝั่ง Backend

## 1. Endpoint ที่มีในระบบ

### 1.1 `/api/hi`
- คืนข้อความตัวอย่าง: `{ message: "Hi, This is new feature" }`
- ใช้สำหรับทดสอบการเชื่อมต่อเบื้องต้น

### 1.2 `/api/time`
- คืนเวลาปัจจุบันของ server
- Response ตัวอย่าง:
```json
{
  "timestamp": 1695012345678,
  "iso": "2025-09-18T12:34:56.789Z",
  "timezone": "Asia/Bangkok"
}
```
- ใช้สำหรับตรวจสอบเวลาปัจจุบันและ timezone ของ server

### 1.3 `/api/env`
- คืนข้อมูล environment ของ server
- Response ตัวอย่าง:
```json
{
  "node_env": "development",
  "port": 5000,
  "platform": "win32",
  "time": "2025-09-18T12:34:56.789Z"
}
```
- ใช้สำหรับตรวจสอบ environment และ platform

## 2. วิธีทดสอบ
1. รัน backend ด้วยคำสั่ง `node server.js` ในโฟลเดอร์ backend
2. ใช้ Postman, curl หรือ frontend เรียก endpoint ต่าง ๆ
3. ตรวจสอบผลลัพธ์ที่ได้จากแต่ละ endpoint

## 3. หมายเหตุ
- หากต้องการเพิ่ม endpoint หรือปรับแต่ง response สามารถแก้ไขไฟล์ `server.js`
- ตรวจสอบว่า PORT ที่ใช้งานตรงกับที่ frontend proxy ตั้งค่าไว้ (เช่น 5000)
- สามารถเพิ่ม log หรือ error handling ได้ตามต้องการ
