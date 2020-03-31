import { Role } from './Role';

export class User {
    constructor(
        public id?: string,
        public name?: string,
        public username?: string,
        public password?: string,
        public confirmPassword?: string,
        public acceptTerms?: boolean,
        public enabled?: boolean,
        public roles?: Role[]) {
    }

    isConfirmPasswordOK(): boolean {
        return this.confirmPassword === this.password;
    }

    valid(): boolean {
        return !!(this.name && this.username && this.password && this.confirmPassword);
    }

    loginValid(): boolean {
        return !!(this.username && this.password);
    }

    addRoles(...roles: Role[]): void {
        if (!this.roles) {
            this.roles = roles;
        } else {
            this.roles.push(...roles);
        }
    }

    hasRole(role: Role): boolean {
        if (this.roles) {
            return this.roles.indexOf(role) === 0;
        }
        return false;
    }
}
