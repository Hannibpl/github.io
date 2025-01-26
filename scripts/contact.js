"use strict";

/*
* Repersents a contact with a name, contact number and email address
*
 */
import data from "bootstrap/js/src/dom/data";

class Contact {

    /**
     * Contructs a new Contact instace
     * @param fullName
     * @param contactNumber
     * @param emailAddress
     */
    constructor(fullName = "", contactNumber = "", emailAddress = "") {
        this._fullName = fullName;
        this.contactNumber = contactNumber;
        this.emailAddress = emailAddress;
    }

    /**
     * Gets the full name of the contact
     * @returns {string}
     */
    get fullName() {
        return this._fullName;
    }

    /**
     * Sets the full name of the contact, Validates input to ensure it's a non-empty string
     * @param fullName
     */
    set fullName(fullName) {
        if(typeof fullName !== "string" || fullName.trim() === "") {
            throw new Error("Invalid fullName: must be non-empty string");
        }
        this._fullName = fullName;
    }

    /**
     * Get the contact number of the contact
     * @returns {*}
     */
    get contactNumber() {
        return this._contactNumber;
    }

    /**
     * Sets the contact number of the contact. Vaildates input to ensure it matches the style
     * @param contactNumber
     */
    set contactNumber(contactNumber) {
        const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
        if(!phoneRegex.test(contactNumber)) {
            throw new Error("Invalid contact number: must be a 10-digit number");
        }
        this._contactNumber = contactNumber;
    }

    /**
     * Gets the email address for the contact. Vaildate input to ensure a standard email format
     * @returns address
     */
    get emailAddress() {
        return this._contactNumber;
    }


    set emailAddress(address) {
      const emailRegex = /^[]
        if(!emailRegex.test(address)) {
            throw new Error("Invalid email address: must be non-empty string");
        }
        this._emailAddress = address;
    }

    toString(){
        return `Full Name: ${this._fullName}\n,
        Contact Number: ${this._contactNumber}
        Email: ${this._emailAddress}`;
    }

serialize() {
    if(!this._fullName|| !this._contactNumber|| !this._emailAddress) {
        console.error("One or more of the contact properties are missing or invalid email address");
        return null;
        }
        return `${this._fullName},${this._contactNumber}${this._emailAddress}`;
    }


    deserialize(data){
        if(typeof data !== "string" || data.split(","), length !== 3) {
            console.error("Invaild bitch");
            return null;
        }
        const propArray = data.split(",");
        this._fullName = propArray[0];
        this._contactNumber = propArray[1];
        this._emailAddress = propArray[2];
    }
}
