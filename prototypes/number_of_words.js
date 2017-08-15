var totalCount = 0;

var x = db.getCollection('service').find({}).forEach(function(ser){
    
    totalCount += ser.description.split(" ").length
    
    })

var x = db.getCollection('organization').find({}).forEach(function(org){
    
    totalCount += org.description.split(" ").length
    
    })


totalCount