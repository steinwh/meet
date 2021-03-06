var mongoose = require('mongoose')

var UserinfoSchema = new mongoose.Schema({
  name: {
    unique: true,
    type: String
  },
  nickName: String,
  sex: String,
  stars: Number,
  starUser: Array,
  auth: {
    type: String,
    default: '未认证'
  },
  grade: String,
  college: String,
  age: String,
  height: String,
  weight: String,
  selfIntroduction: String,
  image: String,
  contact: String,
  beShow: {
  	type: Boolean,
  	default: false
  },
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

UserinfoSchema.pre('save', function(next) {
  var userinfo = this

  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  }
  else {
    this.meta.updateAt = Date.now()
  }

  next()
})


UserinfoSchema.statics = {
  fetch: function(cb) {
    return this
      .find({})
      .sort('meta.updateAt')
      .exec(cb)
  },
  findById: function(id, cb) {
    return this
      .findOne({_id: id})
      .exec(cb)
  }
}

module.exports = UserinfoSchema