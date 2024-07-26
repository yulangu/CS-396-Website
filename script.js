document.addEventListener("DOMContentLoaded", async function() {
    const fontAdjuster = await getElementByIdAsync('fontAdjuster');
    
    fontAdjuster.addEventListener('change', function() {
        document.body.style.fontFamily = this.value;
    });

    const images = document.querySelectorAll('main .item img');
    
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

async function getElementByIdAsync(id) {
    return new Promise((resolve, reject) => {
        const checkExist = setInterval(() => {
            const element = document.getElementById(id);
            if (element) {
                clearInterval(checkExist);
                resolve(element);
            }
        }, 100); // Check every 100 milliseconds

        setTimeout(() => {
            clearInterval(checkExist);
            reject(new Error(`Element with id "${id}" not found`));
        }, 5000); // Timeout after 5 seconds
    });
}
