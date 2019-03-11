import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'obtenerCanciones'
})
export class ObtenerCancionesPipe implements PipeTransform {

  private urlSpoti = 'https://open.spotify.com/embed/artist/';

  constructor( private domSanatizer:DomSanitizer) {
  }

  transform(value: string): any {

    return this.domSanatizer.bypassSecurityTrustResourceUrl(
      this.urlSpoti + value );

  }

}
