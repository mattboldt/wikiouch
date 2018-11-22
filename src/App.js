import React, { Component } from 'react';
import Article from './article.js';

class App extends Component {

  render() {
    return (
      <div id="main_container" className="">
        <div id="header_space"></div>
        <div id="main" className="">
          <div id="container" className="">
            <div id="article_shell">
              <div id="article" role="main">
                <div id="bodycontents">
                  <Article />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
