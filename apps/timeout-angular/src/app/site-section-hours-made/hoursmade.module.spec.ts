import { HoursmadeModule } from './hoursmade.module';

describe('HoursmadeModule', () => {
  let hoursmadeModule: HoursmadeModule;

  beforeEach(() => {
    hoursmadeModule = new HoursmadeModule();
  });

  it('should create an instance', () => {
    expect(hoursmadeModule).toBeTruthy();
  });
});
