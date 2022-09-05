import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
    static passwordMatch(group: AbstractControl<any, any>): ValidationErrors | null {
        const password = group.get('password')?.value;
        const passwordConfirmation = group.get('passwordConfirmation')?.value;

        if (password !== passwordConfirmation) {
            return {
                passwordMatch: true
            };
        }
        return null;
    }
}