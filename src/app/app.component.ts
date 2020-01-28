import { HeroService } from './core/services/hero.service';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private heroService: HeroService) {
    console.log('test');
    this.getList();
  };
  public data: any = {};
  public hero: any = {};
  getList() {
    this.heroService.get({}).subscribe((data) => this.data = data.hits);
  }
  doSend() {
    this.heroService.post(this.hero).subscribe((data) => console.log(data));
  }
}
