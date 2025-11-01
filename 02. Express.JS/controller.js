// export const usernameController = (req, res) => {
//     const username = req.params.username;
//     res.send(`Welcome ${username}`);
// }

// /search?keyword=express
// export const searchController = (req, res) => {
//     const keyword = req.query.keyword;
//     res.send(`Searching for ${keyword}`);
// }

//---------userLogin-----------
export const userLogin = (req, res) => {
    res.send("This is user Login route!")
}
export const userSignup = (req, res) => {
    res.send("This is user Signup route!")
}
