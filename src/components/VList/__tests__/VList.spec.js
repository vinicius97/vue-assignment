import { shallowMount } from "@vue/test-utils";
import VList from "../Vlist.vue";

describe("VList component", () => {
  it("should render with empty list", () => {
    const wrapper = shallowMount(VList);
    wrapper.setProps({ list: [] });
    expect(wrapper.find(".v-list").exists()).toBe(true);
    expect(wrapper.find(".v-list__item").exists()).toBe(false);
  });

  it("should render a list of elements", () => {
    const list = [{
      logo: 'images/companies/century.png',
      title: 'Company A',
      description: 'Cloud Orchestration',
    },
    {
      logo: '/images/companies/google.png',
      title: 'Company B',
      description: 'Cloud Orchestration',
    }];

    const wrapper = shallowMount(VList, {
      propsData: {
        list
      }
    });

    expect(wrapper.find(".v-list").exists()).toBe(true);
    expect(wrapper.find(".v-list__item").exists()).toBe(true);
    expect(wrapper.find(".v-list__item__logo").exists()).toBe(true);
    expect(wrapper.find(".v-list__item__text").exists()).toBe(true);
    expect(wrapper.find(".v-list__item__text__title").exists()).toBe(true);
    expect(wrapper.find(".v-list__item__text__description").exists()).toBe(true);
    expect(wrapper.find(".v-list__item__text__title").text()).toBe(list[0].title);
  });
});
