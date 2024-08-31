
let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

let getBonusPage = (req, res) => {
    return res.render('test/bonus.ejs')
}
// Object: {
//     key: '',
//         value: ''
// }
module.exports = {
    getHomePage: getHomePage,
    getBonusPage: getBonusPage
}