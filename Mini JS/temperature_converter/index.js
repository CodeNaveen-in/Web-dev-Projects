// const cl = document.getElementById("cl");
// const fn = document.getElementById("fn");
// const kn = document.getElementById("kn");

// function temp_change() {
//     const cel = cl.nodeValue;
//     const frn = fn.nodeValue;
//     const kln = kn.nodeValue;

//     let fah = (cels * 9/5) + 32
//     let cels = kel - 273.15 || (fah - 32) * 5/9;
//     let kel = cels + 273.15

//     console.log(cel,frn,kln)
// }

// input.addListener ("keydown", temp_change);

const cl = document.getElementById("cl");
const fn = document.getElementById("fn");
const kn = document.getElementById("kn");

function temp_change(event) {
    const value = parseFloat(event.target.value);

    switch (event.target.name) {
        case "cl":
            fn.value = (value * 9/5 + 32).toFixed(2);
            kn.value = (value + 273.15).toFixed(2);
            break;
        case "fn":
            const c = (value - 32) * 5/9;
            cl.value = c.toFixed(2);
            kn.value = (c + 273.15).toFixed(2);
            break;
        case "kn":
            const c2 = value - 273.15;
            cl.value = c2.toFixed(2);
            fn.value = (c2 * 9/5 + 32).toFixed(2);
            break;
        default:
            break;
    }
}
