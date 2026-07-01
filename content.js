function selectServer(root = document) {
  if (!(root instanceof Element || root instanceof Document)) {
      return false;
  }
  const servers = root.matches?.("li[link]") ? [root] : root.querySelectorAll("li[link]");
  for (const server of servers) {
    if (server.textContent.trim().toLowerCase() === "vidsrc") {
        server.click();
        return true;
    }
  }
  return false;
}

if (!selectServer()) {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (selectServer(node)) {
          observer.disconnect();
          return;
        }
      }
    }
  });
  
  observer.observe(document.body, {
      childList: true,
      subtree: true,
  });
}