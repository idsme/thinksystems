import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MasterDataService} from '../../shared/masterdata.service';
import {LocalStorageService} from './local-storage.service';
import { User } from '../api/user';

@Component({
  selector: 'ids-page-user-profile',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public userAppConfig!: User;
  public userConfigForm = this.setupFormBuilderFormControls();

    constructor(public masterDataService: MasterDataService, public localStorageService: LocalStorageService, public fb: FormBuilder) {
  }

  ngOnInit() {
    this.masterDataService.getUser().subscribe((data: User) => {
      this.userAppConfig = data;
        console.log('retrieved user data from user.json:>', data);
        this.localStorageService.addUserConfigToLocalStorage(data);

        // Override default form settings if data contains anything
        console.log('userConfig Form:>', this.userConfigForm.value);
        this.userConfigForm.value.userName = this.userAppConfig.settings.userName;
        this.userConfigForm.value.hoursPerDay = this.userAppConfig.settings.hoursPerDay;
        this.userConfigForm.value.rate = this.userAppConfig.settings.rate;
        this.userConfigForm.value.projectName = this.userAppConfig.settings.projectName;
        console.log('userConfig FormUpdated:>', this.userConfigForm.value);


        console.log('workDays', this.userConfigForm.controls['workDays']);

        // this.userAppConfig.settings['workDays'][0] = this.userConfigForm.controls['workDays'].controls.ma.value;
        // this.userAppConfig.settings['workDays'][1] = this.userConfigForm.controls['workDays'].controls.di.value;
        // this.userAppConfig.settings['workDays'][2] = this.userConfigForm.controls['workDays'].controls.wo.value;
        // this.userAppConfig.settings['workDays'][3] = this.userConfigForm.controls['workDays'].controls.do.value;
        // this.userAppConfig.settings['workDays'][4] = this.userConfigForm.controls['workDays'].controls.vr.value;
        // this.userAppConfig.settings['workDays'][5] = this.userConfigForm.controls['workDays'].controls.za.value;
        // this.userAppConfig.settings['workDays'][6] = this.userConfigForm.controls['workDays'].controls.zo.value;





    });
  }

    public submit(): void {
        // Update the userAppConfig
        console.log('userConfig Form:>', this.userConfigForm.value);
        this.userAppConfig.settings.userName = this.userConfigForm.value.userName;
        this.userAppConfig.settings.hoursPerDay = this.userConfigForm.value.hoursPerDay;
        this.userAppConfig.settings.rate = this.userConfigForm.value.rate;
        this.userAppConfig.settings.projectName = this.userConfigForm.value.projectName;

        console.log('workDays', this.userConfigForm.controls['workDays']);

        // this.userAppConfig.settings['workDays'][0] = this.userConfigForm.controls['workDays'].controls.ma.value;
        // this.userAppConfig.settings['workDays'][1] = this.userConfigForm.controls['workDays'].controls.di.value;
        // this.userAppConfig.settings['workDays'][2] = this.userConfigForm.controls['workDays'].controls.wo.value;
        // this.userAppConfig.settings['workDays'][3] = this.userConfigForm.controls['workDays'].controls.do.value;
        // this.userAppConfig.settings['workDays'][4] = this.userConfigForm.controls['workDays'].controls.vr.value;
        // this.userAppConfig.settings['workDays'][5] = this.userConfigForm.controls['workDays'].controls.za.value;
        // this.userAppConfig.settings['workDays'][6] = this.userConfigForm.controls['workDays'].controls.zo.value;


        // TODO IDSME store submitted settings in Config
        console.log('Submmitted:>', this.userConfigForm.value);
  }

  private setupUserControl() {
    const result = new FormGroup({
      userName: new FormControl('D. Achterhof'),
    });
    return result;
  }

  // TODO IDSME TRY TO FIX THIS
  private setupFormControls() {
    const result = new FormGroup({
      userName: new FormControl('D. Achterhof'),
      clientName: new FormControl('EPO'),
      workDays: new FormGroup({
        ma: new FormControl(9),
        di: new FormControl(9),
        wo: new FormControl(13),
        do: new FormControl(9),
        vr: new FormControl(14),
        za: new FormControl(9),
        zo: new FormControl(9)
      })
    });
    return result;
  }

  createWeekDays(): FormGroup {
    return this.fb.group({
      ma: new FormControl(1),
      di: new FormControl(1),
      wo: new FormControl(1),
      do: new FormControl(1),
      vr: new FormControl(0),
      za: new FormControl(0),
      zo: new FormControl(0)
    });
  }

    private setupFormBuilderFormControls() {
        return this.fb.group({
            hoursPerDay: [44, Validators.required],
            rate: [100, Validators.required],
            projectName: ['Project Z', Validators.required],
            clientName: ['SomeCLient Z', Validators.required],
            userName: ['IDS. Achterhof', Validators.required],
            startTimeDay: ['9:45', Validators.required],
            workDays: this.createWeekDays()
        });
  }
}




