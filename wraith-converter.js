const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');

const pattern = /\{\s*model\s*=\s*'(\w+)',\s*name\s*=\s*'([^']+)',\s*brand\s*=\s*'([^']+)',\s*price\s*=\s*(\d+),\s*category\s*=\s*'([^']+)',\s*type\s*=\s*'([^']+)',\s*shop\s*=\s*'([^']+)'\s*\}/g;

let match;
const results = [];

while ((match = pattern.exec(input)) !== null) {
    const [_, model, name, brand, price, category, type, shop] = match;

    const entry = `${model} = {
    name = '${name}',
    brand = '${brand}',
    model ='${model}',
    price = ${price},
    category = '${category}',
    type = '${type}',
    hash = \`${model}\`,
},`;

    results.push(entry);
}

fs.writeFileSync('output.txt', results.join('\n\n'), 'utf-8');

console.log('Vehicle data has been reformatted and saved to output.txt');
