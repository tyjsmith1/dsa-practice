import chalk from 'chalk';
import solution from '../solution/solution.js';

function test(testCases) {
    testCases.forEach((testCase, index) => {
        const { exp, ...inputs } = testCase;

        console.log(chalk.blue(`\n*** TEST ${index + 1} ***`));
        Object.entries(inputs).forEach(([key, value]) => {
            console.log(chalk.yellow(`${key}: ${JSON.stringify(value)}`));
        })

        const result = solution(...Object.values(inputs));
        console.log(`Expected: ${JSON.stringify(exp)}`);
        console.log(`Result: ${JSON.stringify(result)}`);

        const passFail = JSON.stringify(result) === JSON.stringify(exp)
            ? console.log(chalk.green('==== PASS ====\n'))
            : console.log(chalk.red('xxxx FAIL xxxx\n'));
        return passFail;
    });
}

export default test;