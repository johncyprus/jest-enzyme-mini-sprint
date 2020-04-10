import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

/* Configures Enzyme with the EnzymeAdapter, which allows Enzyme to adapt to React. */
Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true,
});
