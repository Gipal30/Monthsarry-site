document.addEventListener("DOMContentLoaded", function () {
    let img = document.getElementById('locationImg');
    img.style.display = 'none'; // Ensure the image is hidden on page load

    document.getElementById('yesBtn').addEventListener('click', function () {
        img.style.display = 'block'; // Show the image when "Yes" is clicked
    });

    let noBtn = document.getElementById('noBtn');

    noBtn.addEventListener('mouseover', function () {
        // Get viewport dimensions
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;
        
        // Get button dimensions
        let btnWidth = noBtn.offsetWidth;
        let btnHeight = noBtn.offsetHeight;

        // Get the container dimensions
        let container = document.querySelector('.container');
        let containerRect = container.getBoundingClientRect();

        // Generate random position ensuring it stays within the container
        let x = Math.random() * (containerRect.width - btnWidth);
        let y = Math.random() * (containerRect.height - btnHeight);

        // Ensure it doesn't go offscreen
        x = Math.max(containerRect.left, Math.min(x + containerRect.left, containerRect.right - btnWidth));
        y = Math.max(containerRect.top, Math.min(y + containerRect.top, containerRect.bottom - btnHeight));

        // Apply new position
        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });
});