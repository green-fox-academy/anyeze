'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!
let url: string = 'https//www.reddit.com/r/nevertellmethebots';

function fixUrl(wrUrl){

    let fixUrl = wrUrl.replace("bots", "odds").replace("//","://");
    return fixUrl;

}
url = fixUrl(url);

console.log(url);






