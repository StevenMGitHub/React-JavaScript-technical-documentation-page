import React from 'react'

function Variables() {
    return (
    <>
        <section id="Variables" class="main-section">
            <header>Variables</header>
            <article>
                <p>You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules. </p>
                <p>A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($); subsequent characters can also be digits (0-9). Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) and the characters "a" through "z" (lowercase). </p>
                <p>You can use ISO 8859-1 or Unicode letters such as å and ü in identifiers. You can also use the Unicode escape sequences as characters in identifiers. Some examples of legal names are Number_hits, temp99, and _name. </p>
            </article>
        </section>

        <section id="Declaring-variables" class="main-section">
            <header>Declaring variables</header>
            <article>
                <p>You can declare a variable in three ways:</p>  
                <p>
                    With the keyword var. For example, 
                    <code>var x = 42.</code>
                    This syntax can be used to declare both local and global variables. 
                </p>
                <p>
                    By simply assigning it a value. For example, 
                    <code>x = 42.</code>
                    This always declares a global variable. It generates a strict JavaScript warning. You shouldn't use this variant. 
                </p>
                <p>
                    With the keyword let. For example,
                    <code>let y = 13.</code>
                    This syntax can be used to declare a block scope local variable. See Variable scope below. 
                </p>
            </article>
        </section>

        <section id="Variable-scope" class="main-section">
            <header>Variable scope</header>
            <article>
                <p>When you declare a variable outside of any function, it is called a global variable, because it is available to any other code in the current document. When you declare a variable within a function, it is called a local variable, because it is available only within that function. </p>
                <p>JavaScript before ECMAScript 2015 does not have block statement scope; rather, a variable declared within a block is local to the function (or global scope) that the block resides within. For example the following code will log 5, because the scope of x is the function (or global context) within which x is declared, not the block, which in this case is an if statement. </p>
                  <code>if (true) {'=>'} {'{var x = 5}'};  console.log(x); // 5</code>
                <p>This behavior changes, when using the let declaration introduced in ECMAScript 2015. </p>
                  <code>if (true) {'=>'} {'{let y = 5}'};  console.log(y); // ReferenceError: y is
                    not defined
                </code>
            </article>

        </section>
        <section id="Global-variables" class="main-section">
            <header>Global variables</header>
            <article>
                <p>Global variables are in fact properties of the global object. In web pages the global object is window, so you can set and access global variables using the window.variable syntax. </p>
                <p>Consequently, you can access global variables declared in one window or frame from another window or frame by specifying the window or frame name. For example, if a variable called phoneNumber is declared in a document, you can refer to this variable from an iframe as parent.phoneNumber. </p>
            </article>

        </section>
    </>
    )
}

export default Variables;