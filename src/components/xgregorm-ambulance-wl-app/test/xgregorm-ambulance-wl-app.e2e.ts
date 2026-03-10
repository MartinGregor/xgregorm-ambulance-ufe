import { newE2EPage } from '@stencil/core/testing';

describe('xgregorm-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xgregorm-ambulance-wl-app></xgregorm-ambulance-wl-app>');

    const element = await page.find('xgregorm-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
