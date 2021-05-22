import React from "react";
import { renderer } from "react-test-renderer";
// import { jest } from "@jest/globals";
import {AppText} from "./components/AppText";

/** trivial test to prove testing is running */
test("trivially true", () => {
  expect(1).toBe(1);
});

test("AppText will render", () => {
  const json = renderer.create(<AppText />).toJSON();
});
