import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname);

function createSymLinks(dir) {
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
        if (item.isDirectory()) {
            const itemPath = path.join(dir, item.name);
            const indexPath = path.join(itemPath, 'index.js');
            if (fs.existsSync(indexPath)) {
                const symlinkPath = path.join(itemPath, 'package.json');
                if (!fs.existsSync(symlinkPath)) {
                    fs.symlinkSync(path.join(rootDir, 'package.json'), symlinkPath);
                    console.log(`Created symlink for package.json in ${itemPath}`);
                }
            }
            // Remove the recursive call to avoid creating symlinks in subdirectories
        }
    }
}

createSymLinks(path.join(rootDir, 'easy'));
createSymLinks(path.join(rootDir, 'medium'));
createSymLinks(path.join(rootDir, 'hard'));