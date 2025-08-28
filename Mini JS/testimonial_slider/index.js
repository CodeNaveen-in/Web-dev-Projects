const tst_text = document.getElementById("cl_text");
const tst_pic = document.getElementById("cl_pic");

const testimonials = [
  "⭐️ 'This app completely transformed how I manage my day. The AI reminders are scarily accurate!' – Priya S.",
  "🚀 'I’ve tried dozens of productivity tools, but this one actually sticks. It’s intuitive and powerful.' – Marcus T.",
  "🧠 'The smart suggestions feel like they read my mind. I’m getting more done with less stress.' – Aisha R.",
  "📱 'Cross-device syncing is seamless. I start tasks on my phone and finish them on my laptop without missing a beat.' – Kenji M.",
  "💡 'It’s not just a tool—it’s like having a personal assistant who never sleeps. Highly recommend!' – Lara D."
];

let pos = 0;
const users = [0, 1, 2, 3, 4];
const PATH = '../assets/image/user'

function test_change() {
    pos +=  1;
    console.log(pos);
    tst_text.innerText = testimonials[pos%5];
    tst_pic.src = PATH + users[pos%5] + '.jpg';
}

test_change();

setInterval(test_change, 9000);