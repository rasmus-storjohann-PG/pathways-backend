var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HolidayScheduleSchema = new Schema({
  id:  { type: String, required: true },
  service_id: String,
  location_id: String,
  service_at_location_id: String,
  closed: {type: Boolean, require: true},
  opens_at: String,
  closes_at: String,
  start_date: String,
  end_date: String
}, { collection : 'holiday_schedule' });

module.exports = mongoose.model('HolidaySchedule', HolidayScheduleSchema );
