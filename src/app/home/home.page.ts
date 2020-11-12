import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  dataAdmissao : Date;
  dataDeAdmissao : Date;
  anoAdmissao : number;
  mesAdmissao : number;
  diaAdmissao : number;
  dataDemissao : Date;
  dataDeDemissao : Date;
  anoDemissao : number;
  mesDemissao : number;
  diaDemissao : number;
  dataAquisicaoDireitoFeriasNoAnoDemissao : Date;
  dataCadaMesFeriasProporcionais : Date;

  dataTeste : Date;

  numeroAnosTrabalhados : number;
  ultimoSalario : number;
  diariaSalario : number;
  saldoSalario : number;
  avisoPrevio : number;
  decimoTerceiroSalario : number;
  decimoTerceiroSalarioProporcional : number;
  decimoTerceiroSalarioProporcionalAP : number;
  feriasVencidas : number;
  feriasProporcionais : number;
  feriasProporcionaisAP : number;

  constructor() {
    this.anoAdmissao = 0;
    this.mesAdmissao = 0;
    this.diaAdmissao = 0;
    this.anoDemissao = 0;
    this.mesDemissao = 0;
    this.diaDemissao = 0;
    this.numeroAnosTrabalhados = 0;
    this.ultimoSalario = 0;
    this.diariaSalario = 0;
    this.saldoSalario = 0;
    this.avisoPrevio = 0;
    this.decimoTerceiroSalario = 0;
    this.decimoTerceiroSalarioProporcional = 0;
    this.decimoTerceiroSalarioProporcionalAP = 0;
    this.feriasVencidas = 0;
    this.feriasProporcionais = 0;
    this.feriasProporcionaisAP = 0;
  }

  obterAnoMesDiaAdmissao() {
    this.dataDeAdmissao = new Date(this.dataAdmissao);
    this.anoAdmissao = this.dataDeAdmissao.getFullYear();
    this.mesAdmissao = this.dataDeAdmissao.getMonth() + 1;
    this.diaAdmissao = this.dataDeAdmissao.getDate();
    console.log("Ano da admissão: " + this.anoAdmissao);
    console.log("Mês da admissão: " + this.mesAdmissao);
    console.log("Dia da admissão: " + this.diaAdmissao);
    console.log("\n_____________________________________\n");
  }

  obterAnoMesDiaDemissao() {
    this.dataDeDemissao = new Date(this.dataDemissao);
    this.anoDemissao = this.dataDeDemissao.getFullYear();
    this.mesDemissao = this.dataDeDemissao.getMonth() + 1;
    this.diaDemissao = this.dataDeDemissao.getDate();
    console.log("Ano da demissão: " + this.anoDemissao);
    console.log("Mês da demissão: " + this.mesDemissao);
    console.log("Dia da demissão: " + this.diaDemissao);
    console.log("\n_____________________________________\n");
  }

  calcularSaldoSalario() {
    this.diariaSalario = this.ultimoSalario / 30;
    this.saldoSalario = this.diaDemissao * this.diariaSalario;
    console.log('Saldo de salário: ' + this.saldoSalario + ' reais');
    console.log("\n_____________________________________\n");
  }

  calcularDecimoTerceiroProporcional() {
    if (this.diaDemissao >= 15) {
      this.decimoTerceiroSalarioProporcional = this.ultimoSalario * (this.mesDemissao / 12);
    } else {
      this.decimoTerceiroSalarioProporcional = this.ultimoSalario * ((this.mesDemissao - 1) / 12);
    }
    console.log('13º proporcional: ' + this.decimoTerceiroSalarioProporcional + ' reais');
    console.log("\n_____________________________________\n");
  }
  
  calculoFerias() {
    this.verificarExistenciaFeriasVencidas(); // Correto
    this.calcularFeriasProporcionais();
  }
  
  verificarExistenciaFeriasVencidas() {
    this.dataAquisicaoDireitoFeriasNoAnoDemissao = this.dataDeAdmissao;
    this.dataAquisicaoDireitoFeriasNoAnoDemissao.setDate(this.dataAquisicaoDireitoFeriasNoAnoDemissao.getDate() - 1);
    this.dataAquisicaoDireitoFeriasNoAnoDemissao.setFullYear(this.dataAquisicaoDireitoFeriasNoAnoDemissao.getFullYear() + (this.anoDemissao - this.anoAdmissao));
    if (this.anoDemissao > this.anoAdmissao) {
      if (this.dataDeDemissao >= this.dataAquisicaoDireitoFeriasNoAnoDemissao) {
        this.feriasVencidas = this.ultimoSalario + (this.ultimoSalario / 3);
      } else {
        this.feriasVencidas = 0;
      }
    } else {
      this.feriasVencidas = 0;      
    }
    console.log("Data de demissão: " + this.dataDeDemissao);
    console.log("Data da aquisição do direito à férias: " + this.dataAquisicaoDireitoFeriasNoAnoDemissao);
    console.log("Férias vencidas: " + this.feriasVencidas + ' reais');
    console.log("\n_____________________________________\n");
  }

  calcularFeriasProporcionais() {
    /* this.dataCadaMesFeriasProporcionais = this.dataDeDemissao;
    this.dataCadaMesFeriasProporcionais.setDate(this.dataDeDemissao.getDate() - 1);
    this.dataCadaMesFeriasProporcionais.setMonth(this.dataDeDemissao.getMonth() + 1);
    this.dataCadaMesFeriasProporcionais.setFullYear(this.dataDeDemissao.getFullYear());
    while (this.dataDeDemissao > this.dataCadaMesFeriasProporcionais) {

    } */
    console.log('Férias proporcionais: ' + this.feriasProporcionais);
  }

  calcularAnosEntreAdmissaoDemissao() {
    this.numeroAnosTrabalhados = this.anoDemissao - this.anoAdmissao;
    if (this.numeroAnosTrabalhados >= 1) { // Possivelmente mais que um ano transcorreu

      /* if (this.numeroAnosTrabalhados == 1) {
        if ((this.mesDemissao < this.mesAdmissao) || (this.diaDemissao < this.diaAdmissao)) {
          console.log("Não completou 1 ano");
        }
      } else {

      } */
    } else { // Não transcorreu um ano
      console.log('Não transcorreu um ano');
    }
  }

  calcularTempoEntreAdmissaoDemissao() {
    this.calcularAnosEntreAdmissaoDemissao();
  }

  apresentarRelatorio() {
    this.obterAnoMesDiaAdmissao(); // Correto
    this.obterAnoMesDiaDemissao(); // Correto
    this.calcularSaldoSalario(); // Correto
    this.calcularDecimoTerceiroProporcional(); // Correto
    this.calculoFerias();
    this.calcularTempoEntreAdmissaoDemissao();
    /* console.log('Data de admissão: ' + this.dataAdmissao + ' \n ' +
                'Data de demissão: ' + this.dataDemissao + ' \n ' +
                'Anos: ' + this.numeroAnosTrabalhados + ' \n ' +
                'Último salário: ' + this.ultimoSalario + ' \n ' + 
                'Saldo de salário: ' + this.saldoSalario + ' \n ' + 
                'Aviso prévio: ' + this.avisoPrevio + ' \n '); */
  }

}