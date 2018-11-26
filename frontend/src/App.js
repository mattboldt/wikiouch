import React, { Component } from 'react';
import queryString from 'query-string';
import Article from './Article.js';
import Sidebar from './Sidebar.js';
import Api from './Api.js';

class App extends Component {

  componentDidMount() {
    if (!this.urls) {
      this.random();
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
            <br />
            <p>A Randomly Generated wikiHow Article</p>
          </div>

          <div id="container" className="">
            <div id="article_shell">
              <div id="article" role="main">
                <div id="bodycontents">
                  <Article urls={this.urls} />
                </div>
              </div>
            </div>
            <div id="sidebar">
              <div className="sidebox">
                <a onClick={this.random} className="search_button" style={{display: 'block', borderRadius: '5px'}}>
                  RANDOM
                </a>
              </div>

              {this.urls && <Sidebar urls={this.urls} />}

              <div className="sidebox">
                <a href="https://github.com/mattboldt/wikiouch">Contribute on Github</a><br />
                <a href="https://github.com/mattboldt/wikiouch/blob/master/README.md">README</a>
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
