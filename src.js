define([], function () {
  return {
    getDiffDias: function (dataInicial, dataFinal) {
      if (dataFinal < dataInicial) {
        let dataAuxiliar = dataInicial;
        dataInicial = dataFinal;
        dataFinal = dataAuxiliar;
      }

      let diaInicio = this.pegaDia(dataInicial);
      let diaFinal = this.pegaDia(dataFinal);
      let mesInicio = this.pegaMes(dataInicial);
      let mesFinal = this.pegaMes(dataFinal);
      let anoInicial = this.pegaAno(dataInicial);
      let anoFinal = this.pegaAno(dataFinal);

      let dias =
        this.diferencaDiasEntreAnos(anoInicial, anoFinal) +
        (this.diasEntreMes(mesFinal, anoFinal) -
          this.diasEntreMes(mesInicio, anoInicial)) +
        (diaFinal - diaInicio);

      return dias;
    },
    pegaDia: function (date) {
      let dia = date.split("-");
      return Number(dia[2]);
    },
    pegaMes: function (date) {
      let mes = date.split("-");
      return Number(mes[1]);
    },
    pegaAno: function (date) {
      let ano = date.split("-");
      return Number(ano[0]);
    },
    diferencaDiasEntreAnos: function (anoInicial, anoFinal) {
      let dias = 0;
      let diasDoAno = 365;
      for (let ano = anoInicial; ano < anoFinal; ano++) {
        diasDoAno = 365;
        if (this.anoBissexto(ano)) {
          diasDoAno = 366;
        }
        dias += diasDoAno;
      }

      return dias;
    },
    anoBissexto: function (ano) {
      if (ano % 400 === 0 || (ano % 100 !== 0 && ano % 4 === 0)) {
        return true;
      }
      return false;
    },

    diasEntreMes: function (mes, ano) {
      diasMes = [0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      if (this.anoBissexto(ano)) {
        diasMes = [0, 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
      }
      return diasMes[mes];
    },
  };
});
