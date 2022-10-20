import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { College } from 'src/app/search/colleges/college';
import { CollegeService } from './college.service';

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.scss']
})
export class CollegesComponent implements OnInit {

  colleges!: College[];
  subscription: Subscription;

  constructor(private collegeService: CollegeService) {
    this.subscription = this.collegeService.colleges$.subscribe(
      colleges => {
        this.colleges = colleges;
      }
    );
  }

  ngOnInit(): void {
    this.collegeService.getColleges();
  }

}
