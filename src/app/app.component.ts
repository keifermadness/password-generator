import { Component } from '@angular/core';
import { generate } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;

  onChangeLength(target: EventTarget) {
    const value = (<HTMLInputElement>target).value;
    const parsedValue = parseInt(value)

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onButtonClick() {
   const numbers = '1234567890';
   const letters = 'abcdefghijklmnopqrstuvwxyz';
   const symbols = '!@#$%^&*()';

   let validChars = '';
   if (this.includeLetters) {
     validChars += letters;
   }
   if (this.includeNumbers) {
     validChars += numbers;
   }
   if (this.includeSymbols) {
     validChars += symbols;
   }

   let generatedPassword = '';
   for (let i = 0; i < this.length; i++) {
     const index = Math.floor(Math.random() * validChars.length);
     generatedPassword += validChars[index];
   }
   this.password = generatedPassword;
  }
}
