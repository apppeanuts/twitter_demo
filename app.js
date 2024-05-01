const form = document.querySelector('form');
const tweetsContainer = document.querySelector('h2 ~ ul');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let name = document.querySelector('#name');
    let tweet = document.querySelector('#tweet');
    const lis = document.querySelectorAll('li');
    const lisLength = lis.length + 1;
    if (lisLength !== 1) {
        const hr = document.createElement('hr');
        tweetsContainer.appendChild(hr);
        const br = document.createElement('br');
        tweetsContainer.appendChild(br);
    }
    const newTweet = document.createElement('li');
    newTweet.innerHTML = `<b>${name.value}</b>: ${tweet.value} `;
    tweetsContainer.appendChild(newTweet);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    newTweet.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        tweetsContainer.removeChild(newTweet);
    });
    name.value = "";
    tweet.value = "";
});
