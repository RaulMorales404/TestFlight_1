module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@services':'./src/services',
          '@api':'./src/api',
          '@helpers':'./src/helpers',
          '@assets': './src/assets',
          // Agrega más alias según sea necesario
        },
      },
    ],
 
    'react-native-reanimated/plugin', // Este plugin debe estar al final.
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-class-properties', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }],
  ],
};
 