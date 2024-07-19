document.addEventListener("DOMContentLoaded", function() {
    const fontAdjuster = document.getElementById('fontAdjuster');
    
    fontAdjuster.addEventListener('change', function() {
        document.body.style.fontFamily = this.value;
    });
});
