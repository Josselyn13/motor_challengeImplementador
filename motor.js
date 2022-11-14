
let minM = [[100, 1000, 400, 400], [400, 600, 200, 300], [900, 1000, 200,500], [100, 1000, 1000, 900], [600, 1000, 600, 1000]];
let minF = [[800, 800, 200, 500], [800, 700, 900, 1000], [800, 100, 700, 600], [600, 600, 800, 400], [200, 700, 100, 700]];
let maxM = [[4900, 4700, 5000, 4400], [4700, 4400, 4700, 4700], [4600, 5000, 5000, 4300], [4600, 4400, 4200, 4900], [4500, 4900, 4600, 4300]];
let maxF = [[4000, 4700, 4600, 5000], [4200, 4200, 4900, 4900], [4100, 4500, 4600, 4700], [4200, 4300, 4700, 5000], [4500, 4400, 4000, 4300]];

function monthDiff(d1, d2){
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

function calculoMotor(tipoNomina, fechaPrimerEmpleo, genero) {

    var hoy = new Date(Date.now())
    hoyFecha = hoy.toLocaleDateString();

    arr1 = hoyFecha.split("/");
    arr2 = fechaPrimerEmpleo.split("/");
    d1 = new Date (arr1[2], arr1[1]-1, arr1[0]);
    d2 = new Date (arr2[2], arr2[1]-1, arr2[0]);

    MesesCuenta = monthDiff(d1,d2);

    if (genero == "f") {
        maxArr = maxF;
        minArr = minF;
        i = -1;
        j = -1;
        if (MesesCuenta<=24){
            i=0;
        } else if (MesesCuenta==25){
            i=1;
        } else if (MesesCuenta==26){
            i=2;
        } else if (MesesCuenta==27){
            i=3;
        } else {
            i=4
        }
        if (tipoNomina=="A"){
            j=0;
        } else if (tipoNomina=="B"){
            j=1;
        } else if (tipoNomina=="C"){
            j=2;
        } else if (tipoNomina=="D"){
            j=3;
        }
        montoMin=minArr[i][j];
        montoMax=maxArr[i][j];
    } else {
        maxArr = maxM;
        minArr = minM;
    }

    let p1 = montoMin + Math.sqrt(montoMax-montoMin);
    let p2 = montoMin + 0.0175 * (montoMax-montoMin);

    let lineaDeCreditoOptima = Math.max(p1,p2);

    let Resultado = {
        montoMinimo: montoMin,
        montoMaximo: montoMax,
        RecomendacionesLinea: lineaDeCreditoOptima
    };

    return Resultado
    
}

console.log(calculoMotor("A", "12/06/2022", "f"));



