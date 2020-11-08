const http = require('http');
const port = 3000;

var childs = require('./childs.json');

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    res.write(
        '<!DOCTYPE html> \n' +
        '<html lang="en"> \n' +
        '        <head> \n' +
        '               <meta charset="utf-8"> \n' +
        '               <meta http-equiv="X-UA-Compatible" content="IE=edge"> \n' +
        '               <meta name="viewport" content="width=device-width, initial-scale=1"> \n' +
        '               <meta name="description" content="Home Page"> \n' +
        '               <meta name="author" content="Carlos Arias"> \n' +
        '               <title>Netcentric Computing Home Page</title> \n' +
        '               <!-- Bootstrap core CSS --> ' +
        '               <link rel="stylesheet"' +
        ' href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"' +
        ' integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">' +
        '       </head> \n' +
        '        <body> \n' +
        '               <div class="container" style="text-align: center"> \n' +
        '               <h1>Example 2 of Node</h1><br> \n'
    );

    res.write(
        '               <table class="table table-bordered table-hover"> \n' +
        '                       <thead> \n' +
        '                               <tr> \n' +
        '                                       <th scope="col">Gender</th> \n' +
        '                                       <th scope="col">First Name</th> \n' +
        '                                       <th scope="col">Last Name</th> \n' +
        '                                       <th scope="col">Phone</th> \n' +
        '                               </tr> \n' +
        '                       </thead> \n' +
        '                       <tbody> \n'
    );
    for(var key in childs){
        for(var i in childs[key]){
            res.write(
                '                               <tr> \n' +
                '                                       <td>' + key + '</td> \n' +
                '                                       <td>' + childs[key][i]["firstName"] + '</td> \n' +
                '                                       <td>' + childs[key][i]["lastname"] + '</td> \n' +
                '                                       <td>' + childs[key][i]["phone"] + '</td> \n' +
                '                               </tr> \n'
            );
        }
    };
    res.write(
        '                       </tbody> \n' +
        '               </table> \n' +
        '       </body> \n' +
        '</html> \n'
    );
    res.end();
});
server.listen(port, () =>{
    console.log(`listening at local ${port}`);
});
