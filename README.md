# Mazey-Lazy-Load-Images

[![NPM version][npm-image]][npm-url]
[![l][l-image]][l-url]

[npm-image]: https://img.shields.io/npm/v/mazey-lazy-load-images
[npm-url]: https://npmjs.org/package/mazey-lazy-load-images
[l-image]: https://img.shields.io/npm/l/mazey-lazy-load-images
[l-url]: https://github.com/mazeyqian/mazey-lazy-load-images

Lazy load images.

## Install

You can get Mazey-Lazy-Load-Images via [npm](https://www.npmjs.com/package/mazey-lazy-load-images).

```
npm install mazey-lazy-load-images --save
```

## Usage

```
import { lazyLoadImages } from 'mazey-lazy-load-images';

lazyLoadImages({
  images: [ // It's data for images.
    {
      name: 'Example1',
      img: [
        'https://i.mazey.net/asset/default/suzumiya-haruhi1.jpg',
        'https://blog.mazey.net/wp-content/uploads/2021/12/1495120456257031.png',
        'https://blog.mazey.net/wp-content/uploads/2022/03/2B6D5045-E4CF-4B00-BAD7-8FC93FB9DDFE.png',
        'https://blog.mazey.net/wp-content/uploads/2022/03/D13A884F-2898-486E-BFA3-D14E3AAF9988.png',
      ]
    },
    {
      name: 'Example2',
      img: [
        'https://blog.mazey.net/wp-content/uploads/2021/12/EmotionormalBanner-534x228-1.jpg',
        'https://blog.mazey.net/wp-content/uploads/2022/03/Arkwrights-Cotton-Mills-by-night-1790s.jpg',
      ]
    },
  ],
  container: '.box', // A String can be used by `document.querySelector()`, such as: `.box` or `#entry-content`.
  defaultImg: 'https://i.mazey.net/asset/default/201909170739.jpg', // Default load image.
});
```

DOM

```
<div class="box">
  <div class="m-box">
    
    <div>
      <div>
        <span>1. Example1</span>
      </div>
      <div class="m-img">
        
        <div><img src="https://i.mazey.net/asset/default/suzumiya-haruhi1.jpg" data-src="https://i.mazey.net/asset/default/suzumiya-haruhi1.jpg" class="m-img-item" loading="lazy"></div>

        <div><img src="https://blog.mazey.net/wp-content/uploads/2021/12/1495120456257031.png" data-src="https://blog.mazey.net/wp-content/uploads/2021/12/1495120456257031.png" class="m-img-item" loading="lazy"></div>
      
        <div><img src="https://blog.mazey.net/wp-content/uploads/2022/03/2B6D5045-E4CF-4B00-BAD7-8FC93FB9DDFE.png" data-src="https://blog.mazey.net/wp-content/uploads/2022/03/2B6D5045-E4CF-4B00-BAD7-8FC93FB9DDFE.png" class="m-img-item" loading="lazy"></div>
      
        <div><img src="https://blog.mazey.net/wp-content/uploads/2022/03/D13A884F-2898-486E-BFA3-D14E3AAF9988.png" data-src="https://blog.mazey.net/wp-content/uploads/2022/03/D13A884F-2898-486E-BFA3-D14E3AAF9988.png" class="m-img-item" loading="lazy"></div>
    
      </div>
    </div>
  
    <div>
      <div>
        <span>2. Example2</span>
      </div>
      <div class="m-img">
        
        <div><img src="https://blog.mazey.net/wp-content/uploads/2021/12/EmotionormalBanner-534x228-1.jpg" data-src="https://blog.mazey.net/wp-content/uploads/2021/12/EmotionormalBanner-534x228-1.jpg" class="m-img-item" loading="lazy"></div>
      
        <div><img src="https://blog.mazey.net/wp-content/uploads/2022/03/Arkwrights-Cotton-Mills-by-night-1790s.jpg" data-src="https://blog.mazey.net/wp-content/uploads/2022/03/Arkwrights-Cotton-Mills-by-night-1790s.jpg" class="m-img-item" loading="lazy"></div>
    
      </div>
    </div>
  
  </div>
</div>
```

## Develop

```
# dev
npm run dev

# build
npm run build

# documentation
npm run docs
```
