const openLoginBtn = document.getElementById("openLoginBtn");
const loginModal = document.getElementById("loginModal");
const closeModalBtn = document.getElementById("closeModalBtn");

openLoginBtn.addEventListener("click", () => {
    loginModal.classList.add("show");
    clearErrors();
});

closeModalBtn.addEventListener("click", () => {
    loginModal.classList.remove("show");
});