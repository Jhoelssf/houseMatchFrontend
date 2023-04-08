import { LocationInput, PersonWithoutLocation, User } from '../../../api/houseMatch.api';

export interface IUserDialog {
    user: User | undefined;
    location: LocationInput | undefined;
    person: PersonWithoutLocation | undefined;
}
