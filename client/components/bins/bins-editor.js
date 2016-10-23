import React, {Component} from 'react';
import CodeMirror from 'react-codemirror';
// here we dont assign the code to a variable and execute it directly
import 'codemirror/mode/markdown/markdown';

class BinsEditor extends Component {
  render() {
    return (
      <div className="col-xs-8">
        <h5>Input</h5>
        <CodeMirror options={{ mode: 'markdown', lineNumbers: true }} />
      </div>
    );
  }
}

export default BinsEditor;
