import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  dataAdmissao : Date;
  mesAdmissao : number;
  diaAdmissao : number;
  dataDemissao : Date;
  mesDemissao : number;
  diaDemissao : number;
  //tempoMilisegundos : number;
  //tempoDias : number;
  //tempoMeses : number;
  tempoAnos : number;
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

  obterDiasMesAdmissaoDemissao() {
    this.mesAdmissao = new Date(this.dataAdmissao).getMonth() + 1;
    this.diaAdmissao = new Date(this.dataAdmissao).getDate();
    this.mesDemissao = new Date(this.dataDemissao).getMonth() + 1;
    this.diaDemissao = new Date(this.dataDemissao).getDate();
  }

  calcularSaldoSalario() {
    this.diariaSalario = this.ultimoSalario / 30;
    this.saldoSalario = this.diaDemissao * this.diariaSalario;
  }

  calcularDecimoTerceiro() {
    if (this.diaDemissao >= 15) {
      this.decimoTerceiroSalarioProporcional = this.ultimoSalario * (this.mesDemissao / 12);
    } else {
      this.decimoTerceiroSalarioProporcional = this.ultimoSalario * ((this.mesDemissao - 1) / 12);
    }
    console.log('13º proporcional: ' + this.decimoTerceiroSalarioProporcional);
  }
  
  /* calcularDiasEntreAdmissaoDemissao() {
    this.tempoMilisegundos = new Date(this.dataDemissao).valueOf() - new Date(this.dataAdmissao).valueOf();
    this.tempoDias = this.tempoMilisegundos / (1000 * 60 * 60 * 24);
    this.tempoDias = Math.floor(this.tempoDias);
  } */

  /* calcularMesesEntreAdmissaoDemissao() {
    this.tempoMeses = this.tempoDias / 30;
  } */

  calcularAnosEntreAdmissaoDemissao() {
    this.tempoAnos = new Date(this.dataDemissao).getFullYear() - new Date(this.dataAdmissao).getFullYear();
    if (this.tempoAnos >= 1) { // Possivelmente mais que um ano transcorreu

      /* if (this.tempoAnos == 1) {
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
    //this.calcularDiasEntreAdmissaoDemissao();
    //this.calcularMesesEntreAdmissaoDemissao();
    this.calcularAnosEntreAdmissaoDemissao();
  }

  apresentarRelatorio() {
    this.obterDiasMesAdmissaoDemissao();
    this.calcularSaldoSalario();
    this.calcularDecimoTerceiro();
    this.calcularTempoEntreAdmissaoDemissao();
    /* console.log('Data de admissão: ' + this.dataAdmissao + ' \n ' +
                'Data de demissão: ' + this.dataDemissao + ' \n ' +
                'Anos: ' + this.tempoAnos + ' \n ' +
                'Último salário: ' + this.ultimoSalario + ' \n ' + 
                'Saldo de salário: ' + this.saldoSalario + ' \n ' + 
                'Aviso prévio: ' + this.avisoPrevio + ' \n '); */
  }

}