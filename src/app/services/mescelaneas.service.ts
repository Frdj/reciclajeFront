import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MescelaneasService {

  private URL = 'https://localhost:5001';
  showNewPub = true;
  constructor(private router: Router) { }

  getURL() {
    return this.URL;
  }

  errorAlert(error: any) {
    alert('Hubo un error en la conexión, no se pudieron cargar los datos');
  }

  redireccionar(path: string) {
    this.router.navigate([path]);
    if (path.includes('ofrecer') || path.includes('dataPublish')) {
      console.log('no mostrar')
      this.showNewPub = false;
    } else {
      this.showNewPub = true;
    }
  }

  getFechaActual(){
    let dia, mes, anio, date;
    dia = new Date().getUTCDate();
    mes = new Date().getUTCMonth();
    anio = new Date().getUTCFullYear();
    return dia + '/'+ mes + '/' + anio;
  }

}
