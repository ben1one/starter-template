var fs = require('fs');
var remote = require('remote-json');

let obj = {};
let markets = ['we', 'hk'];

var saveJSON = (mkt) => {

    remote('https://www.ef.com/campaignhelper/ef-services/translator.svc/GetSitecoreData/?itemId={F1FBECAB-1E71-4A47-9CD8-343072E9A092}&marketcode='+mkt+'&culture=en')
        .get(function (err, res, body) {
            console.log(`${mkt}:${res.statusCode}`); // 200
            //console.log(body[1].value);

            body.map((x) => { obj[x.key] = x.value });

            fs.writeFileSync('./src/i18n/'+mkt+'.json', JSON.stringify(obj));

        });

}

markets.map( (x) => { saveJSON(x); } );