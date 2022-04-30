/* Function */

import { throttle, addInlineStyle } from 'mazey';

/**
 * @method lazyLoadImages
 * @description Lazey load images.
 * @param {Array} images Data contains images.
 * [
    {
      name: 'Example1',
      img: [
        'https://i.mazey.net/asset/default/suzumiya-haruhi1.jpg',
      ]
    }
   ]
 * @param {String} container A String can be used by `document.querySelector()`, such as: `.box` or `#entry-content`.
 * @param {String} defaultImg Default load image, such as: `https://i.mazey.net/asset/default/201909170739.jpg`.
 * @return {Boolean} true or false
 */
export function lazyLoadImages({images = [{ name: '', img: [''] }], container = '', defaultImg = ''} = {}): boolean {
  const entryContent = document.querySelector(container);
  const items = images.reduce((outerItems, { name = '', img = [] }, index) => {
    // Parse image list
    const imgItems = img.reduce((innerItems, imgSrc) => {
      innerItems += `
        <div><img src="${defaultImg}" data-src="${imgSrc}" class="m-img-item" loading="lazy"></div>
      `;
      return innerItems;
    }, '');
    // Parse item list
    outerItems += `
      <div>
        <div>
          <span>${index + 1}. ${name}</span>
        </div>
        <div class="m-img">
          ${imgItems}
        </div>
      </div>
    `;
    return outerItems;
  }, '');
  // Content
  const box = `
    <div class="m-box">
      ${items}
    </div>
  `;
  if (entryContent) {
    entryContent.innerHTML = box;
    // Lazy load
    const lazyImages = [...document.querySelectorAll('.m-img-item') as any];
    const inAdvance = 300;
    const lazyLoad = () => {
      lazyImages.forEach(image => {
        if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
          image.src = image.dataset.src;
        }
      });
    };
    // Listen
    window.addEventListener('scroll', throttle(lazyLoad, 50, {}));
    window.addEventListener('resize', throttle(lazyLoad, 50, {}));
    // Load default image first.
    const imgInstance = new Image();
    imgInstance.onload = () => {
      Promise.resolve().then(() => {
        lazyLoad();
      });
    };
    imgInstance.src = defaultImg;
  } else {
    return false;
  }
  addInlineStyle({
    inlineStyle: `
      .m-box {
        box-sizing: border-box;
      }
      .m-img {
        column-count: 2;
        font-size: 0;
      }
      .m-img-item {
        width: 100%;
        min-height: 50px;
        border-radius: 4px;
      }
    `,
    id: 'test',
  });
  return true;
}
