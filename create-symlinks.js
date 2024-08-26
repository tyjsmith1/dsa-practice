const fs = require('fs')
const path = require('path')

const rootDir = path.resolve(__dirname)

function createSymLinks(dir) {
    const items = fs.readdirSync(dir, { withFileTypes: true })

    for (const item of items) {
        const itemPath = path.join(dir, item.name)

        if (item.isDirectory()) {
            const indexPath = path.join(itemPath, 'index.js')
            if (fs.existsSync(indexPath)) {
                const symlinkPath = path.join(itemPath, 'package.json')
                if (!fs.existsSync(symlinkPath)) {
                    fs.symlinkSync(path.join(rootDir, 'package.json'), symlinkPath);
                    console.log(`Created symlink for package.json in ${itemPath}`);
                }
            }
            createSymLinks(itemPath)
        }
    }
}

createSymLinks(rootDir)