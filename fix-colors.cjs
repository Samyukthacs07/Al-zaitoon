const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.jsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(srcDir);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // bg-secondary text-white -> bg-secondary text-[var(--color-app-text)]
    // because secondary is now white, text must be dark
    content = content.replace(/bg-secondary\s+text-white/g, 'bg-secondary text-[var(--color-app-text)]');

    // text-secondary -> text-[var(--color-app-text)]
    // because secondary is now white, if it was used for text it was likely dark (Navy), now should be Slate Gray
    content = content.replace(/(?<!bg-)text-secondary/g, 'text-[var(--color-app-text)]');

    // bg-slate-50 -> bg-[var(--color-app-bg)]
    content = content.replace(/bg-slate-50/g, 'bg-[var(--color-app-bg)]');

    // text-slate-800 or text-slate-900 -> text-[var(--color-app-text)]
    content = content.replace(/text-slate-[89]00/g, 'text-[var(--color-app-text)]');

    // hover:bg-secondary/90 (Button.jsx) -> hover:bg-slate-100
    content = content.replace(/hover:bg-secondary\/90/g, 'hover:bg-slate-100');

    // hover:text-secondary (AboutUs.jsx button) -> hover:text-[var(--color-app-text)]
    content = content.replace(/hover:text-secondary/g, 'hover:text-[var(--color-app-text)]');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated', file);
    }
});
