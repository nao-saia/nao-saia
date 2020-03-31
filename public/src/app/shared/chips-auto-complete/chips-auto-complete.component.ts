import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, throwError } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-chips-auto-complete',
  templateUrl: './chips-auto-complete.component.html',
  styleUrls: ['./chips-auto-complete.component.css']
})
export class ChipsAutoCompleteComponent implements OnInit {

  @Input()
  placeholder: string = 'Selecione um ou mais itens';

  @Input()
  selectedItems: string[];

  @Input()
  availableItems: string[];

  @Input()
  visible = true;

  @Input()
  acceptNewValues = true;

  @Input()
  selectable = true;

  @Input()
  removable = true;

  @Input()
  separatorKeysCodes: number[] = [ENTER, COMMA];

  @ViewChild('chipsInputText')
  chipsInputText: ElementRef<HTMLInputElement>;

  @ViewChild('auto')
  matAutocomplete: MatAutocomplete;

  chipControl = new FormControl();
  filtered: Observable<string[]>;

  constructor() {
    this.filtered = this.chipControl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.availableItems.slice()));
  }

  ngOnInit(): void {
    if (!this.availableItems) {
      throwError('availableItems is required in chips-auto-complete');
    }
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if (this.acceptNewValues || this.isAvailableItem(value)) {
      this.addNewValue(value, input);
    }
  }

  isAvailableItem(value: string): boolean {
    return this.availableItems && this.availableItems.indexOf(value) >= 0;
  }

  alreadyAdded(value: string): boolean {
    return this.selectedItems && this.selectedItems.indexOf(value) >= 0;
  }

  addNewValue(value: string, input: any) {

    // Add new value
    value = (value || '').trim();
    if (value && !this.alreadyAdded(value)) {
      this.selectedItems.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.chipControl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.selectedItems.indexOf(fruit);

    if (index >= 0) {
      this.selectedItems.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedItems.push(event.option.viewValue);
    this.chipsInputText.nativeElement.value = '';
    this.chipControl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.availableItems.filter(term => term.toLowerCase().indexOf(filterValue) === 0);
  }

}
