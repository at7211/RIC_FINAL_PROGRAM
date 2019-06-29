const activities = [{
    id: 1,
    link: 'https://i0.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/06/創12審核正式-01.png?fit=1024%2C724&ssl=1',
    title: '創12錄取名單',
    content: 'test',
    date: '2019-04-02'
  }, {
    id: 2,
    link: 'https://i0.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/06/創12審核正式-01.png?fit=1024%2C724&ssl=1',
    title: '創13錄取名單',
    content: 'test',
    date: '2019-04-02'
  }]

const users = [{
  id: 1,
  account: "andre",
  email: "at7211@gmail.com",
  password: "$2b$04$xk1YDg.alPqUdZLZh0TBoeu.jLu5xCoaeqXIMLJnJwirABUXaEPSW",
}]

const programApplyUsers = [{
  id: 1,
  name: 'Louis',
  studentID: 'b04602022',
  email: "asdasd@gmail.com",
  department: 'ASD',
  phone: '09123123213',
  mobile: '09123123213',
  address: 'asd',
}]

const db = {
  activities,
  users,
  programApplyUsers,
}

export { db as default }
