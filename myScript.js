let oneSectionIsShowing = false;

// Show section
function showSection(number) {
    document.getElementById("overlay" + number).style.display = "block";
    document.getElementById("overlay" + number).scrollTop = 0;
    oneSectionIsShowing = true;
}

// Hide all sections
function hideAllSections() {
    let overlayArray = document.getElementsByClassName("overlay");
    for (let index = 0; index < overlayArray.length; index++) {
        overlayArray[index].style.display = 'none';
    }
    oneSectionIsShowing = false;
}

// Detect escape key press to hide all sections
document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape' && oneSectionIsShowing) {
        hideAllSections();
    }
});

// Body onload function
function startFunction() {
    // Do stuff
}