module.exports = function(post_id_cache){ 
		return function(req, res, next){
			
			res.post_ids.map( (item, index) => {
				post_id_cache.set( index, item , 0)
			} )

			next()
		}
	}