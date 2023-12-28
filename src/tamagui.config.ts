import { createTamagui } from "tamagui";
import { config as preset } from "@tamagui/config/v2";

const config = createTamagui(preset);

type AppConfig = typeof config;

declare module "tamagui" {
  // overrides TamaguiCustomConfig so that custom types
  // work everywhere `tamagui` is imported
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
