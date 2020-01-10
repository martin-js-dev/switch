var firstName= 'Martin'
var job = 'developer';
switch (job){
    case 'policeman':
    case 'soldier':
        console.log(firstName + ' keeps us safe');
        break;
    case 'fireman':
        console.log (firstName + ' saves lives');
        break;
    case 'developer':
    case 'programmer':
        console.log (firstName + ' creates beautiful websites');
        break;
    default:
        console.log(firstName + ' does something else or is unemployed');
}
