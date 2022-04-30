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
export declare function lazyLoadImages({ images, container, defaultImg }?: {
    images?: {
        name: string;
        img: string[];
    }[] | undefined;
    container?: string | undefined;
    defaultImg?: string | undefined;
}): boolean;
//# sourceMappingURL=index.d.ts.map