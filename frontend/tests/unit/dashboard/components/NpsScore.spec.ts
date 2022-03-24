import { shallowMount, VueWrapper } from '@vue/test-utils';

import NpsScore from '@/components/NpsScore.vue';

describe('Testing NpsScore component ', () => {
  let wrapper: VueWrapper<any>;
  beforeAll(() => {
    wrapper = shallowMount(NpsScore, {});
    wrapper.setData({
      npsScore: '',
      isLoading: false,
      disable: false,
    });
  });

  it('render NPS Score title correctly', () => {
    expect(wrapper.find('h2').text()).toEqual('NPS Score');
  });

  it('render correct title if NPS score is empty', () => {
    expect(wrapper.find('.h-150>div').exists()).toBeFalsy();
    expect(wrapper.find('h3').text()).toEqual('No data yet');
  });

  it('render correct NPS score if it is not empty', async () => {
    await wrapper.setData({
      npsScore: { score: 4 },
      isLoading: true,
      disable: true,
    });

    expect(wrapper.find('.h-150>div').exists()).toBeTruthy();
    expect(wrapper.find('.h-150>div>h2').text()).toEqual('4');
  });

  it('render Button component  correctly in NpsScore', () => {
    const components = wrapper.findAllComponents({ name: 'Button' });
    expect(components.length).toEqual(1);
  });
});
