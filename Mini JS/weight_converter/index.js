const kilog = document.getElementById("kilog");
const pound = document.getElementById("pound");
const ounce = document.getElementById("ounce");
const gram = document.getElementById("gram");
const resu = document.getElementById("result");

function weight_change(event) {
    const value = parseFloat(event.target.value);
    if (isNaN(value)) return;

    switch (event.target.id) {
        case "kilog":
            gram.value = (value * 1000).toFixed(2);
            pound.value = (value * 2.2046).toFixed(2);
            ounce.value = (value * 35.274).toFixed(2);
            break;
        case "gram":
            kilog.value = (value / 1000).toFixed(2);
            pound.value = (value / 453.592).toFixed(2);
            ounce.value = (value / 28.3495).toFixed(2);
            break;
        case "pound":
            kilog.value = (value / 2.2046).toFixed(2);
            gram.value = (kilog.value * 1000).toFixed(2);
            ounce.value = (value * 16).toFixed(2);
            break;
        case "ounce":
            pound.value = (value / 16).toFixed(2);
            kilog.value = (pound.value / 2.2046).toFixed(2);
            gram.value = (kilog.value * 1000).toFixed(2);
            break;
    }

    resu.innerHTML = `The value in kg: ${kilog.value}<br>
                    The value in ounce: ${ounce.value}<br>
                    The value in grams: ${gram.value}<br>
                    The value in pound: ${pound.value}`;

}