const openLoginBtn = document.getElementById("openLoginBtn");
const loginModal = document.getElementById("loginModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const username = document.getElementById("username")
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

const userError = document.getElementById("userError");
const passError = document.getElementById("passError");

const dashboard = document.getElementById("dashboard")
const logoutBtn = document.getElementById("logoutBtn")

let isLoggedIn = false; 

openLoginBtn.addEventListener("click", () => {
    if (isLoggedIn) {
        isLoggedIn = false;
        openLoginBtn.textContent = "Đăng nhập hệ thống";
        openLoginBtn.style.background = ""; 
        return; 
    }

    loginModal.classList.add("show");
    clearErrors();
});

closeModalBtn.addEventListener("click", () => {
    loginModal.classList.remove("show");
});

function clearErrors() {
    userError.textContent="";
    passError.textContent="";
}

loginBtn.addEventListener("click", () => {
    clearErrors();
    
    if (username.value.trim() === "") {
        userError.textContent = "Vui lòng nhập đầy đủ thông tin";
        return; 
    }

    if (password.value.trim()==="") {
        passError.textContent = "Vui lòng nhập đầy đủ thông tin";
        return;
    }
    
    // Khong cho bam nut login nua 
    loginBtn.disabled = true;
    
    loginBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';

        setTimeout(()=>{

        if(username.value==="admin" && password.value==="admin"){
            loginModal.classList.remove("show");
            openLoginBtn.style.display = "none";

            dashboard.style.display = "block";

            username.value = "";
            password.value = "";
            loginBtn.innerHTML = "Login";
            loginBtn.disabled = false;

        }else{
            passError.textContent="Tài khoản hoặc mật khẩu không đúng";
            loginBtn.innerHTML="Login";
            loginBtn.disabled=false;
        }
    },1500);

    logoutBtn.addEventListener("click", () => {
        dashboard.style.display = "none";
        openLoginBtn.style.display = "block"; 
    });

});