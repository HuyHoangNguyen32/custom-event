import post from "./post";

function middleFn() {
  const content = document.querySelector(".content");
  content.textContent = "Truyền dữ liệu từ con lên cha sử dụng tính chất sự kiện nổi bọt";
  post();
}

export default middleFn;
