document.addEventListener('DOMContentLoaded', () => {
  const serverSelect = document.getElementById('serverSelect');
  const saveBtn = document.getElementById('saveBtn');
  const status = document.getElementById('status');

  chrome.storage.local.get({ preferredServer: 'vidsrc' }, (data) => {
    serverSelect.value = data.preferredServer;
  });

  saveBtn.addEventListener('click', () => {
    const selected = serverSelect.value;
    chrome.storage.local.set({ preferredServer: selected }, () => {
      status.textContent = 'Saved successfully!';
      setTimeout(() => {
        status.textContent = '';
      }, 2000);
    });
  });
});