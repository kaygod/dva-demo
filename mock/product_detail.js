module.exports = {
    "POST /api/detail":(req, res) => {
        const id = req.body.id;
        res.send({
          id,
          name: '越南西瓜',
          desc:
            '越南西瓜品种优越,出生于蓝布达多河畔的一个幽闭的庄园中,主人是一个热情好客的中年男人,他的额头已经谢顶,满脸的皱纹爬满脸部,但是却有一双乌黑明亮的大眼睛...',
          price: 2000,
          img:'../src/assets/xigua.jpeg',
          count: 100,
          date: '2019-09-09',
        })
      }
}