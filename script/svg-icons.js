/**
 * Created by Elizabeth on 26.11.2016.
 */
var anchorSvg = '<svg fill="#aab2bf" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"' +
              'width="18" height="18" viewBox="0 -6 32 35">' +
              '<g transform="scale(0.03125 0.03125)">' +
              '<path d="M927.968 611.040l-36.352 247.328-73.568-71.36c-58.272 49.248-166.336 116.256-323.328 116.256-157.92 0-267.136-65.376-325.248-112.224l-67.136 65.12-38.336-245.088 252.576 37.184-69.6 67.552c48.832 36.256 125.44 79.968 201.728 79.968l-0.224-403.488c-55.712-19.392-95.808-70.624-95.808-131.36 0-77.376 64.608-140.096 144.32-140.096 79.68 0 144.32 62.72 144.32 140.096 0 61.664-41.344 113.44-98.368 132.128 0.352 78.72 1.632 404.224-0.128 404.224 72.96 0 148.288-47.488 197.344-85.888l-65.024-63.136 252.832-37.216zM571.392 258.656c0-39.872-33.312-72.224-74.4-72.224s-74.432 32.352-74.432 72.224c0 39.904 33.344 72.256 74.432 72.256s74.4-32.352 74.4-72.256z"/>' +
              '</g>' +
              '</svg>';

var  facebookSvg = '<svg fill="#aab2bf" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'+
                'width="15" height="15" viewBox="0 0 512 512">' +
                '<g id="icomoon-ignore">' +
                '</g>' +
                '<path d="M304 96h80v-96h-80c-61.757 0-112 50.243-112 112v48h-64v96h64v256h96v-256h80l16-96h-96v-48c0-8.673 7.327-16 16-16z"></path>'
                '</svg>';

var twitterSvg = '<svg fill="#aab2bf" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"' +
              'width="15" height="15" viewBox="0 0 512 512">' +
              '<path d="M512 113.2c-18.8 8.4-39.1 14-60.3 16.5 21.7-13 38.3-33.6 46.2-58.1-20.3 12-42.8 20.8-66.7 25.5-19.2-20.4-46.5-33.1-76.7-33.1-58 0-105 47-105 105 0 8.2 0.9 16.2 2.7 23.9-87.3-4.4-164.7-46.2-216.5-109.8-9 15.5-14.2 33.6-14.2 52.8 0 36.4 18.5 68.6 46.7 87.4-17.2-0.5-33.4-5.3-47.6-13.1 0 0.4 0 0.9 0 1.3 0 50.9 36.2 93.4 84.3 103-8.8 2.4-18.1 3.7-27.7 3.7-6.8 0-13.3-0.7-19.8-1.9 13.4 41.7 52.2 72.1 98.1 73-36 28.2-81.2 45-130.5 45-8.5 0-16.8-0.5-25.1-1.5 46.6 29.9 101.8 47.2 161.1 47.2 193.2 0 298.9-160.1 298.9-298.9 0-4.6-0.1-9.1-0.3-13.6 20.5-14.7 38.3-33.2 52.4-54.3z"></path>' +
              '</svg>';

var dribbleSvg =  '<svg fill="#aab2bf" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"' +
               'width="15" height="15" viewBox="0 0 512 512">' +
               '<path d="M256 512c-141.2 0-256-114.8-256-256s114.8-256 256-256c141.2 0 256 114.8 256 256s-114.8 256-256 256v0zM471.9 291c-7.5-2.4-67.7-20.3-136.2-9.3 28.6 78.6 40.2 142.6 42.5 155.9 49-33.2 84-85.7 93.7-146.6v0zM341.4 457.6c-3.3-19.2-15.9-86-46.6-165.8-0.5 0.2-1 0.3-1.4 0.5-123.4 43-167.7 128.5-171.6 136.5 37.1 28.9 83.7 46.2 134.2 46.2 30.3 0 59.2-6.2 85.4-17.4v0zM93.5 402.5c5-8.5 65-107.8 177.7-144.3 2.8-0.9 5.7-1.8 8.6-2.6-5.5-12.4-11.5-24.9-17.7-37.1-109.1 32.7-215.1 31.3-224.7 31.2-0.1 2.2-0.1 4.4-0.1 6.7 0 56.1 21.3 107.4 56.2 146.1v0zM42 211.5c9.8 0.1 99.9 0.5 202.2-26.6-36.2-64.4-75.3-118.6-81.1-126.5-61.2 28.9-107 85.3-121.1 153.1v0zM204.8 43.7c6 8.1 45.8 62.2 81.6 128 77.8-29.1 110.7-73.4 114.6-79-38.6-34.3-89.4-55.1-145-55.1-17.6 0.1-34.8 2.2-51.2 6.1v0zM425.3 118.1c-4.6 6.2-41.3 53.2-122.1 86.2 5.1 10.4 10 21 14.5 31.7 1.6 3.8 3.2 7.5 4.7 11.3 72.8-9.1 145.1 5.5 152.3 7-0.5-51.6-19-99-49.4-136.2v0z"></path>' +
               '</svg>';

var revisionSvg = '<svg fill="#aab2bf" width="18" height="18" xmlns="http://www.w3.org/2000/svg">'+
                '<g>'+
                '<title>Layer 1</title>'+
                '<text font-weight="bold" xml:space="preserve" text-anchor="start" font-family="Euphoria, sans-serif" font-size="19" id="svg_2" y="18" x="2" stroke-width="0" stroke="#000">R</text>'+
                '</g>'+
                '</svg>';

document.getElementById('anchor-placeholder').innerHTML = anchorSvg;
document.getElementById('facebook-placeholder').innerHTML = facebookSvg;
document.getElementById('twitter-placeholder').innerHTML = twitterSvg;
document.getElementById('dribbble-placeholder').innerHTML = dribbleSvg;
document.getElementById('revision-placeholder').innerHTML = revisionSvg;