import "@testing-library/jest-dom";
import { beforeAll } from "vitest";

beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: () => {},
        removeListener: () => {},
      };
    };
});
