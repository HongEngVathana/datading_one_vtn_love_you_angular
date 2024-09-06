import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
 @Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string="This is me VTN"
  vathana:number=23*1000
  imgurl:string="https://i.pinimg.com/236x/ff/77/c6/ff77c6790d107dd168f5458597e83af3.jpg"
  idDisable:boolean=true
  isActive:boolean=true
  fruitName:string="Apple"
  buttonClick(){
    console.log('B')

  }
  Enter( event:any){
    // console.log(event.keyCode);
    if(event.keyCode==13){
      console.log("Key BCSJDHBCSJLDH")

    }
   
  }
  
}
