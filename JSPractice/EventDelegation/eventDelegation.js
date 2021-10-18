console.log('Here')

document.querySelector('.eminemSongs').addEventListener('click', (e) => {
    console.log('e : ', e);
    const targetEl = e.target;
    console.log('targetEl ', targetEl.className);
    console.log('targetEl.innerHTML ', targetEl.innerHTML);
    if(targetEl.className === 'eminemSongCarnage') {
        alert('Current Fav. Motivation Song : '+ targetEl.textContent)
    }
});