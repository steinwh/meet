//index page
exports.index = function(req, res){
	res.render('index',{
		title:'首页',
		userinfos:[
		{
			name:'1号用户',
			_id: 1,
			image:'/upload/1.jpg'
		},
		{
			name:'4号用户',
			_id: 4,
			image:'/upload/1.jpg'
		},
		{
			name:'3号用户',
			_id: 3,
			image:'/upload/1.jpg'
		},
		{
			name:'2号用户',
			_id: 2,
			image:'/upload/1.jpg'
		},
		{
			name:'5号用户',
			_id: 5,
			image:'/upload/1.jpg'
		}]
	})
}

