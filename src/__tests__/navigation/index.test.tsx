import { shallow } from "enzyme";
import React from "react";
import { home } from "../../constants/routesConst";
import Navigation from "../../navigation";

const wrapper = shallow(<Navigation />);
describe("<Navigation />", () => {
  it("should render successfully", () => {
    expect(wrapper).toBeDefined();
  });

  it("should contain Routes", () => {
    expect(wrapper.find("Routes")).toHaveLength(1);
    expect(wrapper.find("Route").prop('path')).toBe(home)
  });
});
