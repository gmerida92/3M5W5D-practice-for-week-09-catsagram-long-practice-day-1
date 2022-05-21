
window.onload = () =>{

    fetch('https://api.thecatapi.com/v1/images/search',{
        method:'GET',
        headers:{"x-api-key" : "{$$.env.x-api-key}"}
    }).then(res => res.json()).then(txt => {
        // console.log(txt[0].url);
        let container = document.createElement('div');
        // container.style.height = '500px';
        // container.style.width = '500px';
        let title = document.createElement('h1');
        title.innerText = 'kitten pic';
        container.appendChild(title);

        let imgSrc = txt[0].url;
        let imgElement = document.createElement('img');

        imgElement.classList.add('cat-img');
        imgElement.setAttribute('src', imgSrc);

        imgElement.style.width = '500px'
        imgElement.style.height = '500px'
        container.appendChild(imgElement);

        container.style.display = 'flex';
        container.style.flexDirection = 'column'
        container.style.alignItems = 'center'
        document.body.appendChild(container);

    })

    //  console.log(url)
    // let img = url.then(res => res);
    // console.log(img);

}
