const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogicpoolModuleTopicsSchema = new Schema ({

  moduleName: {
    type: String ,
    required: true,
  },

  topicName: {
    type: String ,
    require: true,
    unique: true
  }

});

const LogicpoolModuleTopics = mongoose.model("LogicpoolModuleTopics" , LogicpoolModuleTopicsSchema)
module.exports = LogicpoolModuleTopics;


