export default function solution(sample, n) {
    let i = 0
    while (i < sample.length && n !== 0) {
        let left = sample[i - 1]
        let right = sample[i + 1]
        let target = sample[i]

        if (target === 0 && left !== 1 && right !== 1) {
            i++
            n--
        }
        i++
    }
    return n === 0
}