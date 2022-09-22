const buttons = document.querySelector('.buttons');
const btn = document.querySelectorAll('span');
const value = document.getElementById('value');
const toggleBtn = document.querySelector('.toggleBtn');
const body = document.querySelector('body')

for(var i = 0; i < btn.length; i++) {                 // Cho vòng lặp for chạy qua tất cả thẻ span
      btn[i].addEventListener('click', function() {   // Mỗi thẻ span click - lắng nghe sự kiện - 1 function
            if (this.innerHTML == "=") {              // Nếu click vào dấu =
                  value.innerHTML = eval(value.innerHTML)
            } else {
                  if (this.innerHTML == "Clear") {    // Nếu click vào "Clear" thì sẽ xóa hết
                        value.innerHTML = "";
                  } else {
                        value.innerHTML += this.innerHTML  // Giá trị in ra bằng giá trị click
                  }
            }
      })
}

// Đổi chế độ tối cho background - toggle dark vào thẻ body
toggleBtn.onclick = () => {
      body.classList.toggle('dark')
}