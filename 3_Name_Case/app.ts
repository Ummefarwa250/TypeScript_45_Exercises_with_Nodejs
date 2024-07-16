let personName: string ="Farwa"
console.log("lowercase:", personName.toLowerCase());

console.log("upperCase:", personName.toLocaleUpperCase());

console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));