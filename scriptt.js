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
    let div = document.createElement('div');
    div.innerHTML = " <img src='im.jpg' >";
    document.body.append(div);

    div.style.top = e.pageY + 'px';
    div.style.left = e.pageX + 'px';
    x.style.backgroundColor = 'red';
    y.style.backgroundColor = 'red';
    x.style.width = '1px';
    y.style.height = '1px'
    
   
});
