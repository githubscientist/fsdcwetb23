const handleClick = () => {
    console.log('button clicked');
}

// get the reference of the button 
const clickmeButton = document.getElementById('clickme');

clickmeButton.addEventListener('click', handleClick);