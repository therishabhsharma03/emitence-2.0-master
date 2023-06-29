
exports.homeRoutes=(req,res)=>{
    // make a get request to /api/users/
    res.render('index.ejs');
   
}
exports.service=(req,res)=>{
    // make a get request to /api/users/
    res.render('service.ejs');
   
}
exports.about=(req,res)=>{
    // make a get request to /api/users/
    res.render('about.ejs');
   
}
exports.contact=(req,res)=>{
    // make a get request to /api/users/
    res.render('contactus.ejs');
   
}
