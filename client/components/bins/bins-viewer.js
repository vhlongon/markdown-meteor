import React, {Component} from 'react';
import {Bins} from '../../../imports/collections/bins';
import {markdown} from 'markdown';

class BinsViewer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const rawHTML = markdown.toHTML(this.props.bin.content);
    return (
      <div className="col-xs-4">
        <h5>Output</h5>
        <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
      </div>
    );
  }
}

export default BinsViewer;
