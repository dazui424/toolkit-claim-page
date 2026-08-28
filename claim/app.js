const destinationUrl = 'https://dazui424.github.io/toolkit-claim-page/';
const claimButton = document.querySelector('#claim-button');
const claimTip = document.querySelector('#claim-tip');
const result = document.querySelector('#result');
const copyButton = document.querySelector('#copy-button');
const copyStatus = document.querySelector('#copy-status');

function showResult() {
  claimButton.hidden = true;
  claimTip.hidden = true;
  result.hidden = false;
  result.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

async function copyLink() {
  try {
    await navigator.clipboard.writeText(destinationUrl);
    copyStatus.textContent = '链接已复制';
    copyButton.textContent = '已复制';
  } catch {
    const input = document.createElement('textarea');
    input.value = destinationUrl;
    input.setAttribute('readonly', '');
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    const copied = document.execCommand('copy');
    input.remove();
    copyStatus.textContent = copied ? '链接已复制' : '请长按上方链接进行复制';
  }
}

claimButton.addEventListener('click', showResult);
copyButton.addEventListener('click', copyLink);
