# svgicon2font-webpack-plugin
webpack plugin for parse svgicon to webfont

## Usage
install
```bash
npm install svgicon2font-webpack-plugin
# or
yarn add svgicon2font-webpack-plugin
```
example
```typescript
const svgIcon2Font = require('svgicon2font-webpack-plugin')
// add in your webpack config file plugins list

/**
 * @param {SVGIcon2FontConfig} initinalConfig
 *
 * @type {SVGIcon2FontConfig}
 * export interface SVGIcon2FontConfig {
 *   entry: string;  // you svg icon path
 *   output: string;  // css file write position
 *   iconCssFileName?: string;  // css file name @default('icon.css')
 *   fontName: string;  // font face name @default('iconfont')
 *   iconPrefix?: string;  // icon class prefix
 *   inline?: boolean;  // use base64 string in css file or write alone font file
 *   formats?: FontFormat[];  // font format you need, support eot ttf woff woff2
 *   startUnicode?: number;  // icon start unicode
 * }
 */
new SVGIcon2FontWebpackPlugin(initinalConfig: SVGIcon2FontConfig)

```
you can create a emtry css file for write css content, and import this file in you main css file.
when your project build, while write the css content to the file which you set.
then you can use the icon class name in your project anywhere.

## Feature

## Contact

- [Zhongqc](mailto:zhongqc7@gmail.com)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Zhongqc
