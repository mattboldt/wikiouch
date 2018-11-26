import React, { Component } from 'react';
import queryString from 'query-string';
import Article from './Article.js';
import Api from './Api.js';

class App extends Component {

  componentDidMount() {
    if (!this.urls) {
      this.random();
      return;
    }
  }

  random = () => {
    Api.random().then((results) => {
      window.location.href = '?' + queryString.stringify({ url: results });
    });
  }

  get urls() {
    return queryString.parse(window.location.search).url;
  }

  render() {
    return <React.Fragment>
      <div id="header_outer" role="navigation">
        <div id="header">
          <ul id="actions" role="menubar" aria-label="Header navigation">
            <li id="nav_explore_li" className="nav_item" role="menuitem" aria-labelledby="nav_explore" style={{width: '175px', textAlign: 'center'}}>
              <div className="nav_icon"></div>
              <button
                type="button"
                className="nav"
                id="nav_explore"
                onClick={this.random}
                style={{width: '100%', fontSize: '18px', border: 0, padding: '40px 0 0 0', background: 'none', cursor: 'pointer'}}>
                RANDOM OUCH
              </button>
            </li>
          </ul>

          <a onClick={this.random} style={{display :'block', paddingTop: '10px'}}>
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="wikiOuch logo" />
          </a>
        </div>
        <div id="header_after"></div>
      </div>

      <div id="main_container">
        <div id="header_space"></div>
        <div id="main">
          <div id="actionbar" className="" role="navigation">
          </div>

          <div id="container" className="">
            <div id="article_shell">
              <div id="article" role="main">
                <div id="bodycontents">
                  <Article urls={this.urls} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  }
}

export default App


// <form id="bubble_search" name="search_site" action="/wikiHowTo" method="get" role="search">
//  <input type="text" className="search_box" name="search" value="" placeholder="to do anything..." x-webkit-speech />
//  <input type="submit" value="Search" id="search_site_bubble" className="search_button" />
// </form>
