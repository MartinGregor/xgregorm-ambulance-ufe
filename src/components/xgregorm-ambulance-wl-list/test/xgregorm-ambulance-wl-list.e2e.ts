import { newE2EPage } from '@stencil/core/testing';

describe('xgregorm-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xgregorm-ambulance-wl-list></xgregorm-ambulance-wl-list>');

    const element = await page.find('xgregorm-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
