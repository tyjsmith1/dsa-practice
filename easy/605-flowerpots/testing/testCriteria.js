const testCases = [
    { sample: [1, 0, 0, 0, 1], n: 1, exp: true },
    { sample: [1, 0, 0, 0, 1], n: 2, exp: false },
    { sample: [0, 0, 0, 0, 1], n: 2, exp: true },
    { sample: [0, 0, 0, 0, 0], n: 2, exp: true },
    { sample: [0, 0, 0, 0, 0], n: 3, exp: true },
    { sample: [0], n: 1, exp: true },
];

export default testCases;