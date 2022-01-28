import {IProject, ISettings, IUser} from './iuser';

// TODO IDSME Reorganize this
export class User implements IUser {
  projects!: IProject[];
  settings!: ISettings;
}

export class Project implements IProject {
  clientCode!: string;
  name!: string;
  rate!: number;
}

export class Settings implements ISettings {
  name!: string;
    hoursPerDay!: number;
  projectName!: string;
  rate!: number;
  workDays!: number[];
    startTimeDay!: string;
    userName!: string;
}
