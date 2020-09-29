let x = document.getElementById('A');
let y = document.getElementById('B');
document.addEventListener('mousemove', function (e) {
    x.style.left = e.pageX + 'px';
    y.style.top = e.pageY + 'px';
});


document.addEventListener('mousedown', function () {
    x.style.backgroundColor = 'black';
    y.style.backgroundColor = 'black';
    x.style.width = '3px';
    y.style.height = '3px';
});

document.addEventListener('mouseup', function (e) {
    let flag = document.createElement('div');
    flag.className = 'flag'
    flag.innerHTML = " <img src='img.png' >";
    document.body.append(flag); 

    flag.style.position = 'absolute';
    flag.style.top = e.pageY + 'px';
    flag.style.left = e.pageX + 'px';

    x.style.backgroundColor = 'red';
    y.style.backgroundColor = 'red';
    x.style.width = '1px';
    y.style.height = '1px'
});
