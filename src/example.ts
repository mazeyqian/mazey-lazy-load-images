import {
  lazyLoadImages
 } from './index';

/*
https://i.mazey.net/icon/sizes/200x200.jpg
https://i.mazey.net/icon/sizes/200x400.jpg
https://i.mazey.net/icon/sizes/400x200.jpg
https://i.mazey.net/icon/sizes/600x200.jpg
https://i.mazey.net/icon/sizes/800x600.jpg
*/

lazyLoadImages({
  images: [ // Data contains images.
    {
      name: 'Example1',
      img: [
        'https://i.mazey.net/icon/sizes/600x200.jpg',
        'https://i.mazey.net/icon/sizes/200x400.jpg',
        'https://i.mazey.net/icon/sizes/400x200.jpg',
        'https://i.mazey.net/icon/sizes/600x200.jpg',
      ]
    },
    {
      name: 'Example2',
      img: [
        'https://i.mazey.net/icon/sizes/800x600.jpg',
        'https://i.mazey.net/icon/sizes/200x400.jpg',
      ]
    },
  ],
  container: '.box', // A String can be used by `document.querySelector()`, such as: `.box` or `#entry-content`.
  defaultImg: 'https://i.mazey.net/icon/sizes/200x200.jpg', // Default load image.
});
