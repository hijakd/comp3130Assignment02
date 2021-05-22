import React from "react";
import renderer from "react-test-renderer";
// import { jest } from "@jest/globals";

import AppButton from "./components/AppButton";
// import AppCard from "./components/AppCard";
import AppScreen from "./components/AppScreen";
import AppText from "./components/AppText";
import AppColors from "./configs/AppColors";


/** trivial test to prove testing is running */
test("trivially true", () => {
  expect(1).toBe(1);
});

/** simple test rendering of AppText without props */
test("AppText will render", () => {
  const testVar = renderer.create(<AppText />).toJSON();
  console.log(testVar);
});

/** test rendering of AppText without supplied text */
test("AppText will render with props no text", ()=> {
  const json = renderer.create(<AppText/>).toJSON();
  // console.log(json.props.style);
  expect(json.props.style[0].fontSize).toBe(20);
  expect(json.props.style[0].fontFamily).toBe("Avenir-Roman");
});

/** test rendering of AppText containing supplied text */
test("AppText will render with props & text", ()=> {
  const json = renderer.create(<AppText>Its all Cactus</AppText>).toJSON();
  expect(json.props.style[0].fontSize).toBe(20);
  expect(json.props.style[0].fontFamily).toBe("Avenir-Roman");
  expect(json.children.includes("Its all Cactus"));
});

/**  test rendering of AppButton */
describe('render custom Button component without style props', ()=> {
  const wrapper = renderer.create(<AppButton title="Test"/>);
  it('Should render', ()=> {
    expect(wrapper.toJSON()).toBeTruthy();
  });
});

/** test rendering of AppButton with style props supplied */
describe('render custom Button component with style props', ()=> {
  const wrapper = renderer.create(<AppButton title="Test"/>);
  const styles = wrapper.toJSON().props.style;
  const {title, color, textColor, cellPadding} = styles;

  it('Should render', ()=> {
    expect(wrapper.toJSON()).toBeTruthy();
  });

  it('Should have "primaryColor" backgroundColor set', ()=> {
    expect(color).toBe(AppColors.primaryColor);
  });
});

// /**  test rendering of AppCard */
// describe('Test custom Card component', ()=> {
//   const testVar = renderer.create(<AppCard title="Test"/>);
//   it('Should render', ()=> {
//     expect(testVar.toJSON()).toBeTruthy();
//   });
// });

/**  test rendering of AppScreen */
describe('render AppScreen component', ()=> {
  const wrapper = renderer.create(<AppScreen/>);
  it('Should render', ()=> {
    expect(wrapper.toJSON()).toBeTruthy();
  });
});

/** Snapshot of AppScreen component */
it('Snapshot of AppScreen component', ()=> {
  const tree = renderer.create(<AppScreen/>).toJSON();
  expect(tree).toMatchSnapshot();
});

