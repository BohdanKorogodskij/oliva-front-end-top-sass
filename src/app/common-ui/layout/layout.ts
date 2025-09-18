import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from '../side-bar/side-bar';
@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, SideBar],
  templateUrl: './layout.html',
  styleUrl: './layout.sass'
})
export class Layout {

}
