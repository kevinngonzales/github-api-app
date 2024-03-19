


//function to check authentication
//if authenticated then do the next thing
//if not then redirect
export async function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect(process.env.CLIENT_BASE_URL + "/login");
}