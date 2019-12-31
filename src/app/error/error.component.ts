import { Component, OnInit } from '@angular/core';
import { ErrorLogService } from '../services/error-log.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  error: string = '';
  constructor(private errorService: ErrorLogService) {

  }

  ngOnInit() {
    this.errorService.getMessage().subscribe(
      data => {
        console.log(data);

        this.error = data;
      },
      err => console.log(err)


    )
  }

}
