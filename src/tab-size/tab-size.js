export default function setTabSize(numSpaces) {
    const cssRule = createCssRule(numSpaces);
    addStyleToPage(cssRule);
}

function createCssRule(numSpaces) {
    const rule = `
        .refract-container {
            tab-size: ${numSpaces}
        }
    `;
    return rule;
}

// inject CSS <style> into <head> of page
function addStyleToPage(rule) {
    const css = document.createElement('style');
    css.type = 'text/css';
    css.appendChild(document.createTextNode(rule));
    document.getElementsByTagName('head')[0].appendChild(css);
}
