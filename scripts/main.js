let btn = document.querySelector('#btn')
let sidebar = document.querySelector('.sidebar-template')

btn.onclick = function () {
    sidebar.classList.toggle('active')
};



// document.addEventListener('DOMContentLoaded', function () {
//     // Select the custom element
//     let sidebarElement = document.querySelector('sidebar-template');
    
//     // Access the shadow root of the custom element
//     let shadow = sidebarElement.shadowRoot;

//     // Select the toggle button within the shadow root
//     let btn = shadow.querySelector('#btn');
    
//     // Select the sidebar itself
//     let sidebar = shadow.querySelector('.sidebar');

//     // Toggle the 'active' class on button click
//     btn.onclick = function () {
//         sidebar.classList.toggle('active');
//     };
// });

// let sidebarElement = document.querySelector('sidebar-template');
// let btn = sidebarElement.querySelector('#btn');
// let sidebar = sidebarElement.querySelector('.sidebar');

// btn.onclick = function () {
//     sidebar.classList.toggle('active');
// };



// let btn = document.querySelector('#btn');
// let sidebar = document.querySelector('.sidebar');

// btn.onclick = function () {
//     sidebar.classList.toggle('active');
// };
