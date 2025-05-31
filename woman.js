// script.js

// Función para abrir la carta de amor
function openLoveCard() {
    const loveCard = document.getElementById('loveCard');
    loveCard.classList.add('active');
    
    // Agregar efecto de vibración al botón (si es compatible)
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
    }
    
    // Reproducir sonido de corazón (opcional)
    playHeartSound();
    
    // Prevenir scroll del body cuando la carta esté abierta
    document.body.style.overflow = 'hidden';
}

// Función para cerrar la carta de amor
function closeLoveCard() {
    const loveCard = document.getElementById('loveCard');
    loveCard.classList.remove('active');
    
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
}

// Función para reproducir sonido de corazón (opcional)
function playHeartSound() {
    // Crear un contexto de audio web para un sonido suave
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.3);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
        console.log('Audio no disponible');
    }
}

// Cerrar carta con tecla Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLoveCard();
    }
});

// Cerrar carta al hacer clic fuera del contenido
document.getElementById('loveCard').addEventListener('click', function(event) {
    if (event.target === this) {
        closeLoveCard();
    }
});

// Animaciones adicionales cuando la página carga
document.addEventListener('DOMContentLoaded', function() {
    // Animar las estrellas de forma aleatoria
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.style.animationDelay = `${Math.random() * 2}s`;
    });
    
    // Animar las decoraciones emoji
    const decorations = document.querySelectorAll('.emoji-decoration');
    decorations.forEach((decoration, index) => {
        decoration.style.animationDelay = `${Math.random() * 3}s`;
    });
    
    // Crear efecto de partículas románticas de fondo
    createRomanticParticles();
});

// Función para crear partículas románticas de fondo
function createRomanticParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.style.position = 'fixed';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.pointerEvents = 'none';
    particleContainer.style.zIndex = '-1';
    document.body.appendChild(particleContainer);
    
    // Crear partículas
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createParticle(particleContainer);
        }, i * 300);
    }
    
    // Continuar creando partículas cada cierto tiempo
    setInterval(() => {
        createParticle(particleContainer);
    }, 2000);
}

function createParticle(container) {
    const particle = document.createElement('div');
    const emojis = ['💖', '💕', '💗', '💝', '💘', '✨', '⭐', '💫'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    
    particle.textContent = randomEmoji;
    particle.style.position = 'absolute';
    particle.style.fontSize = `${Math.random() * 15 + 10}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = '100%';
    particle.style.opacity = '0';
    particle.style.animation = `floatUp ${Math.random() * 5 + 8}s linear forwards`;
    
    container.appendChild(particle);
    
    // Remover partícula después de la animación
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 13000);
}

// Agregar animación CSS para las partículas flotantes
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            top: 100%;
            opacity: 0;
            transform: translateX(0) rotate(0deg);
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            top: -10%;
            opacity: 0;
            transform: translateX(${Math.random() * 200 - 100}px) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Función para hacer que el botón "TE AMO" tenga efecto de pulso
function addPulseEffect() {
    const button = document.querySelector('.teamo-button');
    button.addEventListener('mouseenter', function() {
        this.style.animation = 'gradientShift 3s ease infinite, pulse 1s ease infinite';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.animation = 'gradientShift 3s ease infinite';
    });
}

// Agregar estilo de pulso
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes pulse {
        0% { transform: translate(-50%, -50%) scale(1); }
        50% { transform: translate(-50%, -50%) scale(1.05); }
        100% { transform: translate(-50%, -50%) scale(1); }
    }
`;
document.head.appendChild(pulseStyle);

// Inicializar efectos adicionales
setTimeout(addPulseEffect, 1000);

// Función para cambiar el texto de las etiquetas de forma aleatoria
function animateLabels() {
    const labels = document.querySelectorAll('.label');
    const words = ['PERFECTA', 'PRECIOSA', 'LINDA', 'HERMOSA', 'BELLA', 'DIVINA'];
    
    setInterval(() => {
        labels.forEach(label => {
            if (Math.random() > 0.7) { // 30% de probabilidad de cambiar
                const currentText = label.textContent;
                const newText = words[Math.floor(Math.random() * words.length)];
                
                if (currentText !== newText) {
                    label.style.opacity = '0';
                    setTimeout(() => {
                        label.textContent = newText;
                        label.style.opacity = '1';
                    }, 200);
                }
            }
        });
    }, 3000);
}

// Inicializar animación de etiquetas
setTimeout(animateLabels, 2000);