import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import {Moment} from 'moment';
//import 'moment/locale/nl';
import {WorkedPeriod} from '../worked-period';
import {HoursMadeHelper} from '../hours-made-helper';
import {LocalStorageService} from '../../page-user-profile/local-storage.service';
import {MasterDataService} from '../../../shared/duplo/masterdata/masterdata.service';
import { IProject, IUser } from '../../api/iuser';
import { User } from '../../api/user';

@Component({
    selector: 'ids-page-working-period',
    templateUrl: './page-working-period.component.html',
    styleUrls: ['./page-working-period.component.scss']
})


export class PageWorkingPeriodComponent implements OnInit {

    USER_SETTINGS!: IUser;
    errorMessage!: string;
    currentDate!: Moment;
    periods!: WorkedPeriod[];
    totalHours = 0;
    projectFound!: IProject;
    earningsThisMonth!: number;

    constructor(public localStorageService: LocalStorageService, public masterDataService: MasterDataService) {

    }

    @Input() _viewMode: 'EDIT' | 'PRINT' = 'EDIT';

    get viewMode(): 'EDIT' | 'PRINT' {
        return this._viewMode;
    }

    set viewMode(mode: 'EDIT' | 'PRINT') {
        this._viewMode = mode;
    }

    ngOnInit() {
        this.masterDataService.getUser().subscribe((data: User) => {
            console.log('userConfig retrieved:>', data);
            this.USER_SETTINGS = data;

            this._viewMode = 'EDIT';

            // Set local
            moment.locale('nl');
            // Get current Time.
            this.currentDate = moment();
            console.log(this.currentDate.format('LLLL'));

            console.log(`Days in Month:`, this.currentDate.daysInMonth());
            console.log(`Days of date:`, this.currentDate.date());
            console.log(`Days of week:`, this.currentDate.day());
            console.log(`Month of year:`, this.currentDate.month());
            console.log(`Year:`, this.currentDate.year());

            this.initWorkPeriodData(this.currentDate);

            this.calculate();
        });
    }

    calculate() {
        this.totalHours = -13;
        let totalHoursNew = 0;
        this.periods.forEach((currentWorkingPeriod) => {
            totalHoursNew += currentWorkingPeriod.hoursPerDay;
            this.totalHours = totalHoursNew;
        });
        this.earningsThisMonth = this.projectFound.rate * this.totalHours;
    }

    clear(dayOfTheMonth: number) {
        console.log(`clear>DayOfTheMonth`, dayOfTheMonth);

        HoursMadeHelper.convertDefaultFreePeriod(this.periods[dayOfTheMonth - 1]);
        this.calculate();
    }

    fill(dayOfTheMonth: number) {
        console.log(`reinit>DayOfTheMonth`, dayOfTheMonth);
        console.log(`Fill with>`, this.projectFound);

        this.periods[dayOfTheMonth - 1] = new WorkedPeriod(this.projectFound.name, this.projectFound.clientCode, this.USER_SETTINGS.settings.hoursPerDay, this.projectFound.rate, dayOfTheMonth, this.currentDate.month(), this.currentDate.year());
        this.calculate();
    }

    plus(plus: number, currentPeriod: WorkedPeriod) {
        console.log(`plus>${plus}>`, currentPeriod);
        currentPeriod.hoursPerDay += plus;
        this.calculate();
    }

    togglePrint(): void {
        if (this.viewMode === 'PRINT') {
            this.viewMode = 'EDIT';
        } else {
            this.viewMode = 'PRINT';
        }
    }

    gotoPrevMonth1() {
        console.log('Caught prev Month Event');
        this.currentDate.month(this.currentDate.month() - 1);
        this.initWorkPeriodData(this.currentDate);
        this.calculate();
    }

    gotoNextMonth1() {
        console.log('Caught prev Month Event');
        this.currentDate.month(this.currentDate.month() + 1);
        this.initWorkPeriodData(this.currentDate);
        this.calculate();
    }

    private initWorkPeriodData(currentDate: Moment) {
        console.log('initWorkPeriodData', currentDate);
        // Create array of certain size currentMonth.
        this.periods = new Array<WorkedPeriod>(currentDate.daysInMonth());

        // Get project from config via code.
        const projectCodeDefault = this.USER_SETTINGS.settings.projectName;
        const projectsFound = this.USER_SETTINGS.projects.filter((data) => {
            return data.name === projectCodeDefault ? true : false;
        });


        // Check uniqueness.
        if (projectsFound.length === 1) {
            // Found one happy scenario.
            this.projectFound = projectsFound[0];
        } else if (projectsFound.length === 0) {
            console.error('More then one projects has the same code or none where found.>', projectsFound);
            if (this.USER_SETTINGS.projects.length === 0) {
                console.error('You have to create a project first');
                this.errorMessage = 'App contains 0 projects';
            } else { // There are some projects but default one not is not set, take first one.
                this.projectFound = this.USER_SETTINGS.projects[0];
                // Correct and make first one found the default one.
                this.USER_SETTINGS.settings.projectName = this.projectFound.name;
            }
        }

        const beginOfMonthDate = currentDate;
        beginOfMonthDate.date(1);
        beginOfMonthDate.hour(0);
        beginOfMonthDate.second(0);
        beginOfMonthDate.minute(0);
        console.log(`beginOfMonthDate>`, beginOfMonthDate.format('LLLL'));
        console.log(`weekday>`, beginOfMonthDate.weekday()); // 6 == zondag.


        // TODO IDSME set settings from correct project in newly generated WorkedPeriod Objects
        for (let n = 0; n < this.periods.length; n++) {
            // TODO IDSME Date of 0 Day of Month
            const dayOfWeek = (n + beginOfMonthDate.weekday()) % 7;
            console.log(`Mod 7 of ${dayOfWeek} `, this.USER_SETTINGS.settings['workDays'][dayOfWeek]);

            if (this.USER_SETTINGS.settings['workDays'][dayOfWeek]) {

                // TODO IDSME Add a constructor to add just two objects.
                console.log(`Month of year:`, currentDate.month());
                console.log(`Year:`, currentDate.year());

                this.periods[n] = new WorkedPeriod(this.projectFound.name, this.projectFound.clientCode, this.USER_SETTINGS.settings.hoursPerDay, this.projectFound.rate, n + 1, currentDate.month() + 1, currentDate.year());
            } else { // It is weekend on none working day.
                this.periods[n] = new WorkedPeriod(this.projectFound.name, this.projectFound.clientCode, this.USER_SETTINGS.settings.hoursPerDay, this.projectFound.rate, n + 1, currentDate.month() + 1, currentDate.year());
                HoursMadeHelper.convertDefaultFreePeriod(this.periods[n]);
            }
        }
    }
}
