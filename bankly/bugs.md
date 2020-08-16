<!-- includes short decsription of bug
        how it was fixed        
        test that checks for the bug
        **also includes the file and line where the fix and test is located
 -->

BUG #1:
    Login route always returns a token.

FIX #1:
    Added the "await" keyword to the athenticate method on the User class.
    auth.js/44

TEST #1:
    routes.test.js/94

====================================================================

BUG #2:
    JWT wasn't verifying, only decoding.

FIX #2:
    Changed decode to verify in auth route.
    middleware\auth.js/66

TEST #2:
    routes.test.js/112

=====================================================================

BUG #3:
    users/"username" didn't throw an error when the username passed was not found.

FIX #3:
    Added the "throw" key word before the error
    models\user.js/115

TEST #3:
    routes.test.js/148

=====================================================================

BUG #4:
    Patch route doesn't work unless user is an admin.

FIX #4:
    Added new middleware that checks if current user is logged in or admin.
    middleware\auth.js/36

TEST #4:
    routes.test.js/163

=====================================================================

BUG #5:
    Patch route didn't return 404 if user wasn't found.

FIX #5:
    Added the .get method before the .update method to check if user exists.
    routes\users.js/77

TEST #5:
    routes.test.js/213

=====================================================================

BUG #6:
    Delete route was returning "message: deleted" even if user didn't exist.

FIX #6:
    Added await key word.
    routes\users.js/109

TEST #6:
    routes.test.js/205

=====================================================================

BUG #7:
    No json validation on any routes.

FIX #7:
    Added json validation.
    routes\users.js/70

TEST #7:
    routes.test.js/243