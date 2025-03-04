

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
        if (!this.#validateName(firstName) || !this.#validateName(lastName)) {
            throw new Error("First Name and Last Name must start with a capital letter and have at least 3 characters.");
        }
        if (!this.#validateAddress(address) || !this.#validateAddress(city) || !this.#validateAddress(state)) {
            throw new Error("Address, City, and State must have at least 4 characters.");
        }
        if (!this.#validateZip(zip)) {
            throw new Error("Invalid Zip Code.");
        }
        if (!this.#validatePhone(phoneNumber)) {
            throw new Error("Invalid Phone Number.");
        }
        if (!this.#validateEmail(email)) {
            throw new Error("Invalid Email Address.");
        }

        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#address = address;
        this.#city = city;
        this.#state = state;
        this.#zip = zip;
        this.#phoneNumber = phoneNumber;
        this.#email = email;
    }

    #validateName(name) {
        return /^[A-Z][a-zA-Z]{2,}$/.test(name);
    }

    #validateAddress(address) {
        return /^[a-zA-Z0-9\s]{4,}$/.test(address);
    }

    #validateZip(zip) {
        return /^[1-9][0-9]{5}$/.test(zip);
    }

    #validatePhone(phone) {
        return /^[7-9][0-9]{9}$/.test(phone);
    }

    #validateEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }

    displayContact() {
        console.log(`Name: ${this.#firstName} ${this.#lastName}`);
        console.log(`Address: ${this.#address}, ${this.#city}, ${this.#state} - ${this.#zip}`);
        console.log(`Phone: ${this.#phoneNumber}, Email: ${this.#email}`);
    }

    getDetails() {
        return `        Name: ${this.#firstName} ${this.#lastName}, 
        Address: ${this.#address}, ${this.#city}, ${this.#state}, 
        Zip: ${this.#zip}, 
        Phone: ${this.#phoneNumber}, Email: ${this.#email} 
        ::::::::::::::::::::::::::::::::::::::::`;
    }
       
}


class AddressBook{
    #contacts=[];

    addcontact(conntact){
        this.#contacts.push(conntact);
    }

    displayContacts(){
        if(this.#contacts.length ==0){
            console.log("Address Book is empty");
        }else{
            console.log("Address Book Contacts :");
            this.#contacts.forEach(contact =>console.log(contact.getDetails()));
        }
    }
}


try {
    let addressBook =new AddressBook();
    let contact1 = new Contact("John", "Doe", "123 Street", "New York", "Bhopal", "100001", "9876543210", "john.doe@example.com");
    let contact2 = new Contact("Alice", "Smith", "456 Elm St", "Los Angeles", "Canda", "900002", "9876543210", "alice.smith@example.com");

    addressBook.addcontact(contact1);
    addressBook.addcontact(contact2);
    addressBook.displayContacts();

} catch (error) {
    console.error(error.message);
}

try {
    let invalidContact = new Contact("Jo", "Doe", "12", "NY", "NY", "12345", "98543210", "john.doe@");
    contact2.displayContact();
} catch (error) {
    console.error(error.message);
}



// try {
//     let invalidContact = new Contact("jo", "doe", "12 St", "NY", "NY", "1000", "12345678", "john.doe@com");
// } catch (error) {
//     console.error(error.message);
// }