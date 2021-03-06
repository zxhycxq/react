'use strict';

var _jsxFileName = '_js/examples/markdown.js';
var MARKDOWN_COMPONENT = '\nclass MarkdownEditor extends React.Component {\n  constructor(props) {\n    super(props);\n    this.handleChange = this.handleChange.bind(this);\n    this.state = {value: \'Type some *markdown* here!\'};\n  }\n\n  handleChange(e) {\n    this.setState({value: e.target.value});\n  }\n\n  getRawMarkup() {\n    var md = new Remarkable();\n    return { __html: md.render(this.state.value) };\n  }\n\n  render() {\n    return (\n      <div className="MarkdownEditor">\n        <h3>Input</h3>\n        <textarea\n          onChange={this.handleChange}\n          defaultValue={this.state.value} />\n        <h3>Output</h3>\n        <div\n          className="content"\n          dangerouslySetInnerHTML={this.getRawMarkup()}\n        />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<MarkdownEditor />, mountNode);\n'.trim();

ReactDOM.render(React.createElement(ReactPlayground, { codeText: MARKDOWN_COMPONENT, __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  }
}), document.getElementById('markdownExample'));