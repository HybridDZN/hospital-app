window.customElements.define('sidebar-template', class extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="sidebar">
            <div class="top">
                <div class="logo">
                    <i class="bx bx-dna"></i>
                    <span>NALHN Policies</span>
                </div>
                <i class="bx bx-menu" id="btn"></i>
            </div>
        <div class="user">
            <img src="../images/me.jpg" alt="user" class="user-img" color="#ffffff">
            <!-- <img class="bx bx-user" class="user-img">-->
            <div>
                <p class="bold">NAHLN User</p>
                <p>Admin</p>
            </div>
        </div>
        <ul>
            <li>
                <a href="#">
                    <i class="bx bxs-search"></i>
                    <span class="nav-item">Search</span>
                </a>
                <span class="tooltip">Search</span>
            </li>
            <li>
                <a href="#">
                    <i class="bx bx-library"></i>
                    <span class="nav-item">Policies</span>
                </a>
                <span class="tooltip">Policies</span>
            </li>
            <li>
                <a href="#">
                    <i class="bx bx-calculator"></i>
                    <span class="nav-item">Calculator</span>
                </a>
                <span class="tooltip">Calculator</span>
            </li>
            <li>
                <a href="#">
                    <i class="bx bx-help-circle"></i>
                    <span class="nav-item">About</span>
                </a>
                <span class="tooltip">About</span>
            </li>
        </ul>
    </div>
    `
    }
})

let btn = document.querySelector('#btn')
let sidebar = document.querySelector('.sidebar')

btn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
})

function menuBtnChange() {
    if (sidebar.classList.contains("active")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}