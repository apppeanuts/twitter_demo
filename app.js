const form = document.querySelector('form');
const tweetsContainer = document.querySelector('h2 ~ ul');
let lis;
let lisLengthPlusOne;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let name = document.querySelector('#name');
    let tweet = document.querySelector('#tweet');
    lis = document.querySelectorAll('li');
    lisLengthPlusOne = lis.length + 1;
    const hr = document.createElement('hr');
    const br = document.createElement('br');
    if (lisLengthPlusOne !== 1) {
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
        lis = document.querySelectorAll('li');
        const targetLi = e.target.closest('li'); // 親のli要素を取得

        // lis要素は2個以上ある状態で、かつ削除したliが先頭だった場合
        if (targetLi === lis[0] && lis[1]) {
            const hrZero = lis[1].previousElementSibling.previousElementSibling;
            const brZero = lis[1].previousElementSibling;
            hrZero.remove();
            brZero.remove();
            targetLi.remove();

        // 削除したliが先頭以外だった場合（＝lis要素が2個以上ある状態）
        } else if (targetLi !== lis[0]) {
            const hrZero = targetLi.previousElementSibling.previousElementSibling;
            const brZero = targetLi.previousElementSibling;
            hrZero.remove();
            brZero.remove();
            targetLi.remove();
            
        // lis要素が1個しか無い状態で、かつ削除したliが先頭だった場合
        } else {
            targetLi.remove();
        }
    });
    name.value = "";
    tweet.value = "";
});
