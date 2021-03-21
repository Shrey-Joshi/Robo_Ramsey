function Username(username) {
    this.username = validate(username);
}

Username.prototype.validate = (username) => {
    try {
        if (typeof username == 'string' || username instanceof String) {
            // Run function to check if given usename is in DB
            // If not in DB, add an entry
        } else {
            throw new TypeError(`${username} is an invalid string`)
        }
    } catch (e) {
        console.error(e);
    }
    // Run SQL commands to see if (String) username is in database
}
