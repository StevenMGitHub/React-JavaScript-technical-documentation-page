import React from 'react'

function HelloWorld() {
    return (
    <>
        <section id="Hello-world" class="main-section">            
            <header>Hello world</header>
            <article>
                <p>To get started with writing JavaScript, open the Scratchpad and write your first "Hello world" JavaScript code: </p>
                <code>function greetMe(yourName) { '{alert("Hello " + "yourName")}'};
                    greetMe("World");
                </code>
                <p> Select the code in the pad and hit Ctrl+R to watch it unfold in your browser!   </p>              
            </article>
        </section>
    </>
    )
}

export default HelloWorld;