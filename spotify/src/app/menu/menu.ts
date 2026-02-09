import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SpotifyService } from '../spotify-service';
import { UsersService } from '../users-service';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  spotifyService: SpotifyService = inject(SpotifyService);
  userService: UsersService = inject(UsersService);

  validToken = this.spotifyService.validToken;
  isLogged = this.userService.isLogged;

  logout(): void {
    this.userService.logout();
  }
}
