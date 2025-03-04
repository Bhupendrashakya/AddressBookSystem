class Contact {
    #firstName;
    #lastName;
    #address;
    #city;
    #state;
    #zip;
    #phoneNumber;
    #email;

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#address = address;
        this.#city = city;
        this.#state = state;
        this.#zip = zip;
        this.#phoneNumber = phoneNumber;
        this.#email = email;
    }

    displayContact() {
        // Use backticks for string interpolation
        console.log(`Name: ${this.#firstName} ${this.#lastName}`);
        console.log(`Address: ${this.#address} ${this.#city} ${this.#state} ${this.#zip}`);
        console.log(`Phone: ${this.#phoneNumber}, Email: ${this.#email}`);
    }
}

let Contact1 = new Contact("Nikhil", "Rathore", "134 Street", "New York", "NY", "10001", "9685024571", "nikhil@example.com");
Contact1.displayContact();
