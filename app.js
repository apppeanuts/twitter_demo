const form = document.querySelector('form');
const tweetsContainer = document.querySelector('h2 ~ ul');
let lis;
let lisLength;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let name = document.querySelector('#name');
    let tweet = document.querySelector('#tweet');
    let a = 0;
    lis = document.querySelectorAll('li');
    lisLength = lis.length + 1;
    const hr = document.createElement('hr');
    const br = document.createElement('br');

    if (lisLength !== 1) {
        tweetsContainer.appendChild(hr);
        tweetsContainer.appendChild(br);
    }

    const newTweet = document.createElement('li');
    newTweet.innerHTML = `<b>${name.value}</b>: ${tweet.value} `;
    tweetsContainer.appendChild(newTweet);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    newTweet.appendChild(deleteButton);

    deleteButton.addEventListener('click', (e) => {
        console.log('delete押したときのlisLength', lisLength);
    });
    console.log('外からのlisLength', lisLength);

    name.value = "";
    tweet.value = "";
});


