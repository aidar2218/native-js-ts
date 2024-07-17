import {
    addCompany,
    addNewBooksToUser,
    makeHairstyle,
    moveUser, removeBook, updateBook, updateCompanyTitle,
    upgradeLaptop,
    UserType,
    UserWithBooksType, UserWithCompaniesType,
    UserWithLaptopType
} from "./immutability";

let user: UserType;
let userWithLaptop: UserWithLaptopType;
let userWithBooks: UserWithBooksType;
let userWithCompanies: UserWithCompaniesType;


beforeEach(() => {
    user = {
        name: "Aidar",
        hair: 44,
        address: {
            title: "Tokmok"
        },
    };
    userWithLaptop = {
        name: "Aidar",
        hair: 52,
        address: {title: "Tokmok"},
        laptop: {title: "Legion"},
    }
    userWithBooks = {
        name: "Aidar",
        hair: 52,
        address: {title: "Tokmok"},
        laptop: {title: "Legion"},
        books: ["html", "css", "js", "react"]
    }
    userWithCompanies = {
        name: "Aidar",
        hair: 52,
        address: {title: "Tokmok"},
        laptop: {title: "Legion"},
        books: ["html", "css", "js", "react"],
        companies: [
            {id: 111, title: "Google"},
            {id: 222, title: "Spotify"},
            {id: 333, title: "Microsoft"},
        ]
    }
})



test("reference type test immutability", () => {
    const awesomeUser = makeHairstyle(user, 2);

    expect(awesomeUser.hair).toBe(22);
    expect(user.hair).toBe(44);
    expect(awesomeUser.address).toBe(user.address);
});

test("change address immutability", () => {
    const movedUser = moveUser(userWithLaptop, "Barcelona");

    expect(userWithLaptop).not.toBe(movedUser);
    expect(userWithLaptop.address).not.toBe(movedUser.address);
    expect(userWithLaptop.laptop).toBe(movedUser.laptop);
    expect(movedUser.address.title).toBe("Barcelona");
    expect(userWithLaptop.address.title).toBe("Tokmok");
    expect(movedUser.name).toBe("Aidar");
    expect(userWithLaptop.name).toBe("Aidar");
});

test("upgrade users laptop to Macbook", () => {
    const upgradedUsersLaptop = upgradeLaptop(userWithLaptop, "Macbook");

    expect(upgradedUsersLaptop).not.toBe(userWithLaptop);
    expect(upgradedUsersLaptop.laptop).not.toBe(userWithLaptop.laptop);
    expect(upgradedUsersLaptop.address).toBe(userWithLaptop.address);
    expect(upgradedUsersLaptop.laptop.title).toBe("Macbook");
    expect(userWithLaptop.laptop.title).toBe("Legion");
});

test("add new books to user", () => {
    const usersWithNewBooks = addNewBooksToUser(userWithBooks, ["ts", "rest api"]);

    expect(usersWithNewBooks).not.toBe(userWithBooks);
    expect(usersWithNewBooks.laptop).toBe(userWithBooks.laptop);
    expect(usersWithNewBooks.address).toBe(userWithBooks.address);
    expect(usersWithNewBooks.books).not.toBe(userWithBooks.books);
    expect(userWithBooks.books).toStrictEqual(["html", "css", "js", "react"]);
    expect(usersWithNewBooks.books).toStrictEqual(["html", "css", "js", "react", "ts", "rest api"]);
});

test("update book for user", () => {
    const userWithUpdatedBook = updateBook(userWithBooks, "js", "ts");

    expect(userWithUpdatedBook).not.toBe(userWithBooks);
    expect(userWithUpdatedBook.laptop).toBe(userWithBooks.laptop);
    expect(userWithUpdatedBook.address).toBe(userWithBooks.address);
    expect(userWithUpdatedBook.books).not.toBe(userWithBooks.books);
    expect(userWithBooks.books[2]).toBe("js");
    expect(userWithUpdatedBook.books[2]).toBe("ts");
});

test("remove book for user", () => {
    const userWithRemovedBook = removeBook(userWithBooks, "js");

    expect(userWithRemovedBook).not.toBe(userWithBooks);
    expect(userWithRemovedBook.laptop).toBe(userWithBooks.laptop);
    expect(userWithRemovedBook.address).toBe(userWithBooks.address);
    expect(userWithRemovedBook.books).not.toBe(userWithBooks.books);
    expect(userWithRemovedBook.books.length).toBe(3);
    expect(userWithRemovedBook.books[2]).not.toBe("js");
    expect(userWithRemovedBook.books[2]).toBe("react");
    expect(userWithBooks.books.length).toBe(4);
    expect(userWithBooks.books[2]).toBe("js");
});

test("add company for user", () => {
    const userWithAddedCompany = addCompany(userWithCompanies, "Airbnb");

    expect(userWithAddedCompany).not.toBe(userWithCompanies);
    expect(userWithAddedCompany.books).toBe(userWithCompanies.books);
    expect(userWithAddedCompany.address).toBe(userWithCompanies.address);
    expect(userWithAddedCompany.laptop).toBe(userWithCompanies.laptop);
    expect(userWithAddedCompany.companies).not.toBe(userWithCompanies.companies);
    expect(userWithAddedCompany.companies.length).toBe(4);
    expect(userWithAddedCompany.companies[3].title).toBe("Airbnb");
    expect(userWithCompanies.companies.length).toBe(3);
    expect(userWithCompanies.companies[2].title).toBe("Microsoft");
});

test("update company's title", () => {
    const userWithUpdatedCompanyTitle = updateCompanyTitle(userWithCompanies,
        333, "Airbnb") as UserWithCompaniesType;

    expect(userWithUpdatedCompanyTitle).not.toBe(userWithCompanies);
    expect(userWithUpdatedCompanyTitle.books).toBe(userWithCompanies.books);
    expect(userWithUpdatedCompanyTitle.address).toBe(userWithCompanies.address);
    expect(userWithUpdatedCompanyTitle.laptop).toBe(userWithCompanies.laptop);
    expect(userWithUpdatedCompanyTitle.companies).not.toBe(userWithCompanies.companies);
    expect(userWithUpdatedCompanyTitle.companies[2].id).toBe(userWithCompanies.companies[2].id);
    expect(userWithUpdatedCompanyTitle.companies[2].title).toBe("Airbnb");
    expect(userWithCompanies.companies[2].title).toBe("Microsoft");
});