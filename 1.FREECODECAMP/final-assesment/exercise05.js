function checkCashRegister(price, cash, cid) {
    let change = cash* 100 - price *100; //variable que resta el dinero recibido menos el precio
    let cidTotal = 0;

    //saber lo que hay de cash en la caja así que iteramos este array cid con for

    for (let elem of cid){
      //sumamos el total de caja con el elemento
        cidTotal += elem[1] *100; //elem[1] posición 1 de array cid que es el dinero que sumamos al total y eso por 100 para sacar el precio sin centavos
        console.log(cidTotal);
    }

    if(change > cidTotal){ //si el cambio es mayor que el total en caja es que tenemos fondos insuficientes
            return {status: "INSUFFICIENT_FUNDS", change: []};

    } else if(change === cidTotal){
        return {status: "CLOSED", change: cid};

    }else{
        let answer = []; //otra variable como holder para empujar cualquier cosa de holder que no sea cero
        cid = cid.reverse(); //tiene que ser de más a menos ordenados como nos pide el ejercicio
        //console.log(cid);

        let moneyUnits = { //en este objeto,usamos numeros enteros sin decimales y expresada en centavos. Si necesitamos acceder usamos bracket notatio
        "ONE HUNDRED": 10000, "TWENTY": 2000, "TEN": 1000, "FIVE": 500, "ONE": 100, "QUARTER": 25, "DIME": 10, "NICKEL": 5, "PENNY": 1
        };

        //ahora volvemos a querer saber cuanto dinero tenemos de cada denomincación así que otro FOR
        for (let elem of cid){
            //después del while creamos array vacio para guardar los dif tipos de dinero sacados de caja
            let purse = [elem[0], 0];      
            //console.log(holder); //imprime billete a ceros todos y lo llevamos a variable
            //sumamos el total de caja con el elemento      
            //console.log(elem);
            //multiplicar elem posición 1 del array donde está el dinero por 100
            elem[1] = elem[1]*100
            //ahora ponemos la condición while de que cambio sea mayor o igual y hacemos un objeto que contenga las unidades de dinero

            while(change >= moneyUnits[elem[0]] && elem[1] > 0){
                change -= moneyUnits[elem[0]]; //que es 25
                //decrementamos en 25
                elem[1] -= moneyUnits[elem[0]];
                purse[1] += moneyUnits[elem[0]]/100 //posición 1 del array holder y le sumamos y todo esto dividido por 100  
            }

            if(purse[1] > 0){//deshacernos de todos los ceros
                answer.push(purse); //al array vacío le metemos al final el holder
                //console.log(answer);
            }
        }
        if(change >0){
            return {status: "INSUFFICIENT_FUNDS", change: []};
        }
        return {status: "OPEN", change: answer};
    }
}  

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));