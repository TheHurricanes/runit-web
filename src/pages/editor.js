import React, { Component, Fragment } from 'react';
import CodeMirror from 'react-codemirror';
import axios from 'axios';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/ruby/ruby';
import './editor.css';

class Editor extends Component {
  state = {
    code:
      'const shellhacks = {\n\tbest_app: "Runit",\n\twebsite: "https://thebestapp.online"\n};\n\nconsole.log(shellhacks.best_app);',
    output: '',
  };

  runCode = () => {
    // const output = await axios.post(
    //   'https://justrunit-wstpkhtyit.now.sh/compile',
    //   {
    //     language: 'nodejs',
    //     script: "console.log('hello world');",
    //   },
    // );

    this.setState({ output: 'Runit' });
  };

  onChange = (code) => {
    this.setState({ code });
  };

  render() {
    return (
      <Fragment>
        <button style={{ marginLeft: '1380px' }} onClick={this.runCode}>
          RUN
        </button>
        <CodeMirror
          ref="editor"
          value={this.state.code}
          onChange={this.onChange}
          options={{ mode: 'javascript' }}
          autoFocus={true}
        />
        <div style={{ marginTop: '0px', background: '#333', height: '460px' }}>
          <p style={{ color: 'white' }}>{this.state.output}</p>
        </div>
      </Fragment>
    );
  }
}

export default Editor;
