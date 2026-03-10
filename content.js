const TARGET = "microslop";

function replaceMatch(match) {
  let result = "";
  for (let i = 0; i < match.length; i++) {
    const ch = match[i];
    const replacement = TARGET[i];
    result += ch === ch.toUpperCase() ? replacement.toUpperCase() : replacement;
  }
  return result;
}

function processTextNode(node) {
  if (!node.nodeValue || !/microsoft/i.test(node.nodeValue)) return;
  node.nodeValue = node.nodeValue.replace(/microsoft/gi, replaceMatch);
}

function walkAndReplace(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    processTextNode(walker.currentNode);
  }
}

walkAndReplace(document.body);

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node.nodeType === Node.TEXT_NODE) {
        processTextNode(node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        walkAndReplace(node);
      }
    }
  }
});

observer.observe(document.body, { childList: true, subtree: true });
