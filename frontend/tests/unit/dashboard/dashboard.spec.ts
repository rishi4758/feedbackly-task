import { shallowMount, VueWrapper } from '@vue/test-utils';

import Dashboard from '@/views/dashboard.vue';

describe('Testing Dashboard page correctly ', () => {
  let wrapper: VueWrapper<any>;
  beforeAll(() => {
    wrapper = shallowMount(Dashboard);
  });

  it('render Dashboard title correctly', () => {
    expect(wrapper.find('h1').text()).toEqual('Analytics dashboard');
  });

  it('render NpsGroups component correctly', () => {
    const components = wrapper.findAllComponents({ name: 'NpsGroups' });
    expect(components.length).toEqual(1);
  });

  it('render NpsScore component correctly', () => {
    const components = wrapper.findAllComponents({ name: 'NpsScore' });
    expect(components.length).toEqual(1);
  });

  it('render EmoticanAverage component correctly', () => {
    const components = wrapper.findAllComponents({ name: 'EmoticonAverage' });
    expect(components.length).toEqual(1);
  });
});
