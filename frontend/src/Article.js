import React, { Component } from 'react';
import Api from './Api.js';
import ArticleModel from './models/Article.js';
import CombinedArticleModel from './models/CombinedArticle.js';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null
    };
  }

  componentDidMount() {
    Api.index(this.props.urls).then((results) => {
      const articles = results.map((r) => new ArticleModel(r));
      const combined = new CombinedArticleModel(articles);
      this.setState({ article: combined });
    });
  }

  render() {
    if (this.state.article) {
      return <React.Fragment>
        <div id="intro" className="section sticky hasad">
          <h1 className="firstHeading">
            {this.state.article.title}
          </h1>
          <br />
          <div className="clearall"></div>
        </div>

        {this.state.article.content.map((section, i) => {
          return <div key={`section-${i}`} className="section steps sticky steps_first">
            <h3>
              <div className="altblock">Part <span>{section.number}</span></div>
              <span className="mw-headline">{section.header}</span>
            </h3>
            <div className="section_text">
              <ol className="steps_list_2">
                {section.steps.map((step, si) => {
                  return <li key={`step-${si}`} className="hasimage">
                    {step.image && <div className="mwimg largeimage floatcenter">
                      {step.image}
                    </div>}
                    <div className="step_num" aria-label="Step 1">{step.number}</div>
                    <div className="step" dangerouslySetInnerHTML={{__html: step.content}}>
                    </div>
                    <div className="clearall"></div>
                  </li>
                })}
              </ol>
              <div className="clearall"></div>
            </div>
          </div>
        })}
      </React.Fragment>
    } else {
      return <React.Fragment>
        <div id="intro" className="section sticky hasad">
          <h1 className="firstHeading">
            Loading...
          </h1>
          <br />
          <div className="clearall"></div>
        </div>
      </React.Fragment>
    }
  }
}

export default Article
