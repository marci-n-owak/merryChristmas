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
            "value": "Kwiatuszki dla mojego kwiatuszka 🌹"
        },
        "day-2": {
            "value": "Bon na wspólny, świąteczny film! 🎅"
        },
        "day-3": {
            "value": "Bon na basen! 🏊‍♀️"
        },
        "day-4": {
            "value": "Bon na masaż! 💆‍♀️"
        },
        "day-5": {
            "value": "Bon naaa... 😏"
        },
        "day-6": {
            "value": "Bon na Maczkaaa! 🍔"
        },
        "day-7": {
            "value": "Dzień na samorozwój! Przeczytaj artykół naukowy nie koniecznie o żywieniu 🧠"
        },
        "day-8": {
            "value": "Trochę techniki! Stwórz świąteczną playlistę na Spotify i podziel się nią ze mną 🎵"
        },
        "day-9": {
            "value": "Wyjdź na spacer i szukaj oznak zimy, zrób zdjęcie i prześlij do mnie 📷"
        },
        "day-10": {
            "value": "Wróć do niedokończonej książki, albo zacznij nową 📖"
        },
        "day-11": {
            "value": "Zaplanuj nam sylwestra 🎇"
        },
        "day-12": {
            "value": "Nagraj jak robisz Bottle Flip Challenge. Wygrywasz dopiero jak uda ci się postawić butelkę w pierwszych 3 ruchach, ale twoja ilość prób nagrań jest nieograniczona 🫶"
        },
        "day-13": {
            "value": "Pobudźmy twój mózg! Napisz odręcznie opowiadanie na długość kartki A5 (ciekawe jak rozwiniesz swoją kreatywność) 🖋️"
        },
        "day-14": {
            "value": "Zrób sobie i Majlikowi świąteczną sesję 📸"
        },
        "day-15": {
            "value": "Zrób coś dla siebie! Porozciągaj się 😸"
        },
        "day-16": {
            "value": "Nagraj świątecznego tik-toka (na instagramie) i prześlij do mnie 🎥"
        },
        "day-17": {
            "value": "Bon na sushi! 🍣"
        },
        "day-18": {
            "value": "Idź na spacer i znajdź udekorowany świątecznie dom 🎄"
        },
        "day-19": {
            "value": "Stwórz świąteczny rysunek na iPadzie 👩‍🎨"
        },
        "day-20": {
            "value": "Naucz się mówić „Wesołych Świąt” w kilku językach i nagraj się 👅"
        },
        "day-21": {
            "value": "test"
        },
        "day-22": {
            "value": "Dzień SPA! Wykorzystaj maseczki i odpręż się 🧖‍♀️"
        },
        "day-23": {
            "value": "Ulep bałwana! ☃️"
        },
        "day-24": {
            "value": "Dzisiaj zapraszam cię pod choinkę!"
        }
    }
}
