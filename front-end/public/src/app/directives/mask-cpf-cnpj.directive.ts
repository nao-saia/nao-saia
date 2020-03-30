import { Directive, ElementRef, Renderer2, HostListener, OnInit, Output, EventEmitter } from '@angular/core';
import { keyCodesValid } from './keyCodesValid';

@Directive({
  selector: '[appMaskCpfCnpj]'
})
export class MaskCpfCnpjDirective implements OnInit {

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
    if (!this.isCpf() && !this.isCnpj()) {
      this.notification.emit(false);
      return;
    }
    if (this.isCpf()) {
      this.addMaxLength();
      this.renderer.setProperty(this.el.nativeElement, 'value', this.maskCpf());
    } else if (this.isCnpj()) {
      this.addMaxLength('18');
      this.renderer.setProperty(this.el.nativeElement, 'value', this.maskCnpj());
    }
    this.notification.emit(true);
  }

  addMaxLength(maxLength: string = '14') {
    this.renderer.setAttribute(this.el.nativeElement, 'maxlength', maxLength);
  }

  maskCpf(): string {
    let value: string = this.el.nativeElement.value;
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return value;
  }

  maskCnpj(): string {
    let value: string = this.el.nativeElement.value;
    value = value.replace(/^(\d{2})(\d)/, '$1.$2');
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
    value = value.replace(/(\d{4})(\d)/, '$1-$2');
    return value
  }

  isCpf() {
    return this.el.nativeElement.value.length == 11;
  }

  isCnpj() {
    return this.el.nativeElement.value.length == 14;
  }
}
