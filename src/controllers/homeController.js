import db from "../models/index";
import CRUDservice from "../services/CRUDservice";

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log('----------------------------------------')
        console.log(data)
        console.log('----------------------------------------')

        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }

}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

// Object: {
//     key: '',
//     value: ''
// }
let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    let message = await CRUDservice.createNewUser(req.body)
    console.log(message)
    return res.send('post crud from server')
}

module.exports = {
    getHomePageL: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}