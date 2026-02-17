import { newSpecPage } from '@stencil/core/testing';
import { XgregormAmbulanceWlList } from '../xgregorm-ambulance-wl-list';

describe('xgregorm-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XgregormAmbulanceWlList],
      html: `<xgregorm-ambulance-wl-list></xgregorm-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as XgregormAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);

  });
});
