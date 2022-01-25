import Mock from 'mockjs'
Mock.mock(`http://test.com/api/imgs`, (req, res) => {
    console.log(req, res)
    return {
        status: 0,
        message: "请求成功!",
        data: [
            '../assets/img-1.jpg',
            '../assets/img-1.jpg',
            '../assets/img-1.jpg',
            '../assets/img-1.jpg',
            '../assets/img-1.jpg',
            '../assets/img-1.jpg'
        ]
    }
})