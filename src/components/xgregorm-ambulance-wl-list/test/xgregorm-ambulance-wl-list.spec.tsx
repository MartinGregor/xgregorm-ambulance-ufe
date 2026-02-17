import { newSpecPage } from '@stencil/core/testing';
import { XgregormAmbulanceWlList } from '../xgregorm-ambulance-wl-list';

describe('xgregorm-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XgregormAmbulanceWlList],
      html: `<xgregorm-ambulance-wl-list></xgregorm-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xgregorm-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xgregorm-ambulance-wl-list>
    `);
  });
});
