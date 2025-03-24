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

// 2278. Percentage of Letter in String
var percentageLetter = function (s, letter) {
    let count = 0
    for (let char of s) {
        if (char === letter) {
            count++
        }
    }
    return Math.floor(count / s.length * 100)
};

// 137. Single Number II
var singleNumber = function (nums) {
    let map = {}

    for (let n of nums) {
        map[n] = (map[n] || 0) + 1
    }

    for (let [key, values] of Object.entries(map)) {
        if (values === 1) {
            return Number(key)
        }
    }
};

// 260. Single Number III
var singleNumber = function (nums) {
    let map = {}
    let res = []

    for (let n of nums) {
        map[n] = (map[n] || 0) + 1
    }

    for (let [key, values] of Object.entries(map)) {
        if (values === 1) {
            res.push(Number(key))
        }
    }
    return res
};


// 1207. Unique Number of Occurrences
var uniqueOccurrences = function (arr) {
    let map = {}
    let set = new Set()

    for (let n of arr) {
        map[n] = (map[n] || 0) + 1
    }

    for (let count of Object.values(map)) {
        if (set.has(count)) {
            return false
        }
        set.add(count)
    }
    return true
};
