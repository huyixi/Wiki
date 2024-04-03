# Frontend Performance Optimization

## Image

- Image Lazy-load
- Use WebP Format Image: Translate image to WebP format
  - [Intro](https://developers.google.com/speed/webp)
  - Translate all files in folder to Webp format
    ```
    find /path/to/input_folder -type f \( -iname \*.jpg -o -iname \*.jpeg -o -iname \*.png \) -exec sh -c 'cwebp "$1" -o "/path/to/output_folder/$(basename "$1" | sed "s/\.[^\.]*$/.webp/")"' _ {} \;
    ```
- Use the srcset attribute of the <img> tag to define a list of image sources for different screen sizes. Such as
  ```
  <img src="image.jpg" srcset="image-320w.jpg 320w, image-480w.jpg 480w, image-800w.jpg 800w" sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px" alt="image description">
  ```
