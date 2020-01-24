import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class PricecountService {
total:number;
tax:number;
c:number;
abc:number;
totalcount(a:number,b:number)
{
  this.c=a+b;
  this.tax=this.c*0.20;
  this.abc=this.c+this.tax;
  this.total=this.abc;
  console.log(this.total);
  return this.total;
}
  constructor() { }
}
