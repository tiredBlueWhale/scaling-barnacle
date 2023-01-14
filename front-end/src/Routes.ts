import { NavigatorScreenParams } from "@react-navigation/native";
import { Child } from "@models";

export type ScannerParamList = {
  Camera: undefined;
}

export type ChildrenStackParamList = {
  List: undefined;
  Detail: Child;
};

export type OrganizationStackParamList = {
  List: undefined;
};

export type SettingsStackParamList = {
  List: undefined;
};

export type HomeTabParamList = {
  Scanner: NavigatorScreenParams<ScannerParamList>;
  Children: NavigatorScreenParams<ChildrenStackParamList>;
  Organization: NavigatorScreenParams<OrganizationStackParamList>;
  Settings: NavigatorScreenParams<SettingsStackParamList>;
}

export type AppStackParamList = {
  Home: NavigatorScreenParams<HomeTabParamList>;
  Login: any
}

export const linking = {
  prefixes: [
    "http://127.0.0.1:5173/"
  ],
  config: {
    screens: {
      Home: {
        path: '',
        screens: {
          Scanner: 'scanner',
          Children: {
            path: 'children',
            screens: {
              List: '',
              Detail: 'detail',
            }
          },
          Organization: 'organization',
          Settings: 'settings',
        },
      },
      Login: 'login',
    },
  },
};