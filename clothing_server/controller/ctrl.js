const db = require("../dbConfig/dbConfig")

module.exports = {
    getBanner(req,resp){
        let sql = 'select * from banner'
        db.dbConnect(sql,null,function(err,data){
            if(!err){
                resp.send(data)
            }
        })
    },
    
    getSort(req,resp){
        let sql = 'select * from sort'
        db.dbConnect(sql,null,function(err,data){
            if(!err){
                resp.send(data)
            }
        })
    },

    getShop(req,resp){
        let sql = 'select * from wares'
        db.dbConnect(sql,null,function(err,data){
            if(!err){
                resp.send(data)
            }
        })
    },

    getNews(req,resp){
        let sql = 'select * from news'
        db.dbConnect(sql,null,function(err,data){
            if(!err){
                resp.send(data)
            }
        })
    },

    getCart(req,resp){
        let id = req.query.w_id
        let sql = 'select * from cart where w_id = ?'
        db.dbConnect(sql,[id],function(err,data){
            if(!err){
                resp.send(data)
            }
        })
    },

    getCartDetail(req,resp){
        let sql = 'SELECT * FROM wares JOIN cart ON wares.w_id = cart.w_id '
        db.dbConnect(sql,null,function(err,data){
            if(!err){
                resp.send(data)
            }
        })
    },

    getSort(req,resp){
        let sql = 'select * from sort '
        db.dbConnect(sql,null,function(err,data){
            if(!err){
                resp.send(data)
            }
        })
    },

    getOrder(req,resp){
        let sql = 'select * from wares join shoporder on wares.w_id = shoporder.w_id '
        db.dbConnect(sql,null,function(err,data){
            if(!err){
                resp.send(data)
            }
        })
    },

    getDetailShop(req,resp){
        let id = req.query.s_id
        let sql = 'select * from wares where s_id = ? '
        db.dbConnect(sql,[id],function(err,data){
            if(!err){
                resp.send(data)
            }
        })
    },

    getSearchShop(req,resp){
        let text = req.query.text
        let sql = "select * from wares where title like CONCAT('%',?,'%') "
        db.dbConnect(sql,[text],function(err,data){
            if(!err){
                resp.send(data)
            }
        })
    },

    addCart(req,resp){
        let id = req.body.w_id
        let sql = 'Insert into cart values(null,?,1) '
        db.dbConnect(sql,[id],function(err,data){
            if(!err){
                resp.send(data)
            }
        })
    },

    addOrder(req,resp){
        let num = req.body.num
        let id = req.body.w_id
        let sql = 'Insert into shoporder values(null,?,?) '
        db.dbConnect(sql,[id,num],function(err,data){
            if(!err){
                resp.send(data)
            }
        })
    },
    
    delCart(req,resp){
        let id = req.body.w_id
        let sql = 'DELETE FROM cart WHERE w_id = ? '
        db.dbConnect(sql,[id],function(err,data){
            if(!err){
                resp.send(data)
            }
        })
    },

    delOrder(req,resp){
        let id = req.body.o_id
        let sql = 'DELETE FROM shoporder WHERE o_id = ? '
        db.dbConnect(sql,[id],function(err,data){
            if(!err){
                resp.send(data)
            }
        })
    },

    updateCart(req,resp){
        let id = req.body.w_id
        let num = req.body.num
        let sql = 'UPDATE cart SET num = ? WHERE w_id= ?  '
        db.dbConnect(sql,[num,id],function(err,data){
            if(!err){
                resp.send(data)
            }
        })
    },


}
