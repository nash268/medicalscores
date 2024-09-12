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
    document.querySelector('header').hidden = true;

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
        document.getElementById('tb-score-result').textContent = 'Score: ' + sum;

        // interpretation
        const interpretation = document.getElementById('interpretation');
        if (sum < 3){
            interpretation.textContent = "Unlikely TB - Investigate other reasons of illness";
        }else 
        if (sum == 3 || sum == 4) {
            interpretation.textContent = "Possible TB - Do not treat for TB, Manage the presenting symptom(s), Monitor monthly the condition(s) for 3 months using scoring chart";
        }else
        if (sum == 5 || sum == 6){
            interpretation.textContent = "Possible TB - Investigate and exclude other causes of illness, Investigaion may jusify therapy, Start ATT if positive on GeneXpert or Granuloma seen";
        }else
        if (sum >= 7){
            interpretation.textContent = "Probable TB - confirm (if possible)";
        }
    }

    // Add event listeners to all checkboxes
    document.querySelectorAll('.tb-boxes').forEach(checkbox => {
        checkbox.addEventListener('click', calculateSum);
    });
    

    const closeContactExplanation = "Close Contact: history of cough for more than 2 weeks among the household of child (score 1), contact tracing is required B-ve TB patients among the households (score 2), may or may not be receiving/completed anti tuberculous treatment households B+ve TB patient among the (score 3). May or may not be receiving/completed anti tuberculous treatment";
    document.getElementById("close-contact").addEventListener('click', () => {
        alert(closeContactExplanation);
    });

    const pemsamExplanation = "(Protein Energy Malnutriion/Severe acute malnutrition) Use WHO Recommended Z. Scoring chart Not responding to Nutritional rehabilitation for 02 months";
    document.getElementById("pem-sam").addEventListener('click', () => {
        alert(pemsamExplanation);
    });

};

function goBack(){
    const scoresDisplay = document.querySelector('.scores-display');
    const scoreList = document.querySelector('#score-list')
    const backbutton = document.getElementById('back-button');
    scoresDisplay.style = "display: none;";
    scoreList.style = "display: relative";
    backbutton.style = "display: none";
    document.querySelector('header').hidden = false;
}