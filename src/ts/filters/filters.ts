module DegreeSearch.Filters {
    export function RangeFilter() {
        return (input: Array<number>, total: number) => {
            total = total;

            for(var i = 0; i < total; i++) {
                input.push(i);
            }

            return input;
        }
    }
}
