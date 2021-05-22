import React from "react";
import renderer from "react-test-renderer";
// import { jest } from "@jest/globals";

import AppButton from "./components/AppButton";
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
test("AppText will render", ()=> {
  const testVar = renderer.create(<AppText/>).toJSON();
  // console.log(json.props.style);
  expect(testVar.props.style[0].fontSize).toBe(20);
  expect(testVar.props.style[0].fontFamily).toBe("Avenir-Roman");
});

/** test rendering of AppText containing supplied text */
test("AppText will render", ()=> {
  const testVar = renderer.create(<AppText>Its all Cactus</AppText>).toJSON();
  expect(testVar.props.style[0].fontSize).toBe(20);
  expect(testVar.props.style[0].fontFamily).toBe("Avenir-Roman");
  expect(testVar.children.includes("Its all Cactus"));
});

/**  test rendering of AppButton */
describe('Test custom Button component', ()=> {
  const testVar = renderer.create(<AppButton title="Test"/>);
  it('Should render', ()=> {
    expect(testVar.toJSON()).toBeTruthy();
  });
});

/** test rendering of AppButton with style props supplied */
describe('Test custom Button component', ()=> {
  const testVar = renderer.create(<AppButton title="Test"/>);
  const styles = testVar.toJSON().props.style;
  const {title, color, textColor, cellPadding} = styles;

  it('Should render', ()=> {
    expect(testVar.toJSON()).toBeTruthy();
  });

  it('Should have "primaryColor" backgroundColor set', ()=> {
    expect(color).toBe(AppColors.primaryColor);
  });
});

/** Snapshot of AppScreen component */
it('renders correctly', ()=> {
  const tree = renderer.create(<AppScreen/>).toJSON();
  expect(tree).toMatchSnapshot();
});

