require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

mongoose
    .connect('mongodb://127.0.0.1:27017/splitMeDB', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const eventParticipantsSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: [true, "Please check your data entry, no name specified."]
    },
    
    participants: {
        type: Number,
        min: 1,
        max: 10
    }
})

// CRUD OPERATIONS 

app.get('/api/get', (req, res) => {

    const sqlInsert = "SELECT * FROM movie_reviews";

    db.query(sqlInsert, (err, result) => {
        if(!err) {
            res.send(result);
        } else {
            console.log(err);
        }
    });

});

app.post('/api/insert', (req, res) => {

    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;

    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        if(!err) {
            console.log('The result: ', result);
        } else {
            console.log(err);
        }
    });

    db.query(sqlSendBack, (err, result) => {
        if(!err) {
            res.send(result);
        } else {
            console.log(err);
        }
    });
});

app.delete('/api/delete/:movieName', (req, res) => {
    const sqlDelete = "DELETE FROM movie_reviews WHERE movie_name = ?";

    const movieName = req.params.movieName;

    db.query(sqlDelete, movieName, (err) => {
        if(!err) {
            console.log('The movie was sucessfully deleted');
        } else {
            console.log(err);
        }
    });
})

app.put('/api/update', (req, res) => {
    const sqlDelete = "UPDATE movie_reviews SET movie_review = ? WHERE movie_name = ?";

    const movieName = req.body.movieName;
    const updatedMovieReview = req.body.updatedMovieReview;

    db.query(sqlDelete, [updatedMovieReview, movieName], (err) => {
        if(!err) {
            console.log('The movie was sucessfully deleted');
        } else {
            console.log(err);
        }
    });
})

// SERVER 

app.listen(3001, () => {
    console.log('The split-me server is running on port 3001');
});