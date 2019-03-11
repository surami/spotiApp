import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('spotify services listo');
  }

  getQuery( query: string) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDlGRw8xxiMiXKB3fWhaeWFjUwNg5rEMxY_0WrwqQpB1E_FLEZIqlbE7mo_R1pbkLUFCiDfBFmCJqMNjU5HQii6sSB3mR1rzHV-QoJ_c9VtY8Ww5cnh343Uv3_EDI47ZQ7G-fCwL0nbgg'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
        .pipe( map( data => data['albums'].items));

  }

  getArtista(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&market=ES&limit=15`)
        .pipe( map( data => data['artists'].items));

  }
}
