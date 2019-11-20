const profile = {
    name: 'Kana',
    age: 18,
    major: 'communication'
}

console.log(profile.name) // 'Kana'
 
const keys = Object.keys(profile);

for (let i = 0; i < keys.length; i = i + 1) {
    const key = keys[i];
    const value = profile[key];
    const text = "私の" + key + "は、" + value + "です。";
console.log(text);
    
}