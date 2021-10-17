module.exports = (err, req, res, next) => {
    let code;
    let name = err.name;
    let message;

    switch (name) {
        case "ALREADY_EXIST":
            code = 409;
            message = "Already Exist";
            break;
        case "ALREADY_HAVE":
            code = 409;
            message = "You already have this subject";
            break;
        case "ALREADY_SUBMITED":
            code = 409;
            message = "You already submited this package";
            break;
        case "MONGOOSE_ERROR":
            code = 500;
            message = "mongoose error";
            break;
        case "LOGIN_FAIL":
            code = 401;
            message = "Email & password combination not found";
            break;
        case "MISSING_TOKEN":
            code = 401;
            message = "Missing access token";
            break;
        case "INVALID_TOKEN":
            code = 401;
            message = "Invalid access token";
            break;
        case "NOT_FOUND":
            code = 404;
            message = "Email and Password combination not found";
            break;
        case "BLANK_FIELD":
            code = 404;
            message = "Fill all field";
            break;
        case "ITS_FREE":
            code = 404;
            message = "No need to spend, its free";
            break;
        case "WRONG_EMAIL_FORMAT":
            code = 404;
            message = "Fill the right email format";
            break;
        case "WRONG_SUBJECT_FORMAT":
            code = 404;
            message = "Fill the right subject format";
            break;
        case "WRONG_PASSWORD_FORMAT":
            code = 404;
            message =
                "Password should be have 6-20 characters, 1 capital letter and 1 number";
            break;
        case "FORBIDDEN":
            code = 403;
            message = "No access";
            break;
        case "QUIZ_NOT_FINISHED":
            code = 403;
            message = "Participant have not finish the quiz yet";
            break;
        case "QUIZ_ATTEMPT_LIMIT":
            code = 403;
            message = "You have already finish this quiz";
            break;
        default:
            code = 500;
            message = "Internal server error";
            console.log(err);
            break;
    }
    res.status(code).json({ success: false, message });
};
