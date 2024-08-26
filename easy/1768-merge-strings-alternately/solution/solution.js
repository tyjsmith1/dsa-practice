export default function solution(...input) {
    const word1 = input[0]
    const word2 = input [1]
    let combinedStr = ''
    const combinedStrLength = word1.length + word2.length

    for (let i = 0; i < combinedStrLength; i++) {
        if (word1[i]) combinedStr += word1[i]
        if (word2[i]) combinedStr += word2[i]
    }
    return combinedStr
}