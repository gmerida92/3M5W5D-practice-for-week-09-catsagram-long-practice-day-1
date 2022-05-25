const changeCat = async () => {3
    let fetched = await fetch('https://api.thecatapi.com/v1/images/search',{
        method:'GET',
        headers:{"x-api-key" : "{$$.env.x-api-key}"}
    })



    let body = await fetched.json();

    let url = body[0].url;

    // console.log(url)

    return url;
}


window.onload = () =>{
// Phase 1
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

// Phase 2
        let changeButton = document.createElement("button");
        changeButton.innerText = "New Cat"
        container.appendChild(changeButton);

        const votes = {
            upvote: 0,
            downvote: 0,
        }

        let picPop = document.createElement("div")
        picPop.innerText = `Popularity Score: ${votes.upvote - votes.downvote}`;
        container.appendChild(picPop);

        let upvoteButton = document.createElement("button");
        let downvoteButton = document.createElement("button");

        upvoteButton.innerText = "Upvote";
        downvoteButton.innerText = "Downvote"

        container.appendChild(upvoteButton);
        container.appendChild(downvoteButton);

        //* Comment section
        let commentInput = document.createElement('div');

        let commentHead = document.createElement('label');
        let commentBar = document.createElement('input');
        let submitButton = document.createElement('button');

        submitButton.innerText = 'Submit';

        // commentBar.setAttribute('type', 'text');
        commentBar.dataset.type = 'text';
        commentBar.setAttribute('placeholder', 'Add a comment...')


        commentHead.innerText = 'Comment: ';

        commentInput.appendChild(commentHead);
        commentInput.appendChild(commentBar);
        commentInput.appendChild(submitButton);

        container.appendChild(commentInput);

        let commentsSection = document.createElement('div');

        let commentList = document.createElement('ul');

        commentsSection.appendChild(commentList);

        commentsSection.style.border = '2px solid black'

        container.appendChild(commentsSection);



        //* ----------------------------------------------------

        changeButton.addEventListener("click", event => {
            changeCat().then(res => imgElement.setAttribute("src", res));
            votes.upvote = 0;
            votes.downvote = 0;
            picPop.innerText = `Popularity Score: ${votes.upvote - votes.downvote}`;
            let list = document.querySelectorAll('li');
            list.forEach(e => e.remove());
            // let listChildren = list.childNodes;
            // console.log(Array.from(listChildren));


            // console.log(imgElement);
            event.stopPropagation();
        });

        upvoteButton.addEventListener("click", event => {
            votes.upvote++;
            picPop.innerText = `Popularity Score: ${votes.upvote - votes.downvote}`;
            event.preventDefault();
        })

        downvoteButton.addEventListener("click", event => {
            votes.downvote++;
            picPop.innerText = `Popularity Score: ${votes.upvote - votes.downvote}`;
            event.preventDefault();
        })


        submitButton.addEventListener('click', e =>{
            let newComment = document.createElement('li');
            newComment.innerText = commentBar.value;

            commentList.appendChild(newComment);
            commentBar.value = '';
            e.preventDefault();

        })

    })

    //  console.log(url)
    // let img = url.then(res => res);
    // console.log(img);

}
