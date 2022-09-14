import express from 'express';

import longestWord from './bootcamp/longestWord.js'
import shortestWord from './bootcamp/shortestWord.js';
import wordLengths from './bootcamp/wordLengths.js';

import totalPhoneBill from './bootcamp/totalPhoneBill.js';

import enoughAirtime from './bootcamp/enoughAirtime.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/api/word_game', function(req, res){

    const sentence = req.query.sentence;

    if(!sentence) {
        res.json({
            error : 'Please send in sentence to analyse'
        })
    }
    res.json({
        "longestWord" : longestWord(sentence),
        "shortestWord" : shortestWord(sentence),
        "sum" : wordLengths(sentence)
    });
});


app.get('/api/phonebill/total', function(req, res){

    const bills = req.query.bills;

    if(!bills) {
        res.json({
            error : 'Please enter the data to analyse'
        })
    }
    res.json({
        "totalPhoneBill" : totalPhoneBill(bills),
    });
});

app.get('/api/phonebill/prices', function(req, res){

    const bills = req.query.bills;
    const calls = 2.75;
    const sms = 0.65;

    if(!bills) {
        res.json({
            error : 'Please enter the data to analyse'
        })
    }
    res.json({
        "calls" : calls,
        "sms" : sms,

    });
});


app.post('api/phonebill/price', async function(req, res){

    //const bills = req.body.bills;
    const calls = 2.75;
    const sms = 0.65;

    const type = req.body.type;
    const price = req.body.price;

    if(type === 'sms') {
        sms = price
    } 
    else if(type === 'calls') {
        calls = price
    }

    res.json({
        "type": type,
        "price": price
    });
});


app.get('/api/enough', function(req, res){

    const usage = req.query.usage;
    const amount = req.query.amount;

    if(!usage) {
        res.json({
            error : 'Please enter data'
        })
    }
    if(!amount) {
        res.json({
            error : 'Please enter available amount'
        })
    }
    res.json({
        "airtimeMessage" : enoughAirtime(usage, amount),
    });
});




const PORT = process.env.PORT || 6003;
app.listen(PORT, function(){
    console.log('App starting on port', PORT);
  });