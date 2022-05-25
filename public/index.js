import { createContainer,
        fetchImage,
        createImage,
        createChangeButton,
        createPictureVoter,
        createCommentSection,
        } from "./main.js";
import {changeCat, changeVote, submitComment} from './events.js';

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
        let commentBar = commentSection.commentBar;
        let commentList = commentSection.commentList;

        changeButton.addEventListener("click", event => {
            changeCat(imageContainer, picPop, votes);
            event.stopPropagation();
        });

        upVoteButton.addEventListener("click", event => {
            changeVote(votes, picPop, 'up');
            event.preventDefault();
        })

        downVoteButton.addEventListener("click", event => {
            changeVote(votes, picPop, 'down');
            event.preventDefault();
        })

        submitButton.addEventListener('click', e =>{
            submitComment(commentList, commentBar);
            e.preventDefault();

        })



}
