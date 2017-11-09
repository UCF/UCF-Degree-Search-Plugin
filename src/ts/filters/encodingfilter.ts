module DegreeSearch.Filters {
    export function convertEncoding() {
        return function(input) {
            return $('<span>').html(input).text();
        }
    }
}
