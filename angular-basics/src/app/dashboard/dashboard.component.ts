import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  award: number = 5;
  color = "yellow";
  years = [1958, 1962, 1970, 1994, 2002];
  hour: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
