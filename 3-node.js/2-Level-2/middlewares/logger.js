

module.exports=function (req,res,next){
    const url=req.url
    const method=req.method
    const start= +new Date()
    const writableStream=process.stdout;
    res.on('finish',()=>{
        const duration=+new Date()-start
        const logMessage=`${method} ${url} took ${duration} ms\n\n`
        writableStream.write(logMessage)
    })
    next()
}