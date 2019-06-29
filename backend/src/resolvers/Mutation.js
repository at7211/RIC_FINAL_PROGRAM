// 引入外部套件
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../db';

// 定義 bcrypt 加密所需 saltRounds 次數
const SALT_ROUNDS = 2;
// 定義 jwt 所需 secret (可隨便打)
const SECRET = 'just_a_random_secret';

// helper functions
const hash = text => bcrypt.hash(text, SALT_ROUNDS);

let users = db.users;
let programApplyUsers = db.programApplyUsers;
const addUser = ({ account, email, password }) => (
  users[users.length] = {
    id: users[users.length - 1].id + 1,
    account,
    email,
    password
  }
);

const addProgramApplyUser = ({ name, studentID, department, phone, mobile, email, address }) => (
  programApplyUsers[programApplyUsers.length] = {
    id: programApplyUsers[programApplyUsers.length - 1].id + 1,
    name,
    studentID,
    department,
    phone,
    mobile,
    email,
    address
  }
)

// helper function
const createToken = ({ id, email, name }) => jwt.sign({ id, email, name }, SECRET, {
  expiresIn: '1d'
});


const Mutation = {
  signUp: async (root, { account, email, password }, context) => {
    // 1. 檢查不能有重複註冊 email
    const isUserEmailDuplicate = users.some(user => user.email === email);
    if (isUserEmailDuplicate) throw new Error('User Email Duplicate');

    // 2. 將 passwrod 加密再存進去。非常重要 !!
    const hashedPassword = await hash(password, SALT_ROUNDS);
    // 3. 建立新 user
    return addUser({ account, email, password: hashedPassword });
  },
  login: async (root, { account, password }, context) => {
    // 1. 透過 account 找到相對應的 user
    const user = users.find(user => user.account === account);
    if (!user) throw new Error('account Account Not Exists');

    // 2. 將傳進來的 password 與資料庫存的 user.password 做比對
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) throw new Error('Wrong Password');

    // 3. 成功則回傳 token
    return { token: await createToken(user) };
  },
  programApply: async ( root, { name, studentID, department, phone, mobile, email, address}, context) => {
    const programApplyUserDuplicate = programApplyUsers.some(user => user.studentID === studentID)
    if (programApplyUserDuplicate) throw new Error('User studentID Duplicate');

    return addProgramApplyUser({ name, studentID, department, phone, mobile, email, address});
  }
 }

export { Mutation as default }
