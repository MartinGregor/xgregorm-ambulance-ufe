import { newE2EPage } from '@stencil/core/testing';

describe('ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ambulance-wl-editor></ambulance-wl-editor>');

    const element = await page.find('ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
