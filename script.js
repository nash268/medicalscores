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

    function getTreatment(){

        const tbCat = document.getElementById('tb-cat').value;
        let treatmentDuration = "";
        
        const weight = document.getElementById('weight').value ;
        let txDosage = "";


        if (weight < 2){
            txDosage = ["1/4 of - HRZ(50,75,150) + E(100)", "1/4 of - HR(50,75)"];
        }else if(weight >= 2 && weight < 3){
            txDosage = ["1/2 of - HRZ(50,75,150) + E(100)", "1/2 of - HR(50,75)"];
        }else if(weight >= 3 && weight < 4){
            txDosage = ["3/4 of - HRZ(50,75,150) + E(100)", "3/4 of - HR(50,75)"];
        }else if(weight >= 4 && weight < 8){
            txDosage = ["1 each - HRZ(50,75,150) + E(100)", "1 - HR(50,75)"];
        }else if(weight >= 8 && weight < 12){
            txDosage = ["2 each - HRZ(50,75,150) + E(100)", "2 - HR(50,75)"];
        }else if(weight >= 12 && weight < 16){
            txDosage = ["3 each - HRZ(50,75,150) + E(100)", "3 - HR(50,75)"];
        }else if(weight >= 16 && weight < 25){
            txDosage = ["4 - HRZ(50,75,150) + E(100)", "4 - HR(50,75)"];
        }else if(weight >= 25 && weight < 40){
            txDosage = ["2 - HRZE(75,150,400,275)", "2 - HR(75,150)"];
        }else if(weight >= 40 && weight < 55){
            txDosage = ["3 - HRZE(75,150,400,275)", "3 - HR(75,150)"];
        }else if(weight >= 55){
            txDosage = ["4 - HRZE(75,150,400,275)", "4 - HR(75,150)"];
        }

        if (tbCat == "norm-tb"){
            treatmentDuration =  ['2 months', '4 months'];
        }else if (tbCat == "re-tx"){
            treatmentDuration = ['3 months', '5 months'];
        }else if (tbCat == 'tb-mb'){
            treatmentDuration = ['2 months', '10 months'];
        }else if (tbCat == "dr-tb"){
            treatmentDuration = ["", ""];
            alert("Refer to Specialist/PMDT treatment site!!");
            txDosage = ["",""];
        }

        document.getElementById('intensive-duration').textContent = 'Intensive Phase ' + treatmentDuration[0];
        document.getElementById('continuation-duration').textContent = 'Continuation Phase ' + treatmentDuration[1];
        document.getElementById('intensive-dose').textContent = txDosage[0];
        document.getElementById('continuation-dose').textContent = txDosage[1];
    }

    // Add event listeners to all checkboxes
    document.querySelectorAll('.tb-boxes').forEach(checkbox => {
        checkbox.addEventListener('click', calculateSum);
    });

    document.querySelectorAll('.treatment-table').forEach(i => {
        i.addEventListener('change', getTreatment);
    });
    

    const closeContactExplanation = "Close Contact: History of cough for more than 2 weeks among the household of child (score 1), contact tracing is required \nB-ve TB patients among the households (score 2), may or may not be receiving/completed anti tuberculosis treatment \nhouseholds B+ve TB patient among the (score 3). May or may not be receiving/completed anti tuberculous treatment";
    document.getElementById("close-contact").addEventListener('click', () => {
        alert(closeContactExplanation);
    });

    const pemsamExplanation = "PEM/SAM(Protein Energy Malnutriion/Severe acute malnutrition) Use WHO Recommended Z. Scoring chart \nNot responding to Nutritional rehabilitation for 02 months";
    document.getElementById("pem-sam").addEventListener('click', () => {
        alert(pemsamExplanation);
    });

    const immunoExplanation = "Immunocompromised: Malignancies like leukemia or lymphomas etc. Immunodeiciency diseases like agammaglobunemia etc. Chemotherapy /Immuno- suppressive therapy such as steroids for more than 2 weeks";
    document.getElementById("immuno").addEventListener('click', () => {
        alert(immunoExplanation);
    });

    const clinicManExp = "Clinical Manifestation Suggesive of TB: Pulmonary Findings (unilateral wheeze, dullness), weight loss, Hepato-splenomegaly, Lymphadenopathy, ascites etc. \nStrongly suggestive of TB: Matted lymph nodes, abdominal mass or doughy abdomen, sinus formation, gibbous formation, chronic mono arthriis, meningeal indings (bulging fontanel, irritability, choroid tubercle, papilledema)";
    document.getElementById("clinic-man").addEventListener('click', () => {
        alert(clinicManExp);
    });

    const radioExp = "Radio-Diagnostic/ imaging studies includes Chest X-ray, CT Chest/MRI etc. Non-specific Ill-defined opacity or patchy infiltrates on chest X-Ray, marked broncho-vacular marking. \nSuggestive of TB: Consolidaion not responding to anibioic therapy, Para-tracheal, or mediastinal lymphadenopathy \nStrongly suggestive: Miliary Mottling, cavitation, Tuberculoma on CAT scan/MRI brain, collapse vertebrae etc."; 
    document.getElementById("radio-img").addEventListener('click', () => {
        alert(radioExp);
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