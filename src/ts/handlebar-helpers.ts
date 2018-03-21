if (typeof Handlebars !== 'undefined') {
    function stripDegree(input: string) : string {
        return input.replace(' Degree', '').replace(' Degrees', '');
    }

    function capitalize(input: string) : string {
        var splitInput = input.split(' '),
            retval     = [],
            exceptions = [ 'a', 'an', 'the', 'at', 'by', 'for', 'in', 'of', 'on', 'to', 'up', 'and', 'as', 'but', 'or', 'nor' ];

        splitInput.forEach( (s, i) => {
            // Capitalize first and last always
            if (i === 0 || i === splitInput.length - 1) {
                retval[i] = s.charAt(0).toUpperCase() + s.substr(1).toLowerCase();
            } else {
                // If it's not an exception, capitalize it
                if (exceptions.indexOf(s) === -1) {
                    retval[i] = s.charAt(0).toUpperCase() + s.substr(1).toLowerCase();
                } else {
                    retval[i] = s;
                }
            }
        });

        return retval.join(' ');
    }

    Handlebars.registerHelper('stripDegree', stripDegree);
    Handlebars.registerHelper('capitalize', capitalize);
}
