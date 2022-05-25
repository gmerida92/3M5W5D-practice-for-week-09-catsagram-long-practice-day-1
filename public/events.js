import { fetchImage } from "./main.js";

export const changeCat = (imageContainer, picPop, votes) =>{
    fetchImage(imageContainer);
    votes.upvote = 0;
    votes.downvote = 0;
    picPop.innerText = `Popularity Score: ${votes.upvote - votes.downvote}`;
    let list = document.querySelectorAll('li');
    list.forEach(e => e.remove());
}

export const changeVote = (votes, picPop, action) => {
    if(action === 'up'){
        votes.upvote++;
            picPop.innerText = `Popularity Score: ${votes.upvote - votes.downvote}`;
    }
    else{
        votes.downvote++;
        picPop.innerText = `Popularity Score: ${votes.upvote - votes.downvote}`;
    }
}

export const submitComment = (commentList, commentBar) => {
    let newComment = document.createElement('li');
    newComment.innerText = commentBar.value;

    commentList.appendChild(newComment);
    commentBar.value = '';
}
