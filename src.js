define([], function () {
  return {
    calculaDiferencaEntreDias: function (dataInicial, dataFinal) {
      let diaInicio = this.pegaDia(dataInicial);
      let diaFinal = this.pegaDia(dataFinal);
      let mesInicio = this.pegaMes(dataInicial);
      let mesFinal = this.pegaMes(dataFinal);
      let anoInicial = this.pegaAno(dataInicial);
      let anoFinal = this.pegaAno(dataFinal);

      if (anoInicial == anoFinal) {
        if (mesInicio == mesFinal) {
          dias = diaInicio - diaFinal;
          console.log(dias);
        }
      }
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
      dias = 0;
      diasDoAno = 365;
      for (let ano = anoInicial + 1; ano < anoFinal; ano++) {
        diasDoAno = 365;
        if (this.anoBissexto(ano)) {
          diasDoAno = 366;
        }
        dias += diasDoAno;
        console.log(dias);
      }
    },
    anoBissexto: function (ano) {
      if (ano % 400 === 0 || (ano % 100 !== 0 && ano % 4 === 0)) {
        return true;
      }
      return false;
    },

    diasEntreMes: function (mes, ano) {
      diasMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (mes == 2 && this.anoBissexto(ano) == true) {
        return 29;
      } else {
        return diasMes[mes];
      }
    },
  };
});
