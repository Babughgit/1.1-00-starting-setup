exports.getContactUs = (req, res, next) => {
    res.render('contactus', { pageTitle: 'Contact Us' });
};

exports.postContactUs = (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
};
