import { Component, OnInit } from '@angular/core';
import { GpyService } from '../services/gpy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gpy-home',
  templateUrl: './gpy-home.component.html',
  styleUrls: ['./gpy-home.component.scss']
})
export class GpyHomeComponent implements OnInit {
  color = 'primary';
  mode = 'indeterminate';
  showSpinner: boolean = true;
  value = 50;
  listGpys: any;

  limit: string = '20';
  offset: string = '0';
  rating: string = 'G';
  lang: string = 'en';
  searchVal: string = 'nature';

  constructor(private gpyservices: GpyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (data) => {
        let id = data['params'].id;
        if (id) {
          this.searchVal = data['params'].id;
          this.getGpy();
        } else {
          this.getGpy();
        }
      }
    )
  }

  getGpy() {
    this.gpyservices.getAllGpy(this.limit, this.offset, this.rating, this.lang, this.searchVal).subscribe(
      (data) => {
        this.listGpys = data.data;
        this.showSpinner = false;
      },
      (err) => {
        console.log(err);
        this.showSpinner = false;
      }
    );
  }
}
