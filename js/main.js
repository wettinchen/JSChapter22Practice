// Quick Concepts outline 1: Insure the DOM is available to interact with
// Quick Concepts outline 2: How to load your script for DOM interaction
/* view1.style.display = "none";
view2.style.display = "flex";
view3.style.display = "none";
const view = querySelector("#view2");
console.log(view); */

/* 
// Quick Concepts outline 3: Syntax: addEventListener(event, function, useCapture)
view1.style.display = "none";
view2.style.display = "flex";
view3.style.display = "none";

const view = document.querySelector("#view2");
const div = document.querySelector("div");
const h2 = document.querySelector("h2");

const doSomething = () => {
    alert("doing something");
};
// Quick Concepts outline 4: Using a function name in the event listener
h2.addEventListener("click", doSomething, false);
// Quick Concepts outline 5: Removing a function with a name: removeEventListener()
h2.removeEventListener("click", doSomething, false);
  */

/* 
// Quick Concepts outline 6: Using an anonymous function in the event listener
view1.style.display = "none";
view2.style.display = "flex";
view3.style.display = "none";

const view = document.querySelector("#view2");
const div = document.querySelector("div");
const h2 = document.querySelector("h2");

h2.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.textContent = "Clicked";
});
 */

/* 
// Quick Concepts outline 7: Listening for the readystatechange event
view1.style.display = "none";
view2.style.display = "flex";
view3.style.display = "none";

document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete") {
        console.log("readyState: complete");
// Quick Concepts outline 8: Constructing an initApp() function
        initApp();
    }
});

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");
// Quick Concepts outline 9: Event Bubbling
    view.addEventListener("click", (event) => {
        view.style.backgroundColor = "purple";
    });
    div.addEventListener("click", (event) => {
        div.style.backgroundColor = "blue";
    });
    h2.addEventListener("click", (event) => {
        event.target.textContent = "Clicked";
    });
};
 */

/* 
// Quick Concepts outline 10: Event Capturing
view1.style.display = "none";
view2.style.display = "flex";
view3.style.display = "none";

document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
});

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        view.style.backgroundColor = "purple";
    }, true);
    div.addEventListener("click", (event) => {
        div.style.backgroundColor = "blue";
    }, true);
    h2.addEventListener("click", (event) => {
        event.target.textContent = "Clicked";
    }, true);
};
 */

/* 
// Quick Concepts outline 11: Event Propagation and stopPropagation()
view1.style.display = "none";
view2.style.display = "flex";
view3.style.display = "none";

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
});
 */
/* 
// #1
const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        event.stopPropagation();
        view.style.backgroundColor = "purple";
    }, true);
    div.addEventListener("click", (event) => {
        div.style.backgroundColor = "blue";
    }, true);
    h2.addEventListener("click", (event) => {
        event.target.textContent = "Clicked";
    }, true);
};
 */
/*
// #2
const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        view.style.backgroundColor = "purple";
    }, false);
    div.addEventListener("click", (event) => {
        div.style.backgroundColor = "blue";
    }, false);
    h2.addEventListener("click", (event) => {
        event.stopPropagation();
        event.target.textContent = "Clicked";
    }, false);
}; */

/* 
// #3
const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        view.style.backgroundColor = "purple";
    }, false);
    div.addEventListener("click", (event) => {
        event.stopPropagation();
        div.style.backgroundColor = "blue";
    }, false);
    h2.addEventListener("click", (event) => {
        event.target.textContent = "Clicked";
    }, false);
};
 */

/* 
// Quick Concepts outline 12: event.target usage
view1.style.display = "none";
view2.style.display = "flex";
view3.style.display = "none";
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
});
 */

/* 
// #1
const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "purple";
    }, false);
    div.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "blue";
    }, false);
    h2.addEventListener("click", (event) => {
        event.target.textContent = "Clicked";
    }, false);
};
 */
/* 
// #2
const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        view.style.backgroundColor = "purple";
    }, false);
    div.addEventListener("click", (event) => {
        div.style.backgroundColor = "blue";
    }, false);
    h2.addEventListener("click", (event) => {
        event.target.textContent = "Clicked";
    }, false);
};
 */


// Quick Concepts outline 13: classList, add, remove, and toggle
/* 
view1.style.display = "none";
view2.style.display = "flex";
view3.style.display = "none";

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
});
 */
/* 
// #1 view.classList.add & view.classList.remove
const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        view.classList.add("purple");
        view.classList.remove("darkblue");
    }, false);
    div.addEventListener("click", (event) => {
        div.style.backgroundColor = "blue";
    }, false);
    h2.addEventListener("click", (event) => {
        event.target.textContent = "Clicked";
    }, false);
};
 */
/* 
// #2 view.classList.toggle
const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
    }, false);
    div.addEventListener("click", (event) => {
        div.style.backgroundColor = "blue";
    }, false);
    h2.addEventListener("click", (event) => {
        event.target.textContent = "Clicked";
    }, false);
};
 */

/* 
// #3 view.classList.toggle & div.classList.toggle
const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
    }, false);
    div.addEventListener("click", (event) => {
        div.classList.toggle("blue");
        div.classList.toggle("black");
    }, false);
    h2.addEventListener("click", (event) => {
        event.target.textContent = "Clicked";
    }, false);
};
 */
/*
// #4 Text and background-colors toggle by clicks.
const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
    }, false);
    div.addEventListener("click", (event) => {
        div.classList.toggle("blue");
        div.classList.toggle("black");
    }, false);
    h2.addEventListener("click", (event) => {
        const myText = event.target.textContent;
        myText === "My 2nd View" 
        ? (event.target.textContent = "Clicked")
        : (event.target.textContent = "My 2nd View");
    }, false);
};
 */
/* 
// #5
const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
    }, false);
    div.addEventListener("click", (event) => {
        div.classList.toggle("blue");
        div.classList.toggle("black");
    }, false);
    h2.addEventListener("click", (event) => {
        const myText = event.target.textContent;
        myText === "My 2nd View" 
        ? (event.target.textContent = "Clicked")
        : (event.target.textContent = "My 2nd View");
    }, false);

    const nav = document.querySelector("nav");
    nav.addEventListener(("mouseover"), (event) => {
        event.target.classList.add("height100");
    });
};
 */
/* 
// #6
const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
    }, false);
    div.addEventListener("click", (event) => {
        div.classList.toggle("blue");
        div.classList.toggle("black");
    }, false);
    h2.addEventListener("click", (event) => {
        const myText = event.target.textContent;
        myText === "My 2nd View" 
        ? (event.target.textContent = "Clicked")
        : (event.target.textContent = "My 2nd View");
    }, false);

    const nav = document.querySelector("nav");
    nav.addEventListener(("mouseover"), (event) => {
        event.target.classList.toggle("height100");
    });
};
 */
/* 
// #7
const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
    }, false);
    div.addEventListener("click", (event) => {
        div.classList.toggle("blue");
        div.classList.toggle("black");
    }, false);
    h2.addEventListener("click", (event) => {
        const myText = event.target.textContent;
        myText === "My 2nd View" 
        ? (event.target.textContent = "Clicked")
        : (event.target.textContent = "My 2nd View");
    }, false);

    const nav = document.querySelector("nav");
    nav.addEventListener("mouseover", (event) => {
        event.target.classList.add("height100");
    });
    nav.addEventListener("mouseout", (event) => {
        event.target.classList.remove("height100");
    });
};
 */


/* // Quick Concepts outline 14: Listening for a HTML Form submit event
view1.style.display = "none";
view2.style.display = "none";
view3.style.display = "flex";

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
});

const initApp = () => {
    const view3 = document.querySelector("#view3");
}; */


/* 
// Quick Concepts outline 15: HTML Form default behavior
view1.style.display = "none";
view2.style.display = "none";
view3.style.display = "flex";

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
});

const initApp = () => {
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => {
        console.log("submit event");
    });
};
 */


// Quick Concepts outline 16: Prevent default behavior with event.preventDefault()
view1.style.display = "none";
view2.style.display = "none";
view3.style.display = "flex";

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
});

const initApp = () => {
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("submit event");
    });
};
