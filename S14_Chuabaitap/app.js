// // Bài 1: Cho layout ở phía dưới:
// // •	Khi click vào button “Hide text”, dòng chữ bên trên sẽ được ẩn đi
// // •	Khi click vào button “Show text”, dòng chữ bên trên sẽ được hiện ra

// // Truy vấn các phẩn tử HTMl sang JS
// let content = document.getElementById("content");
// let btnHide = document.getElementById("btn-hide");
// let btnShow = document.getElementById("btn-show");
// let toggle = document.getElementById("toggle");
// // Kiểm tra các phẩn tử xem đã gọi thành công chưa
// console.log(content, btnHide, btnShow, toggle);

// // Khi ấn btnHide thì content ẩn đi
// // Bước 1: Gắn sự kiện click cho btnHide
// btnHide.onclick = function () {
//   // Bước 2: Để ẩn content thì sẽ style.display = "none"
//   content.style.display = "none";
// };

// // Khi ấn btnShow thì content hiện ra
// // Bước 1: Gắn sự kiện click cho btnShow (addEventListener)
// btnShow.addEventListener("click", function () {
//   // Bước 2: Để hiển thị content thi sẽ style.display = "block"
//   content.style.display = "block";
// });

// // Làm sự kiện bật/tắt với button Toggle
// // Khi ấn button "Ẩn" thì text biến mất và nội dung button "Ẩn" => "Hiện"
// // Khi ấn button "Hiện" thì text hiện ra và nội dung button "Hiển" => "Ẩn"
// toggle.onclick = function () {
//   if (toggle.innerText == "Ẩn") {
//     content.style.display = "none"; // ẩn text
//     toggle.innerText = "Hiện"; // thay nội dung button Ẩn => Hiện
//   } else {
//     content.style.display = "block"; // hiển thị lại text
//     toggle.innerText = "Ẩn"; // thay nội dung button Hiện => Ẩn
//   }
// };

// Bài 2:
// let box = document.getElementsByClassName("box");
// let btnChange = document.getElementsByClassName("btn-change");
// // Kiểm tra các html element xem gọi thành công chưa
// console.log(box[0], btnChange[0]);

// // Gắn sự kiện
// btnChange[0].onclick = function () {
//   console.log("kiểm tra");
//   //Viet logic
//   let r = Math.floor(Math.random() * 255);
//   let g = Math.floor(Math.random() * 255);
//   let b = Math.floor(Math.random() * 255);
//   console.log(r, g, b);
//   box[0].style.backgroundColor = `rgb(${r},${g},${b})`;
// };

// Bài 3:
// •	Khi click vào button “Phóng to”,
//  chữ sẽ được phóng to từ 16px lên 40px (mỗi lần tăng 2px)
// •	Khi kích thước chữ đạt 40px sẽ
// đổi màu chữ sang màu đỏ

// let content = document.getElementById("content");
// let btnChange = document.getElementById("btn-change");
// console.log(content, btnChange);
// let size = 16;
// content.style.fontSize = `${size}px`;
// btnChange.onclick = function () {
//   //   console.log("kiểm tra");
//   if (size < 40) {
//     size = size + 2;
//     content.style.fontSize = `${size}px`;
//   } else if (size == 40) {
//     content.style.color = "red";
//   }
// };

let input = document.getElementById("input");
let btnAdd = document.getElementById("btn-add");
let ulElement = document.getElementById("list-item");
console.log(input, btnAdd, ulElement);
btnAdd.onclick = function () {
  // Bước 1: lấy giá trị input
  let inputValue = input.value;
  console.log("Lấy giá trị input", inputValue);
  // Bước 2: Tạo ra 1 thẻ li
  let li = document.createElement("li");
  // Bước 3: Gán nội dung cho li
  li.innerText = inputValue;
  console.log(li);
  // Bước 4: Thêm vào trong thẻ ul
  ulElement.appendChild(li);
  // Bước 5: Xóa giá trị cũ trong input
  input.value = "";
};
