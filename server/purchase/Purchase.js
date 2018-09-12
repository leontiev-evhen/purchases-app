var mongoose = require('mongoose');  
var PurchaseSchema = new mongoose.Schema({  
  user: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  create_at: {
    type: Date,
    default: Date.now
  }
});
mongoose.model('Purchase', PurchaseSchema);

module.exports = mongoose.model('Purchase');