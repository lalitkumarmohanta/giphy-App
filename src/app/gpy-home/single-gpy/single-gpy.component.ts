import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GpyService } from 'src/app/services/gpy.service';

@Component({
  selector: 'app-single-gpy',
  templateUrl: './single-gpy.component.html',
  styleUrls: ['./single-gpy.component.scss']
})
export class SingleGpyComponent implements OnInit, OnDestroy {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  showSpinner: boolean = true;
  private currentGpy: any;
  private currentId: string;
  private routeSub: Subscription;
  constructor(private route: ActivatedRoute, private gpyService: GpyService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.currentId = params.id;
      this.getbyId(this.currentId);
    });
  }

  getbyId(id: string) {
    this.gpyService.getGpyById(id).subscribe(
      (data) => {
        this.currentGpy = data.data;
        this.showSpinner = false;
      },
      err => {
        console.log(err);
        this.showSpinner = false;
      }
    );
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
