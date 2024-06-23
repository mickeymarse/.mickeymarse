const { EOL } = require('os');

const omit = require('lodash.omit');
const { render } = require('prettyjson');
const { think } = require('cowsay');

const renderOpts = {
  dashColor: 'brightMagenta',
  keysColor: 'rainbow',
  stringColor: 'brightCyan',
};

const intro = ({ name, title, cow }) =>
  think({
    text: `${name}${EOL}${EOL}${title}`,
    f: cow,
    e: '@@',
    T: '::',
  });

const fields = (data) => render(omit(data, ['name', 'title']), renderOpts);

module.exports = ({ data, cow }) => `
${intro(Object.assign({ cow }, data))}

${fields(data)}`;
