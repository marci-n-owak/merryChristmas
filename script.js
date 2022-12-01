const date = new Date();
let day = date.getDate();
//let day = 10
let last_day = 24;
console.log("today is ", day)

const load = () => {
    const collection = document.getElementsByClassName("day");
    for (let i = 0; i < collection.length; i++) {
        let randomBackgroundColor = generateRandomColor();
        let randomColor = invertColor(randomBackgroundColor)
        collection[i].style.backgroundColor = "#" + randomBackgroundColor;
        collection[i].style.color = randomColor;
    }
    for (let i = day; i < last_day; i++) {
        collection[i].classList.add('noClick')
    }
}

const generateRandomColor = () => {
    let color = Math.floor(Math.random()*16777215).toString(16);
    if(color.length !== 6){
        return generateRandomColor();
    }
    else{
        return color;
    }
}

const open_card = (class_name) => {
    let class_names = class_name.split(' ');
    let date_day = class_names[1];
    alert(data.dates[date_day].value)
}

const invertColor = (hex) => {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        console.log("err", hex)
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}

let data = 
{
    "dates": {
        "day-1": {
            "value": "test"
        },
        "day-2": {
            "value": "test2"
        },
        "day-3": {
            "value": "test"
        },
        "day-4": {
            "value": "test2"
        },
        "day-5": {
            "value": "test"
        },
        "day-6": {
            "value": "test2"
        },
        "day-7": {
            "value": "test"
        },
        "day-8": {
            "value": "test2"
        },
        "day-9": {
            "value": "test"
        },
        "day-10": {
            "value": "test2"
        },
        "day-11": {
            "value": "test"
        },
        "day-12": {
            "value": "test2"
        },
        "day-13": {
            "value": "test"
        },
        "day-14": {
            "value": "test2"
        },
        "day-15": {
            "value": "test"
        },
        "day-16": {
            "value": "test2"
        },
        "day-17": {
            "value": "test"
        },
        "day-18": {
            "value": "test2"
        },
        "day-19": {
            "value": "test"
        },
        "day-20": {
            "value": "test2"
        },
        "day-21": {
            "value": "test"
        },
        "day-22": {
            "value": "test2"
        },
        "day-23": {
            "value": "test"
        },
        "day-24": {
            "value": "test2"
        }
    }
}

console.log(data)
