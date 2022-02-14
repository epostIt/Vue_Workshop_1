import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import Vue from 'vue';

Vue.config.silent = true;

describe('HelloWorld.vue', () => {
	it('renders props.msg when passed', () => {
		const msg = 'Workshop 1';
		const wrapper = shallowMount(HelloWorld, {
			propsData: { msg },
		});
		expect(wrapper.text()).toMatch(msg);
	});
});
