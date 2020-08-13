BUG #1:
    User.register returns unhashed password

TEST BUG #1:

FIX #1:
    delete password from returning statement inside User.register.
    User.register returning statement =
    RETURNING username, first_name, last_name, email, phone


BUG #2:
    