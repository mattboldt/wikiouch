import React from 'react';

class Article {

  constructor(content) {
    let el       = document.createElement('div');
    el.innerHTML = content;
    this.html    = el;
  }

  queryAll(selectors) {
    return this.html.querySelectorAll(selectors);
  }

  get title() {
    const el = this.html.querySelector('div#content_wrapper div.pre-content h1');
    return el ? el.innerText : '';
  }

  get sections() {
    let html = this.queryAll('div#bodyContent div.section span.mw-headline span');
    if (html.length === 0) {
      html = this.queryAll('div#bodyContent div.section span.mw-headline');
      if (html.length === 0) {
        console.error('Bad section data'); return [];
      }
    }
    let headlines = [];

    for (let headline of html) {
      if (headline.innerHTML.length > 0) {
        headlines.push(headline.innerText);
      }
    }
    return headlines;
  }

  get steps() {
    const html = this.queryAll('div#bodyContent div.section div.section_text ol');
    if (html.length === 0) { console.error('Bad step data'); return []; }
    let allSteps = [];

    for (let stepList of html) {
      const steps = stepList.querySelectorAll('li');
      for (let step of steps) {
        const content = step.querySelector('div.step');
        const innerHTML = content ? content.innerHTML : '';
        if (innerHTML.length > 0) {
          allSteps.push(innerHTML);
        }
      }
    }

    return allSteps;
  }

  get images() {
    let isVideo = false;
    let html = this.queryAll('div#bodyContent div.section div.section_text div.mwimg img');

    if (html.length === 0) {
      html = this.queryAll('div#bodyContent div.section div.section_text div.mwimg div.video-player video');
      if (html.length === 0) {
        console.error('Bad image or gif data');
        return [];
      } else {
        isVideo = true;
      }
    }

    let images = [];
    for (let image of html) {
      if (isVideo) {
        images.push(<img src={image.dataset.gifsrc} alt={image.dataset.src} />);
      } else {
        images.push(<img src={image.dataset.srclarge} alt={image.alt} />);
      }
    }
    return images;
  }
}

export default Article;
