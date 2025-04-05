// Add static effect to the TV screen
document.addEventListener('DOMContentLoaded', function() {
    const screen = document.querySelector('.screen');
    if (screen) {
        setInterval(() => {
            const noise = generateNoise();
            screen.style.backgroundImage = `url(${noise})`;
        }, 50);
    }
});

// Generate TV static noise effect
function generateNoise() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 70;
    canvas.height = 70;

    // Create ImageData object
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;

    // Generate random noise
    for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;     // red
        data[i + 1] = value; // green
        data[i + 2] = value; // blue
        data[i + 3] = 255;   // alpha
    }

    // Put the image data back on the canvas
    ctx.putImageData(imageData, 0, 0);

    // Return the noise pattern as a data URL
    return canvas.toDataURL();
}

// Add hover effect to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.b1, .b2');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
});

// Add glitch effect on text
document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('.notfound_text');
    if (text) {
        setInterval(() => {
            if (Math.random() > 0.95) {
                text.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
                setTimeout(() => {
                    text.style.transform = 'translate(0, 0)';
                }, 100);
            }
        }, 50);
    }
}); 