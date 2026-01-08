class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            genericComboBox: ".oxd-select-text--arrow",
            secondItemComboBox: ".oxd-select-dropdown > :nth-child(2)",
            thirdItemComboBox: ".oxd-select-dropdown > :nth-child(3)",
            genericGender: ".oxd-radio-input--active",
            dateInfoField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: ".orangehrm-left-space",
        }

        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)

    }
    fillEmployerDetails(employeeId, otherId, driversLincense, dateOfBirth) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLincense)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(dateOfBirth)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericField).eq(7).clear().type("1992-06-02")
        cy.get(this.selectorsList().dateCloseButton).click()

    }

    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get(this.selectorsList().submitButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Updated')


    }
    fillStatus() {
        cy.get(this.selectorsList().genericComboBox).eq(0).click()
        cy.get(this.selectorsList().thirdItemComboBox).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click()
        cy.get(this.selectorsList().secondItemComboBox).click()
        cy.get(this.selectorsList().genericGender).eq(1).click()
        cy.get(this.selectorsList().genericComboBox).eq(2).click()
        cy.get(this.selectorsList().thirdItemComboBox).click()

    }
}


export default MyInfoPage