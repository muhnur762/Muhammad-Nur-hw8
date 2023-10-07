const express = require('express')
const router = express.Router()
const pool = require('./queries.js')

// dynamic routing
// router.get('/:name', (req, res) => {
//     res.send('Hello rakamin! ' + req.params.name)
//   });

// menampilkan seluruh list film
router.get('/film',(req,res)=>{
    pool.query('SELECT * FROM film',(err,result)=>{
        if(err){
            throw err;
        }
        res.send(result.rows);
    })
});

// menampilkan seluruh list film berdasarkan id
router.get('/film/:id',(req,res)=>{

  // mengambil id
  let id = req.params.id;
    pool.query(`SELECT * FROM film WHERE film_id = ${id}` ,(err,result)=>{
        if(err){
            throw err;
        }
        res.send(result.rows);
    })
});

// menampilkan seluruh list film
router.get('/category',(req,res)=>{
  pool.query('SELECT * FROM category',(err,result)=>{
      if(err){
          throw err;
      }
      res.send(result.rows);
  })
});

// menampilkan seluruh list film berdasarkan kategory
router.get('/category/:category',(req,res)=>{

  // mengambil category
  let category = req.params.category;
    pool.query(`SELECT film_category.film_id, film.title, category.name as category, film.description FROM film_category JOIN film ON film_category.film_id = film.film_id JOIN category ON film_category.category_id = category.category_id WHERE category.name = '${category}';` ,(err,result)=>{
        if(err){
            throw err;
        }
        res.send(result.rows);
    })
});

  module.exports = router;