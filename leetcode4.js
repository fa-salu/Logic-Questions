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

// 347. Top K Frequent Elements
var topKFrequent = function (nums, k) {
    let map = {}
    let res = []

    for (let n of nums) {
        map[n] = (map[n] || 0) + 1
    }

    return Object.keys(map)
        .sort((a, b) => map[b] - map[a])
        .slice(0, k).map(Number)
};
