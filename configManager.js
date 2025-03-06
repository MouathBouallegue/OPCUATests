const fs = require('fs');

function loadConfig() {
    const configPath = './config/settings.json';
    try {
        const data = fs.readFileSync(configPath);
        return JSON.parse(data);
    } catch (err) {
        console.error('Error loading configuration:', err);
    }
}

module.exports = { loadConfig };
