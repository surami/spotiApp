import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('spotify services listo');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAJPLB6qp09y6cQzWHHQZqogqFxSGMdbgPFwal_DvmsphGYt0xweHuzU7owlMRGyJ1LIcmbE5A0I_Ioi7QHmf2tftZau4vSAdrZhLul7t7SkWru22G2LmM6dwzlW6A3tJ17nCsm0ZRtdj_jtUGaVFajGkWAPS4AWw'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});

  }

  getArtista(termino: string) {

    const headers = new HttpHeaders({
      'Authorization': "Bearer BQAJPLB6qp09y6cQzWHHQZqogqFxSGMdbgPFwal_DvmsphGYt0xweHuzU7owlMRGyJ1LIcmbE5A0I_Ioi7QHmf2tftZau4vSAdrZhLul7t7SkWru22G2LmM6dwzlW6A3tJ17nCsm0ZRtdj_jtUGaVFajGkWAPS4AWw"
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&market=ES&limit=15`, {headers});

  }
}
