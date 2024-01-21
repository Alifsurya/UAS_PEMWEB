document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.nav-btn').addEventListener('click', function() {
        var compactNav = document.querySelector('#compact-nav');
        if (compactNav.style.display === 'flex') {
        compactNav.style.display = 'none';
        } else {
        compactNav.style.display = 'flex';
        }
    });
});
  