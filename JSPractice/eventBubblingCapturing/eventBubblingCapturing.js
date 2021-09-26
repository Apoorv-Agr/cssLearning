console.log("in here")
// By default bubbling phase
document.querySelector("#grandParent").addEventListener('click', (e) => {
    console.log("Grand Parent div click");
});

document.querySelector("#parent").addEventListener('click', (e) => {
    console.log("Parent div click");
});

document.querySelector("#child").addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    console.log("child div click");
});


const container = document.querySelector(
    ".container"
);
container.addEventListener("click", function (e) {
    console.log("container click", e);
});
const btn = document.querySelector(".btn");
btn.addEventListener("click", function (e) {
    // e.stopPropagation();
    e.stopImmediatePropagation();
    console.log("btn click 1",);
});

btn.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("btn click 2",);
});
/* 
    both the button click event-handlers got triggered, even though we used stopPropagation();
    stopImmediatePropagation() call will stop the second button click handler written in the code 
 */

/*
Event Bubbling :-
    If we click on Child div, then the output is :-
        child div click
        Parent div click
        grand Parent div click
    meaning click handlers of child, parent and grandParent all were triggered, hence this phenomena is called Event Bubbling

    If we click on Parent Div, then the output is :-
        Parent div click
        Grand Parent div click
 */
// document.querySelector("#grandParent").addEventListener('click', () => {
//     console.log("Grand Parent div click");
// },false);

// document.querySelector("#parent").addEventListener('click', () => {
//     console.log("Parent div click");
// },false);

// document.querySelector("#child").addEventListener('click', () => {
//     console.log("child div click");
// },false);

/*
Event Capturing :-
    If we click on child div, then the output is :-
        Grand Parent div click
        Parent div click
        child div click
    meaning click handlers of child, parent and grandParent all were triggered, hence this phenomena is called Event Capturing

    If we click on Parent Div, then the output is :-
        Grand Parent div click
        Parent div click
 */

// document.querySelector("#grandParent").addEventListener('click', () => {
//     console.log("Grand Parent div click");
// },true);

// document.querySelector("#parent").addEventListener('click', () => {
//     console.log("Parent div click");
// },true);

// document.querySelector("#child").addEventListener('click', () => {
//     console.log("child div click");
// },true);

/*
    If we click on child div, then the output is :-
        Parent div click
        child div click
        Grand Parent div click
    Explanation :- #parent is in Event Capturing/Trickling Down mode, where as #grandParent and
    #child are in Event Bubbling Up Phase. So when user clicked on #child Div, Browser encountered #child Bubbled ->
        So #parent click-event got triggered (in Capturing Mode) ->
        #child click-event got triggered ->
        and #grandParent click-event got triggered
 */
// document.querySelector("#grandParent").addEventListener('click', () => {
//     console.log("Grand Parent div click");
// },false); // Event bubbling

// document.querySelector("#parent").addEventListener('click', () => {
//     console.log("Parent div click");
// },true); // Event Capturing

// document.querySelector("#child").addEventListener('click', () => {
//     console.log("child div click");
// },false);// Event bubbling



/*
    e.stopPropagation();
        When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.
    e.stopImmediatePropagation();
        Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.
 */

/* document.querySelector("#grandParent").addEventListener('click', (e) => {
    e.stopPropagation();
    console.log("Grand Parent div click");
}, true);

document.querySelector("#parent").addEventListener('click', (e) => {
    console.log("Parent div click");
}, true);

document.querySelector("#child").addEventListener('click', (e) => {
    // e.stopImmediatePropagation();
    console.log("child div click");
}, true) */