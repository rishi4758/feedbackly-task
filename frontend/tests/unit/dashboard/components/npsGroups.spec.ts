import { shallowMount, VueWrapper } from '@vue/test-utils';

import NpsGroups from '@/components/npsGroups.vue';

describe('Testing NpsGroups component ', () => {
  let wrapper: VueWrapper<any>;
  beforeAll(() => {
    wrapper = shallowMount(NpsGroups, {});
    wrapper.setData({
      npsGroups: '',
      isLoading: false,
      disable: false,
    });
  });

  it('render NPS Groups title correctly', () => {
    expect(wrapper.find('h2').text()).toEqual('NPS Groups');
  });

  it('render correct title if NPS score is empty', () => {
    expect(wrapper.find('.h-150>div').exists()).toBeFalsy();
    expect(wrapper.find('h3').text()).toEqual('No data yet');
  });

  it('render correct NPS score if it is not empty', async () => {
    await wrapper.setData({
      npsGroups: { promoters: 4, passives: 5, detractors: 6 },
      isLoading: true,
      disable: true,
    });

    expect(wrapper.find('.h-150>div').exists()).toBeTruthy();
    expect(wrapper.findAll('.h-150>div>h3').length).toEqual(3);
  });

  it('render Button component  correctly in NpsGroups', () => {
    const components = wrapper.findAllComponents({ name: 'Button' });
    expect(components.length).toEqual(1);
  });
});
