exports.get404 = (req, res, next) => {
	return res.status(404);
};

exports.get500 = (req, res, next) => {
	return res.status(500);
};
