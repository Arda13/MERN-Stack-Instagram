const valid = ({fullname, username, email, password, cf_password}) => {
    const err = {}

    if(!fullname) {
        err.fullname = "Please add your full name"
    } else if(fullname.length > 50) {
        err.fullname = "Full name area contains maximum 50 characters"
    }

    if(!username) {
        err.username = "Please add your user name"
    } else if(username.toLowerCase().replace(/ /g, '').length > 25) {
        err.username = "User name area contains maximum 25 characters"
    }

    if(!email) {
        err.email = "Please add your email"
    } else if(!validateEmail(email)) {
        err.email = "Email format is incorrect"
    }

    if(!password) {
        err.password = "Please add your password"
    } else if(password.length < 10) {
        err.password = "Password area contains minimum 10 characters"
    }

    if(password !== cf_password) {
        err.cf_password = "Confirm your password correctly"
    }

    return {
        errMsg: err,
        errLength: Object.keys(err).length
    }   
}

function validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export default valid