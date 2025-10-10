import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListObjects } from "./components/list-objects/list-objects";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListObjects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-project');
}
