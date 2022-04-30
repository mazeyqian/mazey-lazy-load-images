import {
  lazyLoadImages
 } from './index';

// 数字测试
// console.log('Test:', foo('foo', 'bar'));
/*
https://blog.mazey.net/wp-content/uploads/2022/03/Arkwrights-Cotton-Mills-by-night-1790s.jpg
https://blog.mazey.net/wp-content/uploads/2022/04/68747470733a2f2f7261772e6769746875622e636f6d2f66656e676d6b322f6b6f612d67756964652f6d61737465722f6f6e696f6e2e706e67.png
https://blog.mazey.net/wp-content/uploads/2022/03/2B6D5045-E4CF-4B00-BAD7-8FC93FB9DDFE.png
https://blog.mazey.net/wp-content/uploads/2022/03/D13A884F-2898-486E-BFA3-D14E3AAF9988.png
https://blog.mazey.net/wp-content/uploads/2022/01/bg-psc-202201030212-2880x1136-1-scaled.jpg
https://blog.mazey.net/wp-content/uploads/2021/12/EmotionormalBanner-534x228-1.jpg
https://blog.mazey.net/wp-content/uploads/2021/12/ins-20210409-pwa-w-400.jpg
https://blog.mazey.net/wp-content/uploads/2021/12/1495120456257031.png

*/

lazyLoadImages({
  images: [
    {
      name: 'Example1',
      img: [
        'https://i.mazey.net/asset/default/suzumiya-haruhi1.jpg',
        'https://blog.mazey.net/wp-content/uploads/2022/01/bg-psc-202201030212-2880x1136-1-scaled.jpg',
        'https://blog.mazey.net/wp-content/uploads/2022/03/2B6D5045-E4CF-4B00-BAD7-8FC93FB9DDFE.png',
      ]
    },
    {
      name: 'Example1',
      img: [
        'https://blog.mazey.net/wp-content/uploads/2022/03/Arkwrights-Cotton-Mills-by-night-1790s.jpg',
        'https://blog.mazey.net/wp-content/uploads/2022/01/bg-psc-202201030212-2880x1136-1-scaled.jpg',
      ]
    },
    {
      name: 'Example1',
      img: [
        'https://blog.mazey.net/wp-content/uploads/2022/04/68747470733a2f2f7261772e6769746875622e636f6d2f66656e676d6b322f6b6f612d67756964652f6d61737465722f6f6e696f6e2e706e67.png',
        'https://blog.mazey.net/wp-content/uploads/2022/01/bg-psc-202201030212-2880x1136-1-scaled.jpg',
        'https://blog.mazey.net/wp-content/uploads/2022/01/bg-psc-202201030212-2880x1136-1-scaled.jpg',
      ]
    },
    {
      name: 'Example1',
      img: [
        'https://blog.mazey.net/wp-content/uploads/2022/03/2B6D5045-E4CF-4B00-BAD7-8FC93FB9DDFE.png',
      ]
    },
    {
      name: 'Example1',
      img: [
        'https://blog.mazey.net/wp-content/uploads/2022/03/D13A884F-2898-486E-BFA3-D14E3AAF9988.png',
        'https://blog.mazey.net/wp-content/uploads/2022/01/bg-psc-202201030212-2880x1136-1-scaled.jpg',
      ]
    },
    {
      name: 'Example1',
      img: [
        'https://blog.mazey.net/wp-content/uploads/2021/12/EmotionormalBanner-534x228-1.jpg',
        'https://blog.mazey.net/wp-content/uploads/2021/12/ins-20210409-pwa-w-400.jpg',
        'https://blog.mazey.net/wp-content/uploads/2021/12/1495120456257031.png',
        'https://blog.mazey.net/wp-content/uploads/2022/03/D13A884F-2898-486E-BFA3-D14E3AAF9988.png',
        'https://blog.mazey.net/wp-content/uploads/2022/01/bg-psc-202201030212-2880x1136-1-scaled.jpg',
      ]
    },
    {
      name: 'Example1',
      img: [
        'https://blog.mazey.net/wp-content/uploads/2021/12/EmotionormalBanner-534x228-1.jpg',
        'https://blog.mazey.net/wp-content/uploads/2021/12/ins-20210409-pwa-w-400.jpg',
        'https://blog.mazey.net/wp-content/uploads/2021/12/1495120456257031.png',
      ]
    },
  ],
  container: '.box',
  defaultImg: 'https://i.mazey.net/asset/default/201909170739.jpg'
});
