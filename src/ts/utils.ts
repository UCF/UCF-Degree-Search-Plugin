module DegreeSearch {
    export class Utils {
        static CapitalizeString(input: string) : string {
            var splitInput = input.split(' '),
                retval     = [],
                exceptions = [ 'a', 'an', 'the', 'at', 'by', 'for', 'in', 'of', 'on', 'to', 'up', 'and', 'as', 'but', 'or', 'nor' ];

            splitInput.forEach( (s, i) => {
                if (i === 0 || i === splitInput.length - 1) {
                    retval[i] = s.charAt(0).toUpperCase() + s.substr(1).toLowerCase();
                } else {
                    if (exceptions.indexOf(s) === -1) {
                        retval[i] = s.charAt(0).toUpperCase() + s.substr(1).toLowerCase();
                    } else {
                        retval[i] = s;
                    }
                }
            });

            return retval.join(' ');
        }
    }
}
