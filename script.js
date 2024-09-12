// Add JS here

function MenuFunction(){

    function openMenu() {
        console.log("open menu")
        document.getElementById("menu-modal").style.display = "block";
    }

    // Close the modal
    function closeMenu() {
        document.getElementById("menu-modal").style.display = "none";
    }

    // Close the modal when clicking outside of it
    window.onclick = function(event) {
        var modal = document.getElementById("menu-modal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById('open-menu').addEventListener(
        'click',
        openMenu
    )

    document.getElementById('close-menu').addEventListener(
        'click',
        closeMenu
    )

}

MenuFunction();

function tbScore(){

    const scorelist = document.getElementById('score-list');
    const tbscore = document.getElementById('tb-score');
    const backbutton = document.getElementById('back-button');
    scorelist.style="display:none;" ;
    tbscore.style="display:-webkit-inline-box;" ;
    backbutton.style="display:-webkit-inline-box;" ;

    function calculateSum() {
        // Get all checkboxes with class 'sum-checkbox'
        const checkboxes = document.querySelectorAll('.tb-boxes');
        
        // Initialize sum variable
        let sum = 0;
    
        // Loop through each checkbox and add its value if checked
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                sum += parseFloat(checkbox.value); // Convert value to float and add to sum
            }
        });
    
        // Display the result
        document.getElementById('tb-score-result').textContent = 'Sum: ' + sum;
    }

    // Add event listeners to all checkboxes
    document.querySelectorAll('.tb-boxes').forEach(checkbox => {
        checkbox.addEventListener('click', calculateSum);
    });
    

};

function goBack(){
    const scoresDisplay = document.querySelector('.scores-display');
    const scoreList = document.querySelector('#score-list')
    scoresDisplay.style = "display: none;";
    scoreList.style = "display: relative";
}