import React, { Component } from 'react';
import queryString from 'query-string';
import Api from './api.js';
import CombinedArticle from './combined-article.js';

class Article extends Component {

  constructor(props) {
    super(props);
    this.state = {
      article: null
    };
  }

  componentDidMount() {
    if (!this.ids) {
      const ids = [1, 2, 3];
      window.location.href = '?' + queryString.stringify({ id: ids });
      return;
    }

    this.fetchArticles();
  }

  get ids() {
    return queryString.parse(window.location.search).id;
  }

  fetchArticles() {
    Api.index(this.ids).then((results) => {
      const articles = results.map((r) => r.data);
      const combined = new CombinedArticle(articles);
      this.setState({ article: combined });
    });
  }

  render() {
    if (this.state.article) {
      return <div>
        <div id="intro" className="section  sticky  hasad">
          <h1 className="firstHeading">
            {this.state.article.title}
          </h1>
        </div>

        <div className="section steps sticky steps_first">
          <h3 className="">
            <div className="altblock">Part <span>1</span></div>
            <span className="mw-headline">Steps</span>
          </h3>
          <div className="section_text">
            <ol className="steps_list_2">
              {this.state.article.steps.map((step, i) => {
                return <div key={i}>
                  <li className="hasimage">
                    {step.image && <div className="mwimg largeimage floatcenter">
                      <img src={decodeURIComponent(step.image)} alt={i} width="300" />
                    </div>}
                    <div className="step_num" aria-label="Step 1">{step.number}</div>
                    <div className="step">
                      {step.content}
                    </div>
                    <div className="clearall"></div>
                  </li>
                </div>
              })}
            </ol>
            <div className="clearall"></div>
          </div>
        </div>
      </div>
    } else {
      return <div>
        <div id="intro" className="section  sticky  hasad">
          <div className="sp_info_icon"></div>
          <h1 className="firstHeading">
            Loading...
          </h1>
        </div>
      </div>
    }
  }
}

export default Article;
