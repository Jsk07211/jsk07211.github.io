// const declares block-scoped local variables, but its value can be changed

/*
 *  var: Global when declared outside function, local when declared within function
 *  let: Can only be updated within its scope (but cannot be re-declared)
 *  const: Only exists within its scope, cannot be updated; must be initialised during declaration
 * 
 *  Source: https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
 */

const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

// Check if const navToggle exists to avoid error
if (navToggle) {
    navToggle.addEventListener("click", () => {
        // Add class so we can edit the class property
        navMenu.classList.add("show-menu")
    })
}

if (navClose) {
    navClose.addEventListener("click", () => {
        // Remove properties that are associated with the show-menu class
        navMenu.classList.remove("show-menu")
    })
}
