interface User {
  id: number;
  name: string;
}

var user_1: User = {
  id: Math.round(Math.random() * 100),
  name: "Albert Einstein",
};

console.log(user_1.id, user_1.name);
