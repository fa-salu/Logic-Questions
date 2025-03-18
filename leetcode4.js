// 2351. First Letter to Appear Twice
var repeatedCharacter = function(s) {
    let map = new Set()
    
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            return s[i]
        } else {
            map.add(s[i])
        }
    }
};
