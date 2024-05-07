function abrirVentanaEmergente() {
    var url = 'https://apps-jobs.workbeat.com/jobs/public/tenantData/proyectoscimarron/Bolsa/bdt1123/VacanteRegistro.html?idTenant=1981&idBolsa=1123';

    var width = 800;
    var height = 600;
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;

    var opciones = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top + ',resizable=yes,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no';
    window.open(url, '_blank', opciones);
}

function abrirVentanaEmergenteVacantes() {
    var url = 'https://apps-jobs.workbeat.com/jobs/public/tenantData/proyectoscimarron/Bolsa/bdt1123/VacantesFullList.html?idBolsa=1123&idTipo=0';

    var width = 800;
    var height = 600;
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;

    var opciones = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top + ',resizable=yes,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no';

    window.open(url, '_blank', opciones);
}