import React, { Component } from 'react';
import queryString from 'query-string';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      a: props.urls[0],
      b: props.urls[1],
      c: props.urls[2]
    }
  }

  onChange(prop, e) {
    const value = e.target.value;
    let obj = {}
    obj[prop] = value;

    this.setState(obj);
  }

  get url() {
    const urls = Object.values(this.state).map((url) => {
      return url.replace('//www', '//m');
    });
    return '/?' + queryString.stringify({ url: urls });
  }

  render() {
    return <React.Fragment>
      <div className="sidebox">
        <h2>Create your own wikiOuch</h2>

        {['a', 'b', 'c'].map((prop) => {
          return <label>
            Article {prop}
            <textarea
              key={prop}
              className="sidebar-input"
              placeholder="wikiHow url"
              value={this.state[prop]}
              onChange={this.onChange.bind(this, prop)}></textarea>
          </label>
        })}
        <a href={this.url} className="search_button" style={{display: 'block', borderRadius: '5px', marginTop: '10px'}}>
          Oof Ouch Submit
        </a>
      </div>
    </React.Fragment>
  }
}

export default Sidebar
