# React star review
[![version](https://img.shields.io/npm/v/react-star-review.svg?style=flat-square)](http://npm.im/react-star-review)
[![downloads](https://img.shields.io/npm/dm/react-star-review.svg?style=flat-square)](http://npm-stat.com/charts.html?package=react-star-review&from=2018-04-03)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![travis build](https://img.shields.io/travis/SahajR/react-star-review.svg?style=flat-square)](https://travis-ci.org/SahajR/react-star-review)

A simple and customizable rating component for React
![Banner](assets/demo.png "React star rating demo")

View the [demo](https://reviews.demos.sahajr.com).

## Install
```js
npm install react-star-review
// or
yarn add react-star-review
```

## Props

| Prop | Type | Description | Default |
| ------ | ------ | ------ | ------ |
| size | Number | Size of a star in px | 30 |
| rating | Number | Initial rating  | 0 |
| rtl | Boolean | Rating behaves in right-to-left direction | false |
| interactive | Boolean | If true, users can change a rating. Must also provide `onRatingChanged` | false |
| onRatingChanged | Function | Callback when rating changes | null |
| icon | String | A valid CSS Basic shape to be used as a mask for ratings | Star |
| count | Number | Number of stars, aka the scale | 5 |
| borderThickness | Number | The stars' border thickness | 2 |
| filledColor | String | Color used to fill the star | ![#FFC82C](https://placehold.it/50x25/FFC82C/000000?text=FFC82C) |
| clearColor | String | Color used to indicate the empty areas of the star | ![#FFF](https://placehold.it/50x25/FFF/000000?text=White) |
| borderColor | String | The stars' border color | ![#E4B50E](https://placehold.it/50x25/E4B50E/000000?text=E4B50E) |
| hoverColor | String | Color used to fill when a user hovers over them | ![#FBDC84](https://placehold.it/50x25/FBDC84/000000?text=FBDC84) |


## Todos
- [x] Add support for right-to-left
- [x] Add support for custom icons
