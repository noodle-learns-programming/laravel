var React = require('react');
var ReactDOM = require('react-dom');
import Hello from './test.jsx';

main();

function main() {
    ReactDOM.render(<Hello />, document.getElementById('app'));
}