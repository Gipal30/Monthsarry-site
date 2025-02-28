document.addEventListener("DOMContentLoaded", function () {
    let locationContainer = document.getElementById('locationContainer');

    // Ensure the location image and text are hidden on page load
    locationContainer.style.display = 'none';

    document.getElementById('yesBtn').addEventListener('click', function () {
        locationContainer.style.display = 'flex'; // Show location

        // Start the emoji raindrop effect
        createEmojiRain();
    });

    let noBtn = document.getElementById('noBtn');

    noBtn.addEventListener('mouseover', function () {
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;
        let btnWidth = noBtn.offsetWidth;
        let btnHeight = noBtn.offsetHeight;
        let container = document.querySelector('.container');
        let containerRect = container.getBoundingClientRect();

        let x = Math.random() * (containerRect.width - btnWidth);
        let y = Math.random() * (containerRect.height - btnHeight);

        x = Math.max(containerRect.left, Math.min(x + containerRect.left, containerRect.right - btnWidth));
        y = Math.max(containerRect.top, Math.min(y + containerRect.top, containerRect.bottom - btnHeight));

        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    function createEmojiRain() {
        for (let i = 0; i < 20; i++) { // Generate 20 emojis
            let emoji = document.createElement("div");
            emoji.classList.add("emoji");
            emoji.innerHTML = Math.random() > 0.5 ? "😊" : "💖"; // Randomly choose an emoji

            // Randomize starting position
            emoji.style.left = Math.random() * 100 + "vw"; 
            emoji.style.animationDuration = Math.random() * 2 + 3 + "s"; // Vary falling speed

            document.body.appendChild(emoji);

            // Remove emoji after animation ends
            setTimeout(() => {
                emoji.remove();
            }, 5000);
        }
    }
});
