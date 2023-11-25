document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.drum-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const soundId = button.id.replace('drum-', ''); 
            const audio = new Audio(`sounds/sound_${soundId}.wav`);
            audio.play();
        });
    });
});

// This is where your provided code will go
window.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase(); 
    const button = document.getElementById(`drum-${key}`);
    if (button) {
        button.click(); 
    }
});