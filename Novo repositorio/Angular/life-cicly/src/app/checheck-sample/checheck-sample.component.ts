import { Component,
  OnInit,
   DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy

   } from '@angular/core';

@Component({
  selector: 'app-checheck-sample',
  templateUrl: './checheck-sample.component.html',
  styleUrls: ['./checheck-sample.component.css']
})
export class ChecheckSampleComponent implements OnInit,
 DoCheck, AfterContentChecked,
AfterContentInit,
AfterViewChecked,
AfterViewInit,
OnDestroy

{

  quantidade:number = 0

  constructor() { }


  adicionar(){
    this.quantidade += 1
  }

  decrementar(){
    this.quantidade -= 1
  }

  ngAfterViewInit(): void {



    console.log("ngAfterViewInit");

  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");

  }
  ngAfterContentInit(): void {
    console.log("ngContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");

  }

  ngDoCheck(): void {
      console.log("ngDoCheck");
  }

  ngOnInit(): void {
    console.log("ngOnInit");

  }

  ngOnDestroy(): void {
    console.log("Sayonara")
  }

}
function adicionar() {
  throw new Error('Function not implemented.');
}

