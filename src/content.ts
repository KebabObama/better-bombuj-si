interface Storage {
  lastServer: string;
}

function getCleanServerName(el: HTMLElement | Element): string {
  return (el.textContent ?? "").replace(/\s+/g, " ").trim().toLowerCase();
}

chrome.storage.local.get<Storage>(
  { lastServer: "vidsrc" },
  ({ lastServer }) => {
    function selectServer(root: Node | null = document): boolean {
      if (!(root instanceof Element || root instanceof Document)) {
        return false;
      }
      const matchesTarget = (root as Element).matches?.("li[link]");
      const servers = matchesTarget
        ? [root as HTMLElement]
        : Array.from(root.querySelectorAll<HTMLElement>("li[link]"));
      for (const server of servers) {
        if (getCleanServerName(server) === lastServer) {
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
  },
);

document.addEventListener("click", (event: MouseEvent) => {
  if (!event.isTrusted) return;

  const targetElement = event.target as Element | null;
  if (!targetElement) return;

  const serverLi = targetElement.closest("li[link]");
  if (serverLi) {
    const serverName = getCleanServerName(serverLi);
    chrome.storage.local.set({ lastServer: serverName });
  }
});
