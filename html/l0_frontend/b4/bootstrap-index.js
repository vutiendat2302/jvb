const openLoginBtn = document.getElementById("openLoginBtn");
const loginModalEl = document.getElementById("loginModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const userError = document.getElementById("userError");
const passError = document.getElementById("passError");
const dashboard = document.getElementById("dashboard");
const logoutBtn = document.getElementById("logoutBtn");

const loginModal = new bootstrap.Modal(loginModalEl);
let isLoggedIn = false;

function clearErrors() {
  userError.textContent = "";
  passError.textContent = "";
}

function resetLoginButton() {
  loginBtn.disabled = false;
  loginBtn.innerHTML = "Login";
}

openLoginBtn.addEventListener("click", () => {
  if (isLoggedIn) {
    isLoggedIn = false;
    openLoginBtn.textContent = "Đăng nhập hệ thống";
    openLoginBtn.className = "btn btn-success";
    return;
  }

  clearErrors();
  loginModal.show();
});

closeModalBtn.addEventListener("click", () => {
  loginModal.hide();
});

loginBtn.addEventListener("click", () => {
  clearErrors();

  if (username.value.trim() === "" && password.value.trim() === "") {
    passError.textContent = "Vui lòng nhập đầy đủ thông tin";
    userError.textContent = "Vui lòng nhập đầy đủ thông tin";
    return;
  }
  if (username.value.trim() === "") {
    userError.textContent = "Vui lòng nhập đầy đủ thông tin";
    return;
  }

  if (password.value.trim() === "") {
    passError.textContent = "Vui lòng nhập đầy đủ thông tin";
    return;
  }

  loginBtn.disabled = true;
  loginBtn.innerHTML = '<span class="spinner-border spinner-border-sm"></span>Đang xử lý...';

  setTimeout(() => {
    if (username.value === "admin" && password.value === "admin") {
      loginModal.hide();
      dashboard.classList.remove("d-none");
      dashboard.classList.add("d-block");
      openLoginBtn.classList.add("d-none");
      username.value = "";
      password.value = "";
      resetLoginButton();
      isLoggedIn = true;
      dashboard.classList.remove("d-none");
      dashboard.classList.add("d-block");
      openLoginBtn.classList.add("d-none");
        openLoginBtn.hide();
    } else {
      passError.textContent = "Tài khoản hoặc mật khẩu không đúng";
      resetLoginButton();
    }
  }, 1500);
});

logoutBtn.addEventListener("click", () => {
  dashboard.classList.add("d-none");
  dashboard.classList.remove("d-block");
  openLoginBtn.classList.remove("d-none");
  openLoginBtn.textContent = "Đăng nhập hệ thống";
  openLoginBtn.className = "btn btn-success btn-lg px-4 py-3";
  isLoggedIn = false;
});
