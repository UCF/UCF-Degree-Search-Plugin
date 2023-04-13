import { Component } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (!!event.url && event.url.match(/^\/#\!/)) {
          const params = event.url.replace('/#!/', '').split('/');
          this.router.navigate([...params]);
        }
      }
    });
  }
}
