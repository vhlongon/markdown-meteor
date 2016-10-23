import React, {Component} from 'react';
import CodeMirror from 'react-codemirror';
// here we dont assign the code to a variable and execute it directly
import 'codemirror/mode/markdown/markdown';
import {Bins} from '../../../imports/collections/bins';


class BinsEditor extends Component {
  onEditorChange(content) {
    Meteor.call('bins.update', this.props.bin, content);
  }
  render() {
    return (
      <div className="col-xs-8">
        <h5>Input</h5>
        <CodeMirror
          value={this.props.bin.content}
          options={{ mode: 'markdown', lineNumbers: true }}
          onChange={this.onEditorChange.bind(this)}
        />
      </div>
    );
  }
}

export default BinsEditor;
