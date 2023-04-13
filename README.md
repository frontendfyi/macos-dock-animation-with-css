# Recreating the MacOS Dock Animation in CSS

![CleanShot 2023-04-13 at 18 25 59](https://user-images.githubusercontent.com/2969573/231824293-25511563-6c89-480e-b841-ccd115aaf244.gif)


In this video we'll be recreating the MacOS dock animation you see when hovering an app icon on desktop. We do this by combining both the new CSS has() selector and CSS variables in a smart way. This results in us being able to quite closely replicate the dock animation, without the use of any animation libraries like Framer Motion or GASP.

## Source code

* HTML and JavaScript part can be found in [/src/app.tsx](/src/App.tsx)
* The styling part can be used in [/src/index.css](/src/index.css);

## Tools used

React (could also be built with Vanilla JS), TypeScript, Vanilla CSS (using the `has()` selector!), CSS Variables.

## Image copyright

Wallpaper source: https://unsplash.com/photos/4wzRuAb-KWs

Icons source: https://macosicons.com/#/