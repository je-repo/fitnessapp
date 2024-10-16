// ---------------------------------------------------------------- editworkout.html - show/hide forms buttons ----------------------------------------------------------------

// editworkout.html
// show/hide forms with event listeners
document.addEventListener("DOMContentLoaded", function() {

    document.documentElement.addEventListener("click", (e) => {

        // visibility toggles for following edit fields:
        // - datetime
        // - note
        // - add set
        // - edit set
        // switch statement for readability
        switch(true) {
            // datetime edit fields
            case e.target.matches('.edit-datetime-button, .edit-datetime-button *'):
                document.getElementById('edit-datetime-fields').classList.toggle('hide');
                break;

            // note edit field
            case e.target.matches('.edit-note-button, edit-note-button *'):
                document.getElementById('note-form').classList.toggle('hide');
                break;

            // add set fields
            // .add-set-button * matches descendents of the add-set-button class (.add-set-button) that are elements of any type (*)
            // the above is to select elements containing symbols within the buttons, that would block show/hide functionality
            case e.target.matches('.add-set-button, .add-set-button *'):
                let targetElements = document.getElementsByClassName(e.target.value);

                // if the event target value is undefined, it means that the symbol within the button is being clicked
                // in this case reassign targetElements to the value of e.target.parentNode.value to grab correct value for show/hide function
                if (e.target.value === undefined) {
                    targetElements = document.getElementsByClassName(e.target.parentNode.value);
                }

                // toggle utility class hide for show/hide functionality
                for (let element of targetElements) {
                    element.classList.toggle('hide');                    
                }
                break;

            // edit set fields
            case e.target.matches('.edit-set-button, .edit-set-button *'):
                let targetElems = document.getElementsByClassName(e.target.value);
                
                if (e.target.value === undefined) {
                    targetElems = document.getElementsByClassName(e.target.parentNode.value);
                }

                for(let element of targetElems) {
                    element.classList.toggle('hide');
                }
                break;
        }
    });
});


// ---------------------------------------------------------------- editworkout.html - autofill suggestions ----------------------------------------------------------------
// editworkout.html - populate exercise input box with autosuggestion
// *part of autocomplete list
// declared outside of "DOMContentLoaded" so function can be called from HTML...
function displayName(value) {
    const exerciseInputElement = document.querySelector("#exercise");
    const exerciseListElement = document.querySelector("#exercise-list");

    exerciseInputElement.value = value;
    exerciseListElement.innerHTML = "";
}


// editworkout.html - exercise autocomplete suggestions
// queries exercise names from fitnessapp.db via .../exerise api
document.addEventListener("DOMContentLoaded", function() {
    // autocomplete suggestions for exercise input field
    const exerciseListElement = document.querySelector("#exercise-list");
    const exerciseInputElement = document.querySelector("#exercise");

    // filters for requested API data
    const parameters = "pull";
    // empty list for transformed data
    let exercises = [];


    // populate exercises list with API data
    function fetchExercises() {

        // fetch(`http://127.0.0.1:5000/exercise`)
        fetch(`https://fitnessapp-2bdb.onrender.com/exercise`)
            .then((response) => response.json())
            .then((data) => {
                // return array of exercise names
                exercises = data.map((object) => object.name);
            });
    }

    fetchExercises();


    // load list data into element's inner HTML
    function loadData(data, element) {
        if (data) {
            // clearing element to load up-to-date data
            element.innerHTML = "";
            let innerElement = "";

            // add first 5 items to innerElement
            for (let i = 0; i < 5; i++) {
                // do not show "undefined"
                if (data[i] === undefined) {
                    continue;
                }
                innerElement += `<li>${data[i]}</li>`;
            }

            element.innerHTML = innerElement;

            // enable users to click suggestions
            const listElements = document.querySelectorAll("#exercise-list li");
            listElements.forEach((element) => element.setAttribute("onclick", `displayName("${element.innerHTML}")`));
        }
    }


    // filter user input (searchText)
    function filterData(data, searchText) {
        return data.filter((x) => x.toLowerCase().includes(searchText.toLowerCase()));
    }


    // EventListener
    exerciseInputElement.addEventListener("input", function() {
        // clears suggestions at every function call
        removeElements(exerciseListElement);

        // show autocomplete suggestions, when input box is not empty
        if (exerciseInputElement.value != "") {
            // store list of filtered data in variable
            const filteredData = filterData(exercises, exerciseInputElement.value);
            // pass filtered data back into loadData to update "autocomplete suggestions"
            loadData(filteredData, exerciseListElement);
        }
    });


    // clear list of autocomplete suggestions
    function removeElements(element) {
        element.innerHTML = "";
    }
});

