import { Alert } from './alert/alert.component';

export class AbstractViewComponent {
    dataAlert: Alert = {};

    constructor() {}

    public onCloseAlert(data): void {
        this.dataAlert = {};
    }

    public showAlertWarning(message: string): void {
        this.dataAlert = {
            type: 'warning',
            strong: 'Warning!',
            message: message,
            icon: 'ni ni-bell-55'
        };
    }

    public showAlertInfo(message: string): void {
        this.dataAlert = {
            type: 'info',
            strong: 'Info!',
            message: message,
            icon: 'ni ni-bell-55'
        };
    }

    public showAlertError(message: string): void {
        this.dataAlert = {
            type: 'error',
            strong: 'Erro!',
            message: message,
            icon: 'ni ni-bell-55'
        };
    }
}