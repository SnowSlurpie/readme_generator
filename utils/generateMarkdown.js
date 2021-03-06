function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "BSD") {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return "";
  }
}
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL") {
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "BSD") {
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  } else { license === "None"
    return "No license link specified";
  }
}
  function renderLicenseSection(license) {
    if (license === "MIT") {
      return "MIT License";
    } else if (license === "Apache") {
      return "Apache License 2.0";
    } else if (license === "GPL") {
      return "GNU General Public License v3";
    } else if (license === "BSD") {
      return "BSD 3-Clause License";
    } else {
      return "No license specified";
    }
  }
  function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}
1. [Description](#description)
2. [Installation](#installation)
3. [License Link](#licenselink)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
## Description:
${data.description}
## Installation:
${data.installation}
## License Link:
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
## Contributing:
${data.contributing}
## Tests:
${data.tests}
## Questions? 
### Email / ### Github
Please contact me with any question
*Email:
${data.email}
*Github:
https://github.com/${data.github}
`;
  }
  module.exports = generateMarkdown;