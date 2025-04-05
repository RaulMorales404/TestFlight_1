module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@views': './src/views',
            '@navigation':'./src/navigation',
            '@services': './src/services',
            '@api': './src/api',
            '@helpers': './src/helpers',
            '@store': './src/store',
            '@assets': './src/assets',
            '@hooks': './src/hooks',
            '@models': './src/models',
            '@viewmodels': './src/viewmodels',
            '@navigation': './src/navigation',
          },
       
      },
    ],

    'react-native-reanimated/plugin', // Este plugin debe estar al final.
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-class-properties', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }],
  ],
};
