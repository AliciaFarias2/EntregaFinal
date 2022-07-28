let diaDeLaSemana = prompt("Que dia es hoy? (escribir en minusculas)");

switch (diaDeLaSemana) {

    case "lunes":
        alert("Hoy es lunes. Tienes un 15% de desc. con cualquier medio de pago");
        break;
    case "martes":
        alert("Hoy es martes y tenemos una promo de 2 x 1");
        break;
    case "miercoles":
        alert("Hoy es miercoles, te invitamos a participar de un sorteo, ingresando tus datos en la seccion de contactos.");
        break;
    case "jueves":
        alert("Hoy es jueves. Tenemos un curso a las 19 hs.");
        break;
    case "viernes":
        alert("Hoy es viernes. Aprovecha el descuento con cuenta Dni");
        break;
    case "sabado":
        alert("Hoy es sabado.  Aprovecha el descuento con cuenta Dni");
        break;
    case "domingo":
        alert("Hoy es domingo. Esperamos que estes pasando un lindo fin de semana");
        break;

    default:
        alert("Error, recuerda no ingresar mayusculas");
}