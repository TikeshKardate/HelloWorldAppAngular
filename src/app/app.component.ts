import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'HelloWorldApp';
  imgUrl= "../assets/BL_logo_square_jpg.jpg";
  url="https://www.bridgelabz.com";
  userName: string = "";

  ngOnInit() : void{
    this.title = "Hello from BridgeLabz.";
}

onClick(){
  console.log("Save button is clicked!");
  window.open(this.url, "_blank");
}

onInput(): void{
  console.log("Change event occured");
  const nameRegex = /^[A-Z][a-zA-Z\s]{2,}$/;
}
}
