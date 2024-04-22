class User {
    constructor(id, login, borrowedBooks = []) {
        this.id = id;
        this.login = login;
        this.borrowedBooks = borrowedBooks;
    }

    static getAll() {
        return users;
    }
}

const users = [
    new User(1, "john_doe"),
    new User(2, "jane_smith"),
    new User(3, "bill_williams"),
    new User(4, "sarah_connor"),
    new User(5, "mark_jones"),
];

module.exports = User;