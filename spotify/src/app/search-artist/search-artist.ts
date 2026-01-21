import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { SpotifyService } from '../spotify-service';
import { ISearchArtists, Item } from '../interfaces/i-artists-search';
import { FormControl,  ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-artist',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './search-artist.html',
  styleUrl: './search-artist.css',
})
export class SearchArtist implements OnInit{

  // Search artist deve usare il servizio SpotifyService
  spotifyService: SpotifyService = inject(SpotifyService);

  artisti: WritableSignal<Item[]> = signal([]);

  // Questo oggetto mi consente di gestire lato typescript quanto succede in un tag input HTML
  // Questo oggetto necessita di un collegamento nel template HTML
  inputName: FormControl = new FormControl();

  search(name: string) {
    this.spotifyService.searchArtist(name).subscribe((dati: ISearchArtists) => {
      console.log(dati);
      this.artisti.set(dati.artists.items);
    })
  }

  ngOnInit(): void {
    this.inputName.valueChanges.pipe(
      // Ignoriamo le richieste se l'utente sta scrivendo il testo molto velocemente
      debounceTime(300),
      // Ignoro le modifiche alla input se il valore rispetto al precedente evento non è modificato
      distinctUntilChanged(),
      // Consente di scartare tutte le vecchie risposte avute da Spotify in ritardo e di tenere solo l'ultima
      switchMap((nome: string) => {
        if(nome.length > 0) {
          // Mandiamo la richiesta a Spotify
          return this.spotifyService.searchArtist(nome);
        }
        else {
          return of(null)
        }
      }
    )
  )
  .subscribe((dati: ISearchArtists | null) => {
     this.artisti.set(dati?.artists?.items? dati.artists.items: []);
  })
  }

}
