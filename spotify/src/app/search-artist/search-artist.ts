import { Component, inject, signal, WritableSignal } from '@angular/core';
import { SpotifyService } from '../spotify-service';
import { ISearchArtists, Item } from '../interfaces/i-artists-search';

@Component({
  selector: 'app-search-artist',
  imports: [],
  templateUrl: './search-artist.html',
  styleUrl: './search-artist.css',
})
export class SearchArtist {

  // Search artist deve usare il servizio SpotifyService
  spotifyService: SpotifyService = inject(SpotifyService);

  artisti: WritableSignal<Item[]> = signal([]);

  search(name: string) {
    this.spotifyService.searchArtist(name).subscribe((dati: ISearchArtists) => {
      console.log(dati);
      this.artisti.set(dati.artists.items);
    })
  }
}
