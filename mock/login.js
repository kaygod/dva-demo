module.exports = {
    "POST /api/login":(req, res) => {
        const { user_name,password } = req.body;
        setTimeout(()=>{
            res.send({
                user_id:1,
                user_name,
                password
              })
        },500)
    }
}