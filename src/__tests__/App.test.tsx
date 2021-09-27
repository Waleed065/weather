import { shallow } from "enzyme";
import React from "react";
import App from "../App";
import { store } from "../store";

const wrapper = shallow(<App />);
describe("<App />", () => {
  it("should render successfully", () => {
    expect(wrapper).toBeDefined();
  });

  it("should contain redux provider", () => {
    expect(wrapper.find("Provider")).toHaveLength(1)
    expect(wrapper.find("Provider").prop('store')).toBe(store)
  });
  it("should contain BrowserRouter", () => {
    expect(wrapper.find("BrowserRouter")).toHaveLength(1)
  });
  it("should contain ScrollToTop", () => {
    expect(wrapper.find("ScrollToTop")).toHaveLength(1)
  });
  it("should contain Navigation", () => {
    expect(wrapper.find("Navigation")).toHaveLength(1)
  });
});
