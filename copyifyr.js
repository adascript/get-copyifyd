const codeEls = document.getElementsByTagName('pre');
const copyButton = document.createElement('button');
copyButton.textContent = 'Copy!';
copyButton.style.position = 'relative';
copyButton.style.top = '0';
copyButton.style.right = '0';

const body = document.getElementsByTagName('body')[0];
const textArea = document.createElement('textarea');
textArea.style = "position: absolute; left: -1000px; top: -1000px";
body.appendChild(textArea);

Array.from(codeEls).map(x => {
  const copyButtonCopy = copyButton.cloneNode(true);
  const parentEl = x.parentNode;
  parentEl.insertBefore(copyButtonCopy, x);
  copyButtonCopy.addEventListener('click', e => {
    copyToClipboard(x.getElementsByTagName('code')[0]);
    copyButtonCopy.focus();
  });
  console.log("hi");
});

const copyToClipboard = el => {
  textArea.value = el.innerText;
  textArea.focus({preventScroll:true});
  textArea.select();
  document.execCommand('copy');
}