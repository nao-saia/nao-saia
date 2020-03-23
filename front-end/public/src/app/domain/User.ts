
export class User {
    constructor(
        public name?: string,
        public email?: string,
        public password?: string,
        public confirmPassword?: string) {
    }

    isConfirmPasswordOK(): boolean {
        return this.confirmPassword === this.password;
    }

    valid(): boolean {
        return !!(this.name && this.email && this.password && this.confirmPassword);
    }
}