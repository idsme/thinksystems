import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigComponent } from './config.component';
import { ConfigService } from './config.service';
import { HttpClientModule } from '@angular/common/http';
import { MasterDataService } from '../masterdata/masterdata.service';

describe('ConfigComponent', () => {
  let component: ConfigComponent;
  let fixture: ComponentFixture<ConfigComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientModule],
        declarations: [ConfigComponent],
        providers: [ConfigService, MasterDataService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigComponent);
    console.log('Fixture:>', fixture);
    component = fixture.componentInstance;
    component = fixture.debugElement.componentInstance;
    console.log('component:>', component);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
