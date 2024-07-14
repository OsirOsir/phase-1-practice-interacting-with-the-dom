// Increment and Decrement Counter
// Like a Counter Value
// Pause and Resume the Counter
// Add Comments

document.addEventListener("DOMContentLoaded", () => {
  //Iam selecting the elements I wanna work on 
  const counterElement = document.getElementById('counter');
  const minusButton = document.getElementById('minus');
  const plusbutton = document.getElementById('plus');
  const heartButton = document.getElementById('heart');
  const likesList = document.querySelector('.likes');
  const pauseButton = document.getElementById('pause');
  const commentForm = document.getElementById('comment-form');
  const commentInput = document.getElementById('comment-input');
  const commentsList = document.getElementById('list');

  //function to update the counter display
  function updateCounter(value) {
    counterElement.innerText = value;
  }
//initialize counter value
  let counterValue = 0;

  //event listener for when we click the  minus button 
  minusButton.addEventListener("click", () => {
    counterValue--;
    updateCounter(counterValue)
  });

//event listner for when we click the plus button
  plusbutton.addEventListener("click", () => {
    counterValue++;
    updateCounter(counterValue)
  });

  //adding an event listener to my heartButton 
  heartButton.addEventListener("click", () => {
    const existingLike = document.querySelector(`[data-num="${counterValue}"]`);
    if (existingLike) {
      const span = existingLike.querySelector('span');
      span.innerText = parseInt(span.innerText) + 1;
    } else {
      const likeItem = document.createElement('li');
      likeItem.setAttribute('data-num', counterValue);
      likeItem.innerHTML = `${counterValue} has been liked <span>1</span> time`;
      likesList.appendChild(likeItem);
    }
  })
  let playing = true;
  let interval = timer(); // Start the timer initially

pauseButton.addEventListener('click', () => {
  if (playing) {
    // Pause the counter
    clearInterval(interval);
    pauseButton.innerText = "resume";
  } else {
    // Resume the counter
    interval = timer(); // Restart the timer
    pauseButton.innerText = "pause";
  }
  playing = !playing; // Toggle playing state
});
  function timer() {
    return setInterval(function() {
      var counterElement = document.getElementById("counter");
      var currentCount = parseInt(counterElement.innerText);
      counterElement.innerText = currentCount + 1;
    }, 1000);
  }
   commentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const commentText = commentInput.value.trim(); // Get comment text, trimmed
    
    if (commentText !== '') {
      // Create a new <p> element for the comment
      const commentElement = document.createElement('p');
      commentElement.innerText = commentText;
      
      // Append the comment element to the comments list
      commentsList.appendChild(commentElement);
      
      // Clear the comment input field
      commentInput.value = '';
    }
  });
  //initial display update 
  updateCounter(counterValue)
})