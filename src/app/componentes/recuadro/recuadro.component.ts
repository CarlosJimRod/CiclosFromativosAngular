import {Component, OnInit} from '@angular/core';
import {CicloFormativoService} from "../../services/ciclo-formativo.service";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-recuadro',
  templateUrl: './recuadro.component.html',
  styleUrls: ['./recuadro.component.css']
})
export class RecuadroComponent implements OnInit {
  cabeceras:string[]=["Nº","Alumno"]

  constructor(private cicloformativoService: CicloFormativoService, private alertService: AlertService) {
  }

  datosDAM: any[] = []

  clickOnButton(palabra: String) {
    this.alertService.showAlert("Alumnos " + palabra)
  }

  ngOnInit() {
    this.datosDAM = this.cicloformativoService.datosAlumnos
  }
}
