import { Directive, Output, EventEmitter, ElementRef, Renderer2, HostListener, Input } from '@angular/core';
import { keyCodesValid } from './keyCodesValid';

export enum MaskType {
  CELL_PHONE = 'cellPhone',
  TELEPHONE = 'telephone'
}

@Directive({
  selector: '[appMaskTelCel]'
})
export class MaskTelCelDirective {

  @Input()
  maskType: string = MaskType.TELEPHONE;

  @Output()
  notification: EventEmitter<boolean> = new EventEmitter()

  constructor(private el: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    if (this.isMaskTypeTelephone()) {
      this.addMaxLength('10');
    } else {
      this.addMaxLength();
    }
  }

  isMaskTypeTelephone() {
    return this.maskType === MaskType.TELEPHONE;
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const keyCode = event.keyCode;
    if (keyCodesValid.indexOf(keyCode) == -1) {
      event.preventDefault();
    }
  }

  @HostListener('blur')
  onBlur() {
    if (!this.isMaskTypeTelephone() && !this.el.nativeElement.value) {
      this.notification.emit(true);
      return;
    } else if (!this.isCel() && !this.isTel()) {
      this.notification.emit(false);
      return;
    }
    this.renderer.setProperty(this.el.nativeElement, 'value', this.mask());
    this.notification.emit(true);
  }

  addMaxLength(maxLength: string = '11') {
    this.renderer.setAttribute(this.el.nativeElement, 'maxlength', maxLength);
  }

  mask(): string {
    let value: string = this.el.nativeElement.value;
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  }

  isTel() {
    return this.el.nativeElement.value.length == 10;
  }

  isCel() {
    return this.el.nativeElement.value.length == 11;
  }

}
