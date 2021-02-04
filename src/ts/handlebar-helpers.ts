declare var Handlebars;

function stripDegree(input: string): string {
  return input.replace(' Degree', '').replace(' Degrees', '').replace('Program', '').replace('Programs', '');
}

function capitalize(input: string): string {
  const splitInput = input.split(' ');
  const retval = [];
  const exceptions = [
    'a', 'an', 'the', 'at', 'by', 'for', 'in', 'of',
    'on', 'to', 'up', 'and', 'as', 'but', 'or', 'nor'
  ];

  splitInput.forEach((s, i) => {
    // Capitalize first and last always
    if (i === 0 || i === splitInput.length - 1) {
      retval[i] = s.charAt(0).toUpperCase() + s.substr(1).toLowerCase();
    } else if (exceptions.indexOf(s) === -1) {
      // If it's not an exception, capitalize it
      retval[i] = s.charAt(0).toUpperCase() + s.substr(1).toLowerCase();
    } else {
      retval[i] = s;
    }
  });

  return retval.join(' ');
}

if (typeof Handlebars !== 'undefined') {
  Handlebars.registerHelper('stripDegree', stripDegree);
  Handlebars.registerHelper('capitalize', capitalize);
}
