  export interface ISettings {
    name: string;
    userName: string;
    hoursPerDay: number;
    workDays: number[];
    rate: number;
    projectName: string;
    startTimeDay: string;
  }

  export interface IProject {
    name: string;
    clientCode: string;
    rate: number;
  }

  export interface IUser {
    settings: ISettings;
    projects: IProject[];
  }
