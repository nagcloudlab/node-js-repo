
const fs = require('fs')
const http = require('http')


const httpServer = http.createServer(); // EventEmitter

httpServer.on('request', (req, res) => {

    //---------------------------------
    // Ex1
    //---------------------------------

    // res.writeHead(200, {'Content-Type': 'text/plain'})
    // res.write("hello sapient!")
    // res.end();

    //---------------------------------
    // Ex2. blocking-io
    //---------------------------------

    // const pdf = fs.readFileSync('./ppt/all-levels node.pdf') // blocking IO
    // res.writeHead(200,
    //     {
    //         'Content-Type': 'application/pdf',
    //         'Content-Disposition': `attachment; filename="node.pdf"`
    //     })
    // res.write(pdf)
    // res.end();


    //-------------------------------------------
    // Ex3. non-blocking-io  ( without streams )
    //-------------------------------------------

    // res.writeHead(200,
    //     {
    //         'Content-Type': 'application/pdf',
    //         'Content-Disposition': `attachment; filename="node.pdf"`
    //     })
    // fs.readFile('./ppt/all-levels node.pdf', (err, data) => {
    //     if (err) throw err;
    //     res.write(data)
    //     res.end();
    // })

    //-------------------------------------------
    // Ex3. non-blocking-io  ( with streams )
    //-------------------------------------------

    const readableStream = fs.createReadStream('./ppt/all-levels node.pdf')

    res.writeHead(200,
        {
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="node.pdf"`
        })
    readableStream.pipe(res);

});



httpServer.listen(3000, () => {
    console.log("http-server ready..")
})