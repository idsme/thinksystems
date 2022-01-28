import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkingPeriodPageLayoutComponent } from './working-period-page-layout/working-period-page-layout.component';
import { WorkedPeriodItemComponent } from './working-period-page-layout/worked-period-item/worked-period-item.component';
import { WorkedPeriodHeaderComponent } from './working-period-page-layout/worked-period-header/worked-period-header.component';
import { WorkedPeriodFooterComponent } from './working-period-page-layout/worked-period-footer/worked-period-footer.component';
import { WorkedPeriodTotalsComponent } from './working-period-page-layout/worked-period-totals/worked-period-totals.component';
import { ActionMenuComponent } from './working-period-page-layout/action-menu/action-menu.component';
import {SharedModule} from '../../shared/shared.module';
import { WorkPeriodHoursTotalComponent } from './working-period-page-layout/work-period-hours-total/work-period-hours-total.component';
import { TodayComponent } from './today/today.component';
import {SharedUtilsModule} from '../../shared/shared-utils.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedUtilsModule,
  ],
  declarations: [WorkingPeriodPageLayoutComponent, WorkedPeriodItemComponent, WorkedPeriodHeaderComponent, WorkedPeriodFooterComponent, WorkedPeriodTotalsComponent, ActionMenuComponent, WorkPeriodHoursTotalComponent, WorkPeriodHoursTotalComponent, TodayComponent]
})
export class HoursmadeModule { }
