import { View } from '../../../api/houseMatch.api'

export interface IAddView {
    moduleId: string;
    view?: View;
}

export interface IAssignView {
    rolId: string;
    unassignedViews?: View[];
}
