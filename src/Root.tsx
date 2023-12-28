import "@tamagui/core/reset.css";
import "@tamagui/polyfill-dev";

import config from "./tamagui.config";
import TestComponent from "./TestComponent";
import { TamaguiProvider } from "tamagui";

export const Root = () => {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <TestComponent />
    </TamaguiProvider>
  );
};
