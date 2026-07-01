const selectServer =()=> {
  const servers = document.querySelectorAll("li[link]");

  for (const server of servers) {
      if (server.textContent.trim().toLowerCase() === "vidsrc") {
          server.click();
          return true;
      }
  }

  return false;
}

const observer = new MutationObserver(() => {
  if (selectServer()) {
      observer.disconnect();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

selectServer();