module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@components": "./src/components",
          "@models": "./src/models",
          "@screens": "./src/screens",
        },
      },
    ],
  ],
};
