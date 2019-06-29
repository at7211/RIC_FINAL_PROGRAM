// 2. Resolvers 是一個會對照 Schema 中 field 的 function map ，讓你可以計算並回傳資料給 GraphQL Server
const Query = {
    activities: (parent, args, { db }, info)  => db.activities,
    users: (parent, args, { db }, info)  => db.users,
}

export { Query as default }
