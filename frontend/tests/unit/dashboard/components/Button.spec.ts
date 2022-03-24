import { shallowMount } from '@vue/test-utils';

import Button from '@/components/Button.vue';

describe('Testing different states of Button components ', () => {
  it('render submit text if user has not pressed the button', () => {
    const wrapper = shallowMount(Button, {
      props: {
        title: 'submit',
        onClick: jest.fn(),
        disable: false,
        loading: false,
      },
    });

    expect(wrapper.find('.btn').text()).toEqual('submit');
  });

  it('render loading text if user has pressed the button but data is not loaded', () => {
    const wrapper = shallowMount(Button, {
      props: {
        title: 'submit',
        onClick: jest.fn(),
        disable: true,
        loading: true,
      },
    });

    expect(wrapper.find('.btn').text()).toEqual('Loading....');
  });

  it('render data loaded text if user has pressed the button and data has been loaded', () => {
    const wrapper = shallowMount(Button, {
      props: {
        title: 'submit',
        onClick: jest.fn(),
        disable: true,
        loading: false,
      },
    });

    expect(wrapper.find('.btn').text()).toEqual('Data loaded!');
  });
});
