import Parse from 'parse';

export const userService = {
    login,
    logout,
    register,
    reset
};

function login(username, password) {
    Parse.User.logIn(username, password)
    .then( () => {
        return Promise.resolve( Parse.User.current() );
    } )
    .catch( (error) => {
        return Promise.reject(error);
    });
}

function logout() {
    Parse.User.logOut()
    .then(() => {
        return Promise.resolve();
    })
    .catch( (error) => {
        return Promise.reject(error);
    });
}

function register(params) {
    var user = new Parse.User();
    for(prop in params) {
        user.set(prop, params[prop]);
    }
    try {
        user.signUp()
        .then( () => {
            return Promise.resolve();
        })
        .catch( (error) => {
            return Promise.reject(error);
        } );
    } 
    catch (error) {
        return Promise.reject(error);
    }
}

function reset(email) {
    Parse.User.requestPasswordReset(email)
    .then(() => {
        return Promise.resolve();
    })
    .catch((error) => {
        return Promise.reject(error);
    });
}

