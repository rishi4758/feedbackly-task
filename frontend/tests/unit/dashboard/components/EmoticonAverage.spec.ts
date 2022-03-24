import { shallowMount, VueWrapper } from '@vue/test-utils';

import EmoticonAverage from '@/components/EmoticonAverage.vue';

describe('Testing Emoticon Average component ', () => {
  let wrapper: VueWrapper<any>;
  beforeAll(() => {
    wrapper = shallowMount(EmoticonAverage);
    wrapper.setData({
      emoticonAverage: '',
      isLoading: false,
      disable: false,
    });
  });

  it('render Emoticon Average title correctly', () => {
    expect(wrapper.find('h2').text()).toEqual('Emoticon Average');
  });

  it('render correct title if emoticon average is empty', () => {
    expect(wrapper.find('.h-150>div').exists()).toBeFalsy();
    expect(wrapper.find('h3').text()).toEqual('No data yet');
  });

  it('render correct emoticon average if it is not empty', async () => {
    await wrapper.setData({
      emoticonAverage: { average: 12 },
      isLoading: true,
      disable: true,
    });

    expect(wrapper.find('.h-150>div').exists()).toBeTruthy();
    expect(wrapper.find('.h-150>div>h2').text()).toEqual('12');
  });

  it('render Button component  correctly in EmoticonAverage', () => {
    const components = wrapper.findAllComponents({ name: 'Button' });
    expect(components.length).toEqual(1);
  });
});
