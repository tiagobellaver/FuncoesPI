// Normalização RGB
function normRgb() {

    let valueR = parseInt(document.querySelector('#valueR1').value);
    let valueG = parseInt(document.querySelector('#valueG1').value);
    let valueB = parseInt(document.querySelector('#valueB1').value);

    let resultadoR = valueR / (valueR + valueG + valueB);
    let resultadoG = valueG / (valueR + valueG + valueB);
    let resultadoB = valueB / (valueR + valueG + valueB);

    let resultado = resultadoR + resultadoG + resultadoB;

    alert("O resultado da normalização é: " + Math.round(resultado));

}

//RGB para HSV
function rgbHsv() {

    let valueR = parseInt(document.querySelector('#valueR2').value);
    let valueG = parseInt(document.querySelector('#valueG2').value);
    let valueB = parseInt(document.querySelector('#valueB2').value);

    let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn;
    rabs = valueR / 255;
    gabs = valueG / 255;
    babs = valueB / 255;

    v = Math.max(rabs, gabs, babs),
        diff = v - Math.min(rabs, gabs, babs);
    diffc = c => (v - c) / 6 / diff + 1 / 2;
    percentRoundFn = num => Math.round(num * 100) / 100;

    if (diff == 0) {

        h = s = 0;

    } else {

        s = diff / v;
        rr = diffc(rabs);
        gg = diffc(gabs);
        bb = diffc(babs);

        if (rabs === v) {

            h = bb - gg;

        } else if (gabs === v) {

            h = (1 / 3) + rr - bb;

        } else if (babs === v) {

            h = (2 / 3) + gg - rr;

        }
        if (h < 0) {

            h += 1;

        } else if (h > 1) {

            h -= 1;
        }

    }

    alert("O resultado da conversão de RGB para HSV é: H: " + Math.round(h * 360) + "° S: " + Math.round(s * 100) + "% V: " + Math.round(v * 100) + "%");

}

// HSV para RGB
function hsvRgb() {

    var h = parseInt(document.querySelector('#valueH').value);
    var s = parseInt(document.querySelector('#valueS').value);
    var v = parseInt(document.querySelector('#valueV').value);

    var r, g, b;
    var i;
    var f, p, q, t;

    // Make sure our arguments stay in-range
    h = Math.max(0, Math.min(360, h));
    s = Math.max(0, Math.min(100, s));
    v = Math.max(0, Math.min(100, v));

    // We accept saturation and value arguments from 0 to 100 because that's
    // how Photoshop represents those values. Internally, however, the
    // saturation and value are calculated from a range of 0 to 1. We make
    // That conversion here.
    s /= 100;
    v /= 100;

    if (s == 0) {
        // Achromatic (grey)
        r = g = b = v;
        return [
            Math.round(r * 255),
            Math.round(g * 255),
            Math.round(b * 255)
        ];
    }

    h /= 60; // sector 0 to 5
    i = Math.floor(h);
    f = h - i; // factorial part of h
    p = v * (1 - s);
    q = v * (1 - s * f);
    t = v * (1 - s * (1 - f));

    switch (i) {
        case 0:
            r = v;
            g = t;
            b = p;
            break;

        case 1:
            r = q;
            g = v;
            b = p;
            break;

        case 2:
            r = p;
            g = v;
            b = t;
            break;

        case 3:
            r = p;
            g = q;
            b = v;
            break;

        case 4:
            r = t;
            g = p;
            b = v;
            break;

        default: // case 5:
            r = v;
            g = p;
            b = q;
    }
    
    alert("O resultado da conversão HSV para RGB é: R: " + Math.round(r * 255) + " G: " + Math.round(g * 255) + " B: " + Math.round(b * 255));

}

//RGB para CMYK
function rgbCmyk() {

    let valueR = parseInt(document.querySelector('#valueR3').value);
    let valueG = parseInt(document.querySelector('#valueG3').value);
    let valueB = parseInt(document.querySelector('#valueB3').value);

    let r = valueR / 255;
    let g = valueG / 255;
    let b = valueB / 255;

    let k = 1 - Math.max(r, g, b);

    let c = (1 - r - k) / (1 - k);

    let m = (1 - g - k) / (1 - k);

    let y = (1 - b - k) / (1 - k);

    console.log(k);

    alert("O resultado da conversão RGB para CMYK é: C: " + Math.round(c) + " M: " + Math.round(m) + " Y: " + Math.round(y) + " k: " + Math.round(k));

}

//CMYK para RGB
function cmykRgb() {

    let valueC = parseInt(document.querySelector('#valueC').value);
    let valueM = parseInt(document.querySelector('#valueM').value);
    let valueY = parseInt(document.querySelector('#valueY').value);
    let valueK = parseInt(document.querySelector('#valueK').value);

    let r = 255 * (1 - valueC) * (1 - valueK);

    let g = 255 * (1 - valueM) * (1 - valueK);

    let b = 255 * (1 - valueY) * (1 - valueK);


    alert("O resultado da conversão CMYK para RGB é: R: " + Math.round(r) + " G: " + Math.round(g) + " B: " + Math.round(b));

}

//RGB para Escala de Cinza
function rgbGrey() {

    let valueR = parseInt(document.querySelector('#valueR').value);
    let valueG = parseInt(document.querySelector('#valueG').value);
    let valueB = parseInt(document.querySelector('#valueB').value);

    let resultado = (valueR + valueG + valueB) / 3;

    alert("O resultado da conversão é: " + Math.round(resultado));
}
