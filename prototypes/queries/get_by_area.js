

// var services = db.getCollection('service_area').find({
//     service_area: {
//         $in: ["Canada;BC;;Burnaby;;"]
//     }
// })
//.map(function(e){ return parseInt(e.service_id)})

db.getCollection('service').aggregate([
    {
        $lookup: {
            from: "service_area",
            localField: "id",
            foreignField: "service_id",
            as: "areas"
        }
    },
    {
        $match: {
            "areas.service_area": {
                $in: ["Canada;BC;;Roberts Creek;;", "Canada;BC;;Pender Harbour;;"]
            }
        }
    }
])