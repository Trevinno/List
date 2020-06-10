const express = require('express');
const router = express.Router();
const List = require('../models/lists.model');

const idFilter = req => list => list._id === parseInt(req.params.id);

// Routes
router.get('/', (req, res) => {

    List.find({ })
        .then((data) => {
            console.log('List: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: Something broke');
        });
});

router.post('/save', (req, res) => {
    const data = req.body;

    const newList = new List(data);

    newList.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'There is a leaking pipe, who knows where it comes from' });
            console.log(error);
            return;
        }
        // BlogPost
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});


router.get('/name', (req, res) => {
    const data =  {
        date: 'peterson',
        age: 5
    };
    res.json(data);
});

router.post('/update/:id', (req, res) => {
    List.findById(req.params.id)
        .then(el => {
            el.name = req.body.name;
            el.desc = req.body.desc;
            el.url = req.body.url;
            el.date = req.body.date
            el.tags = req.body.tags

            el.save()
                .then(()  => res.json('The update was made'))
                .catch(err => res.status(400).json('Error: '+ err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
  });

  router.post('/delete/:id', (req, res) => {
    List.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
  


module.exports = router;