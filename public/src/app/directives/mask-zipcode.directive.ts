import { Directive, HostListener, Renderer2, ElementRef, EventEmitter, Output } from '@angular/core';
import { keyCodesValid } from './keyCodesValid';

@Directive({
  selector: '[appMaskZipCode]'
})
export class MaskZipCodeDirective {

  @Output()
  notification: EventEmitter<boolean> = new EventEmitter()

  constructor(private el: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit(): void {
      this.addMaxLength();
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
    if (!this.el.nativeElement.value) {
      this.notification.emit(true);
      return;
    } else if (!this.isCep()) {
      this.notification.emit(false);
      return;
    }
    this.renderer.setProperty(this.el.nativeElement, 'value', this.mask());
    this.notification.emit(true);
  }

  addMaxLength() {
    this.renderer.setAttribute(this.el.nativeElement, 'maxlength', '8');
  }

  mask(): string {
    let value: string = this.el.nativeElement.value;
    value = value.replace(/(\d)(\d{3})$/, "$1-$2");
    return value;
  }

  isCep() {
    return this.el.nativeElement.value.length == 8;
  }


}
