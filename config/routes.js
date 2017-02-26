var Index = require('../app/controllers/index');
var Userinfo = require('../app/controllers/userinfo');
var Meet = require('../app/controllers/meet');
var Personalinfo = require('../app/controllers/personalinfo');
var Setting = require('../app/controllers/setting');
var User = require('../app/controllers/user');
var Admin = require('../app/controllers/admin');

module.exports = function(app){
	//pre handle user
	app.use(function(req, res, next){
		var _user = req.session.user;
		app.locals.user = _user;
		next();
	})

	// Index
  	app.get('/', Index.index);

  	//Userinfo
  	app.get('/userinfo/:id', Userinfo.userinfodetail);

  	//Meet
  	app.get('/meet', Meet.meet);

  	//Personalinfo
  	app.get('/personalinfo', Personalinfo.personalinfo);

  	//Setting
  	app.get('/setting', Setting.setting);

  	// User
  	app.post('/user/signup', User.signup);
  	app.post('/user/signin', User.signin);
  	app.get('/signin', User.showsignin);
  	app.get('/signup', User.showsignup);
  	app.get('/logout', User.logout);

  	//Admin
  	app.get('/admin/userlist', Admin.adminuserlist);

}

