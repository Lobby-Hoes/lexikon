export default function getDistance(string1, string2) {
    return recursion(string1, string2, string1.length, string2.length);
}

export function recursion(string1, string2, m, n) {
    if (m == 0) return n
    if (n == 0) return m
    if (string1[m-1] == string2[n-1]) return recursion(string1, string2, m-1, n-1)
    return 1 + Math.min(
        recursion(string1, string2, m, n-1),
        Math.min(
            recursion(string1, string2, m-1, n),
            recursion(string1, string2, m-1, n-1)
        )
    )
}