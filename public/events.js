import { fetchImage } from "./main.js";

export const changeCat = (imageContainer, picPop, votes) =>{
    localStorage.clear();
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
    localStorage.setItem("votes", JSON.stringify(votes))
}

export const submitComment = (commentList, commentBar, commentTextArr) => {
    let newComment = document.createElement('li');
    newComment.innerText = commentBar.value;
    commentTextArr.push(commentBar.value)

    localStorage.setItem("comments", JSON.stringify(commentTextArr))

    commentList.appendChild(newComment);
    commentBar.value = '';

    // We need the Ul
    // we need each of th children, which is LI
    //Then get LI values, icluding ['<li>blah]

}
