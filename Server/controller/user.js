
export const get = () =>console.log('I get User');
export const put = (req, res) => {
    const data = req.body;
    return `INSERT INTO user_data 
    (
        _id, 
        _name, 
        _family_name, 
        _password, 
        _email, 
        _phone_number
        ) 
    VALUES (
        ${data._id}, 
        ${data._name}, 
        ${data._family_name}, 
        ${data._password}, 
        ${data._email}, 
        ${data._phone}
        );`
};


