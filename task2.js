const string = 'Україна';
const collator = new Intl.Collator('ukr')

function sort(string) {
    return string.split('').sort((a, b) => collator.compare(a, b)).join('')
}

console.log(sort(string))