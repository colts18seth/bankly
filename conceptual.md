### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JWT is Javascript Web Token

- What is the signature portion of the JWT?  What does it do?
To "sign" a JWT, you pass in the payload and secret key.  This hashs and returns the hashed payload.

- If a JWT is intercepted, can the attacker see what's inside the payload?
No, not unless they know the secret key.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
You can make a login route that checks the password for a user.  If it passes it can return a token of the users hashed data.  The user can then pass the token to a different route that checks for the token and, if verified, can be allowed access.

- Compare and contrast unit, integration and end-to-end tests.
Unit tests test a specific piece of code or function individually.
Integration tests test a certain section of a program, like a specific route.  This will test multiple functions or pieces of code at the same time.
End-to-end tests test the entire program from start to finish.

- What is a mock? What are some things you would mock?
Mocking is used to create placeholder data for test.  Users can easily be mocked.

- What is continuous integration?
Using git as an example, continuous integration would be when the team working on a program pushes their code to the main working branch multiple times a day.  You make many small changes many times a day.

- What is an environment variable and what are they used for?
Environment variables are variables that you can use in config files to help make developing easier.  An example would be using a test database when running test.  You can set the variable to be test at the top of the test file and your main database won't be affected.

- What is TDD? What are some benefits and drawbacks?
Test Driven Development
Benefit - Don't need to write tests for the code afterwards, they are written first.
Drawback - Slows down development, because the tests are written first.

- What is the value of using JSONSchema for validation?
It saves a lot of time. It's quick and easy.

- What are some ways to decide which code to test?
If it can be manipulated in any way, it probably needs a test written for it.

- What are some differences between Web Sockets and HTTP?
Web Sockets connection is bidirectional and once the connection is made it stays connected until it is terminated.  This functionality makes instant messaging seem smooth and seemless.

- Did you prefer using Flask over Express? Why or why not (there is no right answer here --- we want to see how you think about technology)?
I liked Flask at the time, but after learning Express I really like the customizability and I prefer it.