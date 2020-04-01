import { Alert } from './alert/alert.component';
import { ToastrService } from 'ngx-toastr';

export class AbstractViewComponent {
    dataAlert: Alert = {};

    constructor(private toastr: ToastrService) {}

    public onCloseAlert(): void {
        this.dataAlert = {};
    }

    public showAlertWarning(message: string, title?: string): void {
        if (!title) {
            title =  'Atenção!';
        }
        this.toastr.warning(message, title);
    }

    public showAlertInfo(message: string, title?: string): void {
        if (!title) {
            title =  'Info!';
        }
        this.toastr.info(message, title);
    }

    public showAlertError(message: string, title?: string): void {
        if (!title) {
            title =  'Erro!';
        }
        this.toastr.error(message, title);
    }
}
