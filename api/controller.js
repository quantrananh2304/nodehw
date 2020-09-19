const mysql = require('mysql')
const db = require('./db')

module.exports = {
    getData: (req, res) => {
        // console.log(req.query)
        let sql = 'SELECT * FROM company';
        db.query(sql, (error, response) => {
            if (error) throw error;
            res.json(response);
        })
    },
    delete: (req, res) => {
        // console.log(req.body)
        // let company = []
        company = req.body.company
        console.log(company)
        let sql = 'DELETE FROM company WHERE ?'
        for (let i = 0; i < company.length; i++) {
            db.query(sql, [{ 'company' : company[i] }], (error, response) => {
                if (error) throw error
                res.json(response)
            })
            res.json('Deleted')
        }
    }
}