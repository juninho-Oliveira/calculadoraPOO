

class Calc {
    constructor() {

    }

    somar(n1, n2) {
        try {
            if (isNaN(n1) || isNaN(n2)) {
                throw new Error("Apenas números");
            }
            return n1 + n2;
        } catch (error) {
            console.error(error.message);
        }
    }

    subtrair(n1, n2) {
        try {
            if (isNaN(n1) || isNaN(n2)) {
                throw new Error("Apenas números");
            }
            return n1 - n2;
        } catch (error) {
            console.error(error.message);
        }
    }

    multiplicar(n1, n2) {
        try {
            if (isNaN(n1) || isNaN(n2)) {
                throw new Error("Apenas números");
            }
            return n1 * n2;
        } catch (error) {
            console.error(error.message);
        }
    }

    dividir(n1, n2) {
        try {
            if (isNaN(n1) || isNaN(n2)) {
                throw new Error("Apenas números");
            }
            if (n2 === 0) {
                throw new Error("Divisão por zero não é permitida");
            }
            return n1 / n2;

        } catch (error) {
            console.error(error.message);
        }
    }


    exponenciacao(n1, n2) {
        try {
            if (isNaN(n1) || isNaN(n2)) {
                throw new Error("Apenas números");
            }
            return n1 ** n2;
        } catch (error) {
            console.error(error.message);
        }
    }


    fatoracao(numero) {
        try {
            if (isNaN(numero)) {
                throw new Error("Apenas números");
            }

            const fatores = [];

            for (let i = 2; i <= numero; i++) {
                while (numero % i === 0) {
                    fatores.push(i);
                    numero /= i;
                }
            }

            return fatores;
        } catch (error) {
            console.error(error.message);
        }

    }

    porcentagem(n1, n2) {
        try {
            if (isNaN(n1) || isNaN(n2)) {
                throw new Error("Apenas números");
            }
            return (n1 / n2) * 100;
        } catch (error) {
            console.error(error.message);
        }
    }

    RaizQuadrada(n1) {
        try {
            if (isNaN(n1)) {
                throw new Error("Apenas números");
            }
            return Math.sqrt(n1);
        } catch (error) {
            console.error(error.message);
        }
    }
}



let calc = new Calc();



let operador = 1//Number(result.operador);
let valor1 = 10//Number(result.numero1);
let valor2 = 10//Number(result.numero2);

switch (operador) {
    case 1:
        document.getElementById("resultado").innerHTML = valor1 + valor2
        break;

    case 2:
        console.log(`${valor1} - ${valor2} = ${calc.subtrair(valor1, valor2)}`)
        break;

    case 3:
        console.log(`${valor1} * ${valor2} = ${calc.multiplicar(valor1, valor2)}`)
        break;

    case 4:
        console.log(`${valor1} / ${valor2} = ${calc.dividir(valor1, valor2)}`)
        break;

    case 5:
        console.log(`${valor1} ** ${valor2} = ${calc.exponenciacao(valor1, valor2)}`)
        break;

    case 6:
        console.log(`${valor1} = ${calc.RaizQuadrada(valor1)}`)
        break;

    case 7:
        console.log(`${valor1} é ${(valor1 / valor2) * 100}% de ${valor2}`)
        break;

    case 8:
        console.log(`${valor1} % ${valor2} = ${calc.porcentagem(valor1, valor2)}`)
        break;

    case 9:
        console.log(`${valor1} ! = ${calc.fatoracao(valor1)}`);
        break;
}


