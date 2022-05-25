import { createContainer,
        fetchImage,
        createImage,
        createChangeButton,
        createPictureVoter,
        createCommentSection
        } from "./main.js";

window.onload = () =>{
// Phase 1

        let container = createContainer();

        let imageContainer = createImage(container);

        fetchImage(imageContainer);

        let changeButton = createChangeButton();

        let picVote = createPictureVoter();

        let [picPop, upVoteButton, downVoteButton, votes] = picVote;

        let commentSection = createCommentSection();

        let submitButton = commentSection.submitButton;

        //TODO create an events.js and import event logic here.
        changeButton.addEventListener("click", event => {
            fetchImage(imageContainer);
            votes.upvote = 0;
            votes.downvote = 0;
            picPop.innerText = `Popularity Score: ${votes.upvote - votes.downvote}`;
            let list = document.querySelectorAll('li');
            list.forEach(e => e.remove());
            event.stopPropagation();
        });

        upVoteButton.addEventListener("click", event => {
            votes.upvote++;
            picPop.innerText = `Popularity Score: ${votes.upvote - votes.downvote}`;
            event.preventDefault();
        })

        downVoteButton.addEventListener("click", event => {
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



}
