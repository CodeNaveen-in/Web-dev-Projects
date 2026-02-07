export default function render(container) {

    const testimonials = [
        {
            id: "1",
            name: "Albert",
            testimonial: "Absolutely loved the product! The quality exceeded my expectations and the customer service was top-notch.",
            pic: "https://api.dicebear.com/9.x/avataaars/svg?seed=Albert"
        },
        {
            id: "2",
            name: "Priya Sharma",
            testimonial: "This has been a game-changer for me. Easy to use, reliable, and worth every penny!",
            pic: "https://api.dicebear.com/9.x/avataaars/svg?seed=Priya"
        },
        {
            id: "3",
            name: "David Lee",
            testimonial: "I was skeptical at first, but after using it for a month, I can confidently say it delivers exactly what it promises.",
            pic: "https://api.dicebear.com/9.x/avataaars/svg?seed=David"
        },
        {
            id: "4",
            name: "Sofia Martinez",
            testimonial: "The attention to detail is incredible. I’ve recommended it to all my friends and family.",
            pic: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sofia"
        },
        {
            id: "5",
            name: "Rahul Verma",
            testimonial: "Fast delivery, excellent build quality, and amazing results. I’ll definitely be a returning customer.",
            pic: "https://api.dicebear.com/9.x/avataaars/svg?seed=Rahul"
        }
    ];

    let n = 0;

    const div = document.createElement("div");

    div.innerHTML = `
        <h2>Testimonial Slider</h2>
        <p>You will see testimonials sliding here</p>

        <div class="column">
            <p id="testimonialText"></p>
            <h4 id="testimonialName"></h4>
            <img id="testimonialPic" width=100px height=100px/>
        </div>
    `;

    div.classList.add("card", "section");

    const text = div.querySelector("#testimonialText");
    const name = div.querySelector("#testimonialName");
    const pic = div.querySelector("#testimonialPic");

    function updateTestimonial() {
        const data = testimonials[n];

        text.textContent = `"${data.testimonial}"`;
        name.textContent = data.name;
        pic.src = data.pic;
        pic.alt = `ui-avatar-${data.name}`;
    }

    updateTestimonial();

    setInterval(() => {
        n = (n + 1) % testimonials.length;
        updateTestimonial();
    }, 4000);

    container.appendChild(div);
}
