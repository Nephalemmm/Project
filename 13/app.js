const bcrypt = require('bcrypt');

(async function main() {
    try{
        const saltRounds = 10;
        const originalPassword = "123password";
        const password = "123password";
    
        // const hashedPassword = await bcrypt.hash(originalPassword, saltRounds)
        // console.log(hashedPassword);
    
        const salt = await bcrypt.genSalt(saltRounds);
        hashedPassword = await bcrypt.hash(originalPassword, salt)
        console.log(hashedPassword);
    
        const isMatch = await bcrypt.compare(password, hashedPassword)
        console.log(isMatch)
    }
    catch(e)
    {
        console.log(e)
    }
})();