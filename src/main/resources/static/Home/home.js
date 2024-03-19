document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    // Add event listener to toggle sidebar when cursor enters/leaves the sidebar area
    document.addEventListener('mousemove', function (event) {
        if (event.clientX <= 50) { // Adjust the threshold as needed
            sidebar.style.left = '0';
            content.classList.add('open');
        } else {
            sidebar.style.left = '-200px';
            content.classList.remove('open');
        }
    });
});