export let createContainer = () =>{
    let elements = createElements('div', 'h1');
    let [container, title] = elements;
    container.classList.add('main');
    title.innerText = 'kitten pic';

    container.style.display = 'flex';
    container.style.flexDirection = 'column'
    container.style.alignItems = 'center'

    container.appendChild(title);
    document.body.appendChild(container);

    return container
}

export let fetchImage = async (imgTag) => {
    let fetched = await fetch('https://api.thecatapi.com/v1/images/search');
    let body = await fetched.json();
    let url = body[0].url;
    
    if(localStorage.getItem("url")){
        imgTag.setAttribute('src', localStorage.getItem("url"))
    }else{
        localStorage.setItem("url", url);
        imgTag.setAttribute('src', url);
    }

}

export let createImage = (container) => {
    let imgElement = document.createElement('img');
    // let select = document.querySelector('.main');

    imgElement.classList.add('cat-img');
    imgElement.style.width = '500px'
    imgElement.style.height = '500px'
    container.appendChild(imgElement);

    return imgElement;

}

export let createChangeButton = () =>{
    let changeButton = document.createElement("button");
    changeButton.innerText = "New Cat"
    let container = document.querySelector('.main');
    container.appendChild(changeButton);

    return changeButton;

}

export let createPictureVoter = () =>{
    let elements = createElements('div', 'button', 'button');
    let [picPop, upvoteButton, downvoteButton] = elements;
    let container = document.querySelector('.main');
    let res =[picPop, upvoteButton, downvoteButton];
    if(localStorage.getItem("votes")){
        const votes = JSON.parse(localStorage.getItem("votes"));
        console.log(votes)
        picPop.innerText = `Popularity Score: ${votes.upvote - votes.downvote}`;
        res.push(votes);
    }else{
        const votes = {
            upvote: 0,
            downvote: 0,
        }
        picPop.innerText = `Popularity Score: ${votes.upvote - votes.downvote}`;
        res.push(votes);
    }



    upvoteButton.innerText = "Upvote";
    downvoteButton.innerText = "Downvote"

    appendChildren(container, picPop, upvoteButton, downvoteButton);

    return res;
}

export let createCommentSection = () => {

    let elements = createElements('div', 'label', 'input', 'button', 'div', 'ul',);
    
    let [commentInput, commentHead, commentBar, submitButton, commentsSection, commentList] = elements;
    let container = document.querySelector('.main');

    appendChildren(commentInput, commentHead, commentBar, submitButton);
    commentsSection.appendChild(commentList);
    appendChildren(container, commentInput, commentsSection);

    submitButton.innerText = 'Submit';

    commentBar.dataset.type = 'text';
    commentBar.setAttribute('placeholder', 'Add a comment...')
    commentHead.innerText = 'Comment: ';
    commentsSection.style.border = '2px solid black'
    commentsSection.style.width = '800px';
    commentsSection.style.height = '400px';

    if(localStorage.getItem("comments")){
        let comments = JSON.parse(localStorage.getItem("comments"));

        comments.forEach(el => {
            let li = document.createElement('li');
            li.innerText= el;
            commentList.appendChild(li);
        })
    }

    return {
        commentInput : commentInput,
        commentHead : commentHead,
        commentBar : commentBar,
        submitButton : submitButton,
        commentsSection : commentsSection,
        commentList : commentList
    }

}

const createElements = (...tags) =>{
    let elements = [];

    tags.forEach(el => {
        let element = document.createElement(el);
        elements.push(element);
    })

    return elements;
};

const appendChildren = (parent, ...children) =>{
    children.forEach(el => {
        parent.appendChild(el);
    })
}
