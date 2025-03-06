const { exec } = require('child_process');
const { loadConfig } = require('./configManager');

function runTest() {
    const config = loadConfig();
    const serverUrl = config.server.url;
    const tests = config.tests.join(' ');

    const cttCommand = `ctt run --server=${serverUrl} --tests=${tests}`;

    exec(cttCommand, (error, stdout, stderr) => {
        if (error) {
            console.log(`exec error: ${error}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`Test output: ${stdout}`);
    });
}

runTest();
