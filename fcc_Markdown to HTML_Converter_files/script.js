//Variables
const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");
const regexH1 = /^# (.+)$/;
const regexH2 = /^[#]{2} (.+)$/;
const regexH3 = /^[#]{3} (.+)$/
const regexBoldAsterisk = /^\*\*([\s\w]+)\*\*$/
const regexBoldUnderscore = /^__([\w\s]+)__$/
const testRegex = /^[#]{3}[\s]{0,}([\w]{1,}[\s|\w]{0,})$/;
const regexItalicAsterisk = /^\*([\s|\w]+)\*$/
const regexItalicUnderscore = /^_([\s\w]+)_$/
const regexImg = /!\[([^\]]+)\]\(([^)]+)\)/;
const regexLink = /\[(.*?)\]\((.*?)\)/;
const regexQuote = /^>\s?(.+)$/

//Testing block
/*console.log(`regexH1 test : ${regexH1.test("# heading 1")}`);
console.log(`regexH2 test : ${regexH2.test("## heading 2")}`);
console.log(`regexH3 test : ${regexH3.test("### heading 3")}`);
console.log(`testRegex test : ${testRegex.test("### heading 1")}`);
console.log(`regexBoldAsterisk test : ${regexBoldAsterisk.test("**bold text**")}`);
console.log(`regexBoldUnderscore test : ${regexBoldUnderscore.test("__bold text__")}`);
console.log(`regexItalicAsterisk test : ${regexItalicAsterisk.test("*italic text*")}`);
console.log(`regexItalicUnderscore test : ${regexItalicUnderscore.test("_italic text_")}`);
console.log(`regexImg test : ${regexImg.test("![a](p)")}`)
console.log(`regexQuote test : ${regexQuote.test(">quote")}`)
let string = `${"# heading 1".replace("# ","<h1>")}</h1>`
console.log(string)*/

//Functions
function parseInlineMarkdown(text){
    //to replace any nested bold with asterisks
    text = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>" );
    //to replace any nested bold with underscore
    text = text.replace(/__(.+?)__/g, "<strong>$1</strong>");
    //to replace any nested italic with asterisk
    text = text.replace(/\*(.+?)\*/g, "<em>$1</em>")
    //to replace any nested italic with underscore
    text = text.replace(/_(.+?)_/g, "<em>$1</em>");
    //to replace any nested image
    text = text.replace(/!\[(.+?)\]\((.+?)\)/g, `<img alt="$1" src="$2">`);
    //to replace any nested links
    text = text.replace(/\[(.+?)\]\((.+?)\)/g, `<a href="$2">$1</a>`);
    //to replace any nested blockquote
    text = text.replace(/^>\s?(.*)$/gm, `<blockquote>$1</blockquote>`);
    return text;
}

function convertMarkdown(){
    preview.innerHTML = "";
    const lines = markdownInput.value.split('\n');
    let htmlString = "";

    lines.forEach(line => {
    let element;
        if(regexH1.test(line)){
    const content = `${line.replace(regexH1, "$1")}`;
    const parsed = parseInlineMarkdown(content);
    element = document.createElement("h1");
    element.innerHTML = parsed;
    htmlString += `<h1>${parsed}</h1>`
    } 
    else if(regexH2.test(line)){
    const content = `${line.replace(regexH2, "$1")}`;
    const parsed = parseInlineMarkdown(content);
    element = document.createElement("h2");
    element.innerHTML = parsed;
    htmlString += `<h2>${parsed}</h2>`
    }
    else if(regexH3.test(line)){
    const content = `${line.replace(regexH3, "$1")}`;
    const parsed = parseInlineMarkdown(content);
    element = document.createElement("h3");
    element.innerHTML = parsed;
    htmlString += `<h3>${parsed}</h3>`
    }
    else if(regexBoldAsterisk.test(line)){
    const content = `${line.replace(regexBoldAsterisk, "$1")}`;
    element = document.createElement("strong");
    element.innerText = content;
    htmlString += `<strong>${content}</strong>`
    }
    else if(regexBoldUnderscore.test(line)){
    const content = `${line.replace(regexBoldUnderscore, "$1")}`;
    element = document.createElement("strong");
    element.innerText = content;
    htmlString += `<strong>${content}</strong>`;
    }
    else if(regexItalicAsterisk.test(line)){
    const content = `${line.replace(regexItalicAsterisk, "$1")}`;
    element = document.createElement("em");  
    element.innerText = content;
    htmlString += `<em>${content}</em>`;
    }
    else if(regexItalicUnderscore.test(line)){
    const content = `${line.replace(regexItalicUnderscore, "$1")}`;
    element = document.createElement("em");
    element.innerText = content;
    htmlString += `<em>${content}</em>`;
    } 
    else if(regexImg.test(line)){
    const match = line.match(regexImg);
    const altText = match[1];
    const imageUrl = match[2];
    element = document.createElement("img");
    element.alt = altText;
    element.src = imageUrl;
    htmlString += `<img alt="${altText}" src="${imageUrl}">`;
    }  
    else if(regexLink.test(line)){
    const match = line.match(regexLink);
    const linkText = match[1];
    const linkUrl = match[2];
    element = document.createElement("a");
    element.href = linkUrl;
    element.innerText = linkText;
    htmlString += `<a href="${linkUrl}">${linkText}</a>`;
    }
    else if(regexQuote.test(line)){
    const content = line.replace(regexQuote, "$1");
    const parsed = parseInlineMarkdown(content);
    element = document.createElement("blockquote");
    element.innerHTML = parsed;
    htmlString += `<blockquote>${parsed}</blockquote>`
    } 
    else{
    const parsed = parseInlineMarkdown(line);
    element = document.createElement("p");
    element.innerHTML = parsed;
    htmlString += `<p>${parsed}</p>`
    }

    if(element){
    //console.log("should work")
    preview.appendChild(element)
    }
    })  
    return htmlString;
}

//Event Listener for Markdown Input 
markdownInput.addEventListener("input",() =>{
    htmlOutput.innerText = convertMarkdown();
})

