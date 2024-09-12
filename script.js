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