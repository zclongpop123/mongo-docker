db = connect("localhost:27100/admin");
db.adminCommand({logRotate: 1})
