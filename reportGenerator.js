const fs = require('fs');

function generateReport(testResults) {
    const report = {
        timestamp: new Date(),
        testResults: testResults
    };
    
    const reportData = JSON.stringify(report, null, 2);
    
    fs.writeFileSync('./test-report.json', reportData);
    console.log("Report generated successfully!");
}

module.exports = { generateReport };
