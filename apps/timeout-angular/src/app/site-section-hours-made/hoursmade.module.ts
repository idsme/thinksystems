import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageWorkingPeriodComponent } from './page-working-period/page-working-period.component';
import { WorkedPeriodItemComponent } from './page-working-period/worked-period-item/worked-period-item.component';
import { WorkedPeriodHeaderComponent } from './page-working-period/worked-period-header/worked-period-header.component';
import { WorkedPeriodFooterComponent } from './page-working-period/worked-period-footer/worked-period-footer.component';
import { WorkedPeriodTotalsComponent } from './page-working-period/worked-period-totals/worked-period-totals.component';
import { ActionMenuComponent } from './page-working-period/action-menu/action-menu.component';
import {SharedModule} from '../../shared/shared.module';
import { WorkPeriodHoursTotalComponent } from './page-working-period/work-period-hours-total/work-period-hours-total.component';
import { PageTodayDetailsComponent } from './page-today-details/page-today-details.component';
import {SharedUtilsModule} from '../../shared/shared-utils.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedUtilsModule,
  ],
  declarations: [PageWorkingPeriodComponent, WorkedPeriodItemComponent, WorkedPeriodHeaderComponent, WorkedPeriodFooterComponent, WorkedPeriodTotalsComponent, ActionMenuComponent, WorkPeriodHoursTotalComponent, WorkPeriodHoursTotalComponent, PageTodayDetailsComponent]
})
export class HoursmadeModule { }
