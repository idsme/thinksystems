import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTimeSheetComponent } from './page-time-sheet/page-time-sheet.component';
import { TimeSheetItemComponent } from './page-time-sheet/time-sheet-item/time-sheet-item.component';
import { HeaderComponent } from './page-time-sheet/header/header.component';
import { FooterComponent } from './page-time-sheet/footer/footer.component';
import { TotalsComponent } from './page-time-sheet/totals/totals.component';
import { ActionMenuComponent } from './page-time-sheet/action-menu/action-menu.component';
import {SharedModule} from '../../shared/shared.module';
import { DayHoursTotalComponent } from './page-time-sheet/day-hours-total/day-hours-total.component';
import { PageTodaysDetailsComponent } from './page-todays-details/page-todays-details.component';
import {SharedUtilsModule} from '../../shared/shared-utils.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedUtilsModule,
  ],
  declarations: [PageTimeSheetComponent, TimeSheetItemComponent, HeaderComponent, FooterComponent, TotalsComponent, ActionMenuComponent, DayHoursTotalComponent, DayHoursTotalComponent, PageTodaysDetailsComponent]
})
export class HoursmadeModule { }
