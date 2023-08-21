window.customElements.define('sidebar-template', class extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <link rel="stylesheet" href="sidebar-style.css">
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
                <p class="bold">NALHN User</p>
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

document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('#btn')
    let sidebar = document.querySelector('.sidebar')
    let mainContent = document.querySelector('.main-content')
    let open = sidebar.classList.contains("active")

    btn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
        resizeMainContent();
        menuBtnChange();
    })

    function menuBtnChange() {
        if (sidebar.classList.contains("active")) {
            btn.classList.replace("bx-menu", "bx-menu-alt-right");
        } else {
            btn.classList.replace("bx-menu-alt-right", "bx-menu");
        }
    }

    function resizeMainContent(){
        if(open){
            mainContent.style.left = '80px';
            mainContent.style.width = 'calc(100% - 80px)'
            open = false;
        }
        else if (!open){
            mainContent.style.left = '250px';
            mainContent.style.width = 'calc(100% - 250px)'
            open = true;
        }
    }
});