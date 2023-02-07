import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './preffix-suffix-input-text.component.html',
  styleUrls: ['./preffix-suffix-input-text.component.scss']
})
export class PreffixSuffixInputTextComponent implements OnInit {

  inputValue: string = "testing";
  homeLogo = "./assets/img/home.svg";
  favoriteLogo = "./assets/img/text_fields-24px.svg";


  options = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];
  filteredOptions = new BehaviorSubject(this.options);
  error = "true";

  constructor() {
    this.autocompleteAsync = this.autocompleteAsync.bind(this);
  }
  ngOnInit(): void {
  }

  onBlur(value) {
    console.log("Blur event " + value);
  }

  onChangeControlled(value) {
    console.log(value);
  }

  onChange(value) {
    this.inputValue = value;
  }

  onChangeUncontrolled(value) {
    console.log("Change uncontrolled event " + value);
  }

  onPrefixClick() {
    console.log("onPrefixClick event");
  }

  onSuffixClick() {
    console.log("onSuffixClick Clicked");
  }


  autocompleteAsync(inputValue) {
    this.filteredOptions.next(this.options.filter(option =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    ));
    return this.filteredOptions.pipe(
      switchMap(options => of(options).pipe(delay(1000)))
    );
  }
}
