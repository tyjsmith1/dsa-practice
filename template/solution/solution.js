export default function solution(...input) {
    let result = ''
    for (let i = 0; i < input.length; i++) {
        result += input[i] + ' '
    }
    return result.trim()
}