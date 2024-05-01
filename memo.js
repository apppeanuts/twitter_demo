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
        // const targetLi = e.target.closest('li'); // 親のli要素を取得
        // let targetHr;
        // let targetBr;

        // if (targetLi !== lis[0]) {
        //     targetHr = targetLi.previousElementSibling.previousElementSibling;
        //     targetBr = targetLi.previousElementSibling;
        //     console.log(targetHr);
        //     console.log(targetBr);
        // }
        // console.log(targetLi);
        // console.log(lis[0]);

        console.log('delete押したときのlisLength', lisLength);

        // const liZero = lis[0];
        // const liOne = lis[1];
        // const hrs = document.querySelectorAll('hr');
        // const hrZero = document.querySelectorAll('hrc')[0];
        // const brs = document.querySelectorAll('br');
        // const brZero = document.querySelectorAll('br')[0];

        // if (targetLi === liZero) {
        //     // 最初のhrとbrを消す
        //     hrs.splice(0, 1);
        //     brs.splice(0, 1);
        // }

        // tweetsContainer.removeChild(newTweet);
        // if (lisLength !== 1) {
        //     tweetsContainer.removeChild(targetHr);
        //     tweetsContainer.removeChild(targetBr);
        // } else {
        //     hrs[0].remove();
        //     brs[0].remove();
        // }
    });
    console.log('外からのlisLength', lisLength);

    name.value = "";
    tweet.value = "";
});

