import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface Alert {
  type?: string;
  strong?: string;
  message?: string;
  icon?: string;
}
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input()
  alert: Alert;
  @Output() 
  closeEvent: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.alert = {};
    this.closeEvent.emit();
  }

}
