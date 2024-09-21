const fs = require('fs');
const path = require('path');

const dirPath = 'node_modules/@vidstack/react/prod/chunks';

fs.readdir(dirPath, (err, files) => {
    if (err) throw err;

    files
        ?.filter((file) => file.endsWith('.js'))
        ?.forEach((file) => {
            const filePath = path.join(dirPath, file);
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) throw err;

                fs.writeFile(
                    filePath,
                    data.replace(/chrome\.cast\.media\.TrackType/g, 'chrome.cast?.media.TrackType'),
                    'utf8',
                    (err) => {
                        if (err) throw err;
                        console.log(`Modified: ${file}`);
                    }
                );
            });
        });
});
