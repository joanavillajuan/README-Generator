//  function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![${license} license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

//function to generate markdown for README
function generateMarkdown(data) {
  return ` 
# ${data.title}
## Description
  ${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contributors)
- [Test](#test)
- [Questions](#questions)

## Installation
  ${data.installation}
## Usage
  ${data.usage}
## License
${renderLicenseBadge(data.license)}\n
This project is licensed under the ${data.license}.
## Contribution
  ${data.contributors}
## Tests
  ${data.test}
## Questions
Github: [${data.github}](https://github.com/${data.github})\n
Email: ${data.email}
`;
}

module.exports = generateMarkdown;





