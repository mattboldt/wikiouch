# wikiOuch

This is the repo for https://wikiouch.netlify.app. wikiOuch takes a random collection of wikiHow pages and mashes them together creating a unique, confusing, bizarre, and sometimes morbid how-to article. You can optionally enter your own wikihow urls to see how specific pages blend together.

## Development

wikiOuch consists of two main parts:

- The Rails app fetches random articles via wikihow's Mediawiki API, as well as HTML content for a given wikihow URL. It's hosted on heroku (for free... so please don't hug it too hard) and the api endpoints are cached heavily behind Cloudflare. I'm hoping this is enough to prevent too many requests to wikihow's site and my free heroku dyno.
- The React app (found in `/frontend`) consumes this data, parses it, and algorithmically pieces together a very strange new article. It's hosted on Netlify.

I've pieced the app together this way to focus most of the processing power in-browser, so the server is free to make simple, quick requests. If I could, I'd write the entire thing on the frontend, but I could not get past CORS issues.

If you have suggestions, or run into bugs, [Open an Issue](https://github.com/mattboldt/wikiouch/issues). [Pull requests](https://github.com/mattboldt/wikiouch/pulls) are also welcome.
