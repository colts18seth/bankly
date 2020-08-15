BUG #1:
    Patch route doesn't work unless user is an admin.

FIX #1:
    Add "||" between the two middlewares "requireLogin" and "requireAdmin" in the patch route.

TEST #1:
    routes.test.js/