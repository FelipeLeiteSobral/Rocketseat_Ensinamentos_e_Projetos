/*
    ### Transformar notas escolares

    Crie um algoritmo que transforme as notas do sistema numérico para sistema de noras em caracteres tipo A B C

    * De 90 para cima   - A
    * entre 80 e 89     - B
    * entre 70 e 79     - C
    * entre 60 e 69     - D
    * abaixo de 60      - F
    
*/
let nota = 80
function nota_letra(nota){
        if (nota >= 90) {
            nota = "A";
            return nota;
        }
        else if (nota >=80 && nota < 90) {
            nota = "B";
            return nota;
        }
        else if (nota >=70 && nota < 80) {
            nota = "C";
            return nota;
        }
        else if (nota >= 60 && nota <70) {
            nota = "D";
            return nota;
        }
        else {
            nota = "F";
            return nota;
        }
}
console.log(nota_letra(nota))