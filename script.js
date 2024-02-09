// function toggleSidebar() {
//     var sidebar = document.getElementById('sidebar');
//     sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';

//     var nav = document.querySelector('nav');
//     nav.classList.toggle('show');
// }
// function toggleSidebar() {
//     var sidebar = document.getElementById("nav");
//     if (sidebar.style.display === "block") {
//       sidebar.style.display = "none";
//     } else {
//       sidebar.style.display = "block";
//     }
//   }
  
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-250px';
    }
}
