import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {map} from 'rxjs';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  pageName$ = this.route.paramMap.pipe(
    map((params: ParamMap) => params.get('pageName'))
  )

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
