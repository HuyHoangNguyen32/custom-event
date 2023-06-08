# Custom Event

## 🚀 Use
- 🛸 Có một cách truyền thẳng dữ liệu từ con lên cha sử dụng `Custom Event` nhờ tính chất sự kiện nổi bọt
- 🛸 Tham khảo MDN -> [CustomEvent()](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent)
- 🛸 Tạo custom event ở con và gắn dữ liệu vào
- 🛸 Ở trên cha gọi custom event và lấy dữ liệu ra sử dụng

## ⚙️ Setup
- ⚒️ `post.js` : tạo custom event và truyền giá trị lên cho document
- ⚒️ `middle-fn.js` : gọi post.js
- ⚒️ `home.js` : nhận giá trị mà post.js truyền lên và in ra kết quả
- ⚒️ `main.js` : gọi home.js và middle-fn.js