const buttonset = document.getElementById("button-container");
const img = document.getElementById("img");
const desc = document.getElementById("text");

const testimonials = [
  { id: 0, name: "Priya S.", testimonial: "⭐️ 'This app completely transformed how I manage my day. The AI reminders are scarily accurate!'" },
  { id: 1, name: "Marcus T.", testimonial: "🚀 'I’ve tried dozens of productivity tools, but this one actually sticks. It’s intuitive and powerful.'" },
  { id: 2, name: "Aisha R.", testimonial: "🧠 'The smart suggestions feel like they read my mind. I’m getting more done with less stress.'" },
  { id: 3, name: "Kenji M.", testimonial: "📱 'Cross-device syncing is seamless. I start tasks on my phone and finish them on my laptop without missing a beat.'" },
  { id: 4, name: "Lara D.", testimonial: "💡 'It’s not just a tool—it’s like having a personal assistant who never sleeps. Highly recommend!'" }
];

function content_change(id) {
  img.innerHTML = ""; // Clear previous image
  desc.innerHTML = ""; // Clear previous text

  let image = document.createElement("img");
  image.src = `../assets/image/user${id}.jpg`; // Add extension if needed
  image.width = 300;
  image.height = 300;
  img.appendChild(image);

  let text = document.createElement("p");
  text.innerHTML = `${testimonials[id].testimonial}<br><br>by ${testimonials[id].name}`;
  desc.appendChild(text);
}

buttonset.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    content_change(event.target.id);
  }
});