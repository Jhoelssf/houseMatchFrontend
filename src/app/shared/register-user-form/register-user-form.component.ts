import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Observable, Subject, takeUntil } from 'rxjs';
import { LocationInput, PersonLocationCreateInput, PersonWithoutLocation } from '../../api/houseMatch.api';
import { UserServiceApi } from '../../core/users/api/user-service.service';
import { IUserFormData } from '../models/user-form-data.model';

@Component({
    selector: 'app-register-user-form',
    templateUrl: './register-user-form.component.html',
    styleUrls: ['./register-user-form.component.scss'],
    providers: [MessageService],
})
export class RegisterUserFormComponent implements OnInit, OnDestroy {
    @Input() onSaveSubject!: Observable<string>;
    formPersonLocationUser = new FormGroup({
        formUser: new FormGroup({
            username: new FormControl(),
            password: new FormControl(),
            email: new FormControl(),
            theme: new FormControl(),
        }),
        formLocation: new FormGroup({
            country: new FormControl(),
            city: new FormControl(),
            province: new FormControl(),
            district: new FormControl(),
            address: new FormControl(),
            lat: new FormControl(),
            long: new FormControl(),
        }),
        formPerson: new FormGroup({
            document_type: new FormControl(),
            document: new FormControl(),
            names: new FormControl(),
            lastname: new FormControl(),
            m_lastname: new FormControl(),
            phone: new FormControl(),
            gender: new FormControl(),
            marital_status: new FormControl(),
            date_birth: new FormControl(),
            photo: new FormControl(),
        }),
    });
    @Input() userFormData!: IUserFormData;
    unsubscribe$: Subject<any> = new Subject<any>();
    // UserForm
    get formUser(): FormGroup {
        return this.formPersonLocationUser.controls.formUser as FormGroup;
    }
    get username(): FormControl {
        return this.formUser.get('username') as FormControl;
    }
    get password(): FormControl {
        return this.formUser.get('password') as FormControl;
    }
    get email(): FormControl {
        return this.formUser.get('email') as FormControl;
    }
    get theme(): FormControl {
        return this.formUser.get('theme') as FormControl;
    }
    // LocationForm
    get formLocation(): FormGroup {
        return this.formPersonLocationUser.controls.formLocation as FormGroup;
    }
    get country(): FormControl {
        return this.formLocation.get('country') as FormControl;
    }
    get city(): FormControl {
        return this.formLocation.get('city') as FormControl;
    }
    get province(): FormControl {
        return this.formLocation.get('province') as FormControl;
    }
    get district(): FormControl {
        return this.formLocation.get('district') as FormControl;
    }
    get address(): FormControl {
        return this.formLocation.get('address') as FormControl;
    }
    get lat(): FormControl {
        return this.formLocation.get('lat') as FormControl;
    }
    get long(): FormControl {
        return this.formLocation.get('long') as FormControl;
    }
    // PersonForm
    get formPerson(): FormGroup {
        return this.formPersonLocationUser.controls.formPerson as FormGroup;
    }
    get document_type(): FormControl {
        return this.formPerson.get('document_type') as FormControl;
    }
    get document(): FormControl {
        return this.formPerson.get('document') as FormControl;
    }
    get names(): FormControl {
        return this.formPerson.get('names') as FormControl;
    }
    get lastname(): FormControl {
        return this.formPerson.get('lastname') as FormControl;
    }
    get m_lastname(): FormControl {
        return this.formPerson.get('m_lastname') as FormControl;
    }
    get phone(): FormControl {
        return this.formPerson.get('phone') as FormControl;
    }
    get gender(): FormControl {
        return this.formPerson.get('gender') as FormControl;
    }
    get marital_status(): FormControl {
        return this.formPerson.get('marital_status') as FormControl;
    }
    get date_birth(): FormControl {
        return this.formPerson.get('date_birth') as FormControl;
    }
    get photo(): FormControl {
        return this.formPerson.get('photo') as FormControl;
    }

    constructor(private userService: UserServiceApi) {}
    ngOnDestroy(): void {
        this.unsubscribe$.next(null);
        this.unsubscribe$.complete();
    }
    ngOnInit(): void {
        this.onSaveSubject.pipe(takeUntil(this.unsubscribe$)).subscribe((msg) => {
            this.onSaveUser(msg);
        });
        this.userService.personLocation$.pipe(takeUntil(this.unsubscribe$)).subscribe((personLocation) => {
            this.userService.createUser({
                user: this.username.value,
                password: this.password.value,
                email: this.email.value,
                theme: this.theme.value,
                person_id: personLocation.id,
            });
        });
        if (this.userFormData) {
            const data = this.userFormData as IUserFormData;
            this.formUser.patchValue({
                username: data.user?.user,
                password: data.user?.password,
                email: data.user?.email,
                theme: data.user?.theme,
            });
            this.formPerson.patchValue({
                document_type: data.person?.document_type,
                document: data.person?.document,
                names: data.person?.names,
                lastname: data.person?.lastname,
                m_lastname: data.person?.m_lastname,
                phone: data.person?.phone,
                gender: data.person?.gender,
                marital_status: data.person?.marital_status,
                date_birth: data.person?.date_birth,
                photo: data.person?.photo,
            });
            this.formLocation.patchValue({
                country: data.location?.country,
                city: data.location?.city,
                province: data.location?.province,
                district: data.location?.district,
                address: data.location?.address,
                lat: data.location?.lat,
                long: data.location?.long,
            });
        }
    }

    onSaveUser(msg: string) {
        if (this.userFormData && this.userFormData.user?.id) {
            this.userService.updateUser(this.userFormData.user.id, {
                user: this.username.value,
                password: this.password.value,
                email: this.email.value,
                theme: this.theme.value,
            });
        } else {
            const person: PersonWithoutLocation = this.formPerson.value;
            person.photo = '6f25d142-feac-44ee-ad00-c348f900274d';
            const location: LocationInput = this.formLocation.value;
            const personLocation: PersonLocationCreateInput = {
                location,
                person,
            };
            this.userService.personsLocations(personLocation);
        }
    }
}
