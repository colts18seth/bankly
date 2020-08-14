BUG #1:
    User.register returns unhashed password

TEST BUG #1:

FIX #1:
    delete password from returning statement inside User.register.
    User.register returning statement =
    RETURNING username, first_name, last_name, email, phone


BUG #2:
    JWT's are decoded instead of verified.

FIX #2:  
    change jwt.decode to jwt.verify and pass in secret key as second param


BUG #3:
    register and login routes return token instead of _token

FIX #3:
    changed return statement to {"_token": token}

BUG #4:
    users patch route required the user to be the current user and admin instead of one or the other

FIX #4:
    use an || 'or' statement between middlewares

BUG #5:
    patch route accepts all keys

FIX #5:
    