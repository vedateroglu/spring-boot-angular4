import { Component } from '@angular/core';
import { DataSourceService } from 'app/datasource.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  message = '';

  constructor(private dataSourceService: DataSourceService) {}
  
  getMessage() {
    this.dataSourceService.getMessage()
      .subscribe(
        (response) => this.message = response,
        (error) => this.message = error
      );
  }

  updateName(name : any) {
    this.dataSourceService.updateName(name)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
