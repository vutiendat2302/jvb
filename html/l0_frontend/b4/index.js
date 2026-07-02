const openLoginBtn = document.getElementById("openLoginBtn");
const loginModal = document.getElementById("loginModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const username = document.getElementById("username");
const password = document.getElementById("password");
const newPasswordField = document.getElementById("newPasswordField");
const newPassword = document.getElementById("newPassword");
const phoneField = document.getElementById("phoneField");
const phone = document.getElementById("phone");
const loginBtn = document.getElementById("loginBtn");
const forgotPasswordBtn = document.getElementById("forgotPasswordBtn");
const createAccountBtn = document.getElementById("createAccountBtn");
const backToLoginBtn = document.getElementById("backToLoginBtn");

const userError = document.getElementById("userError");
const passError = document.getElementById("passError");
const newPassError = document.getElementById("newPassError");
const phoneError = document.getElementById("phoneError");
const actionMessage = document.getElementById("actionMessage");

const dashboard = document.getElementById("dashboard");
const logoutBtn = document.getElementById("logoutBtn");

const defaultUser = {
    username: "admin",
    password: "admin",
    phone: ""
};
let user = { ...defaultUser };
let currentMode = "login"; // login | forgot | create
let isLoggedIn = false;

openLoginBtn.addEventListener("click", () => {
    if (isLoggedIn) {
        isLoggedIn = false;
        openLoginBtn.textContent = "Đăng nhập hệ thống";
        openLoginBtn.style.background = "";
        dashboard.style.display = "none";
        return;
    }

    showLoginModal();
});

closeModalBtn.addEventListener("click", () => {
    loginModal.classList.remove("show");
    resetForm();
});

logoutBtn.addEventListener("click", () => {
    dashboard.style.display = "none";
    openLoginBtn.style.display = "block";
    isLoggedIn = false;
});

loginBtn.addEventListener("click", () => {
    clearErrors();
    actionMessage.classList.add("hidden");
    actionMessage.textContent = "";

    if (currentMode === "login") {
        handleLogin();
        return;
    }

    if (currentMode === "forgot") {
        handleForgotPassword();
        return;
    }

    if (currentMode === "create") {
        handleCreateAccount();
        return;
    }
});

forgotPasswordBtn.addEventListener("click", () => {
    setMode("forgot");
});

createAccountBtn.addEventListener("click", () => {
    setMode("create");
});

backToLoginBtn.addEventListener("click", () => {
    setMode("login");
});

function showLoginModal() {
    loginModal.classList.add("show");
    setMode("login");
    resetForm();
}

function setMode(mode) {
    currentMode = mode;
    clearErrors();
    actionMessage.classList.add("hidden");
    actionMessage.textContent = "";

    username.value = "";
    password.value = "";
    newPassword.value = "";
    phone.value = "";

    newPasswordField.classList.add("hidden");
    phoneField.classList.add("hidden");
    backToLoginBtn.classList.add("hidden");

    if (mode === "login") {
        loginBtn.textContent = "Login";
        password.placeholder = "Password";
        createAccountBtn.classList.remove("hidden");
        forgotPasswordBtn.classList.remove("hidden");
        backToLoginBtn.classList.add("hidden");
    } else if (mode === "forgot") {
        loginBtn.textContent = "Save";
        password.placeholder = "Old Password";
        newPasswordField.classList.remove("hidden");
        newPassword.placeholder = "New Password";
        createAccountBtn.classList.add("hidden");
        forgotPasswordBtn.classList.add("hidden");
        backToLoginBtn.classList.remove("hidden");
    } else if (mode === "create") {
        loginBtn.textContent = "Save";
        password.placeholder = "Password";
        phoneField.classList.remove("hidden");
        createAccountBtn.classList.add("hidden");
        forgotPasswordBtn.classList.add("hidden");
        backToLoginBtn.classList.remove("hidden");
    }
}

function resetForm() {
    clearErrors();
    actionMessage.classList.add("hidden");
    actionMessage.textContent = "";
    username.value = "";
    password.value = "";
    newPassword.value = "";
    phone.value = "";
}

function clearErrors() {
    userError.textContent = "";
    passError.textContent = "";
    newPassError.textContent = "";
    phoneError.textContent = "";
}

function handleLogin() {
    let hasError = false;

    if (username.value.trim() === "") {
        userError.textContent = "Bắt buộc nhập";
        hasError = true;
    }
    if (password.value.trim() === "") {
        passError.textContent = "Bắt buộc nhập";
        hasError = true;
    }
    if (hasError) {
        return;
    }

    if (username.value !== user.username || password.value !== user.password) {
        passError.textContent = "Tài khoản hoặc mật khẩu không đúng";
        return;
    }

    loginModal.classList.remove("show");
    openLoginBtn.style.display = "none";
    dashboard.style.display = "block";
    isLoggedIn = true;
}

function handleForgotPassword() {
    let hasError = false;

    if (password.value.trim() === "") {
        passError.textContent = "Bắt buộc nhập";
        hasError = true;
    }
    if (newPassword.value.trim() === "") {
        newPassError.textContent = "Bắt buộc nhập";
        hasError = true;
    }
    if (hasError) {
        return;
    }

    if (password.value !== user.password) {
        passError.textContent = "Password không đúng";
        return;
    }

    if (newPassword.value === password.value) {
        newPassError.textContent = "Mật khẩu mới không được trùng mật khẩu cũ";
        return;
    }

    user.password = newPassword.value;
    setMode("login");
    actionMessage.textContent = "Bạn đã đổi mật khẩu thành công";
    actionMessage.classList.remove("hidden");
    actionMessage.classList.add("success-message");
}

function handleCreateAccount() {
    let hasError = false;

    if (username.value.trim() === "") {
        userError.textContent = "Bắt buộc nhập";
        hasError = true;
    }
    if (password.value.trim() === "") {
        passError.textContent = "Bắt buộc nhập";
        hasError = true;
    }
    if (phone.value.trim() === "") {
        phoneError.textContent = "Bắt buộc nhập";
        hasError = true;
    }
    if (hasError) {
        return;
    }

    user.username = username.value.trim();
    user.password = password.value;
    user.phone = phone.value.trim();

    actionMessage.textContent = "Bạn đã tạo tài khoản thành công";
    actionMessage.classList.remove("hidden");
    actionMessage.classList.add("success-message");
    setMode("login");
}

setMode("login");