export default function render(container) {

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    const wrapper = document.createElement("div");
    wrapper.classList.add("drum-wrapper", "card", "section");
    wrapper.innerHTML = `<h2> Drum Kit</h2>`;

    /* -------- STYLES -------- */

    const style = document.createElement("style");
    style.textContent = `
        .drum-wrapper {
            text-align: center;
            margin: 40px auto;
            font-family: Arial;
        }

        .drum-buttons {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
        }

        .drum-buttons button {
            padding: 20px;
            font-size: 1.2rem;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            background: #333;
            color: white;
            transition: transform 0.1s ease, background 0.2s;
        }

        .drum-buttons button:active {
            transform: scale(0.9);
            background: orange;
        }
    `;
    document.head.appendChild(style);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("drum-buttons");

    /* -------- SOUND FUNCTIONS -------- */

    function playKick() {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.frequency.setValueAtTime(150, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);

        gain.gain.setValueAtTime(1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + 0.5);
    }

    function playSnare() {
        const noiseBuffer = audioCtx.createBuffer(1, audioCtx.sampleRate, audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);

        for (let i = 0; i < audioCtx.sampleRate; i++) {
            output[i] = Math.random() * 2 - 1;
        }

        const noise = audioCtx.createBufferSource();
        noise.buffer = noiseBuffer;

        const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);

        noise.connect(gain);
        gain.connect(audioCtx.destination);

        noise.start();
        noise.stop(audioCtx.currentTime + 0.2);
    }

    function playHiHat() {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = "square";
        osc.frequency.value = 800;

        gain.gain.setValueAtTime(0.5, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + 0.1);
    }

    /* -------- BUTTONS -------- */

    const drums = [
        { name: "Kick", sound: playKick },
        { name: "Snare", sound: playSnare },
        { name: "Hi-Hat", sound: playHiHat }
    ];

    drums.forEach(drum => {
        const button = document.createElement("button");
        button.textContent = drum.name;

        button.addEventListener("click", drum.sound);

        buttonContainer.appendChild(button);
    });

    wrapper.appendChild(buttonContainer);
    container.appendChild(wrapper);
}
