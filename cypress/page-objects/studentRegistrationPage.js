export class StudentRegistrationPage {
    navigate(){
        cy.visit('https://demoqa.com/automation-practice-form')
    }
    // Aksi untuk input username
    inputFirstName(firstName){
        cy.get('#firstName').type(firstName)
    }
    // Aksi untuk input username
    inputLastName(lastName){
        cy.get('#lastName').type(lastName)
    }
    // Aksi untuk input username
    inputEmail(email){
        cy.get('#userEmail').type(email)
    }
    // Aksi untuk input username
    inputPhoneNumber(phoneNumber){
        cy.get('#userNumber').type(phoneNumber)
    }
    // Aksi untuk input username
    chooseGender(gender){
        cy.get('#genterWrapper > .col-md-9 ').contains(gender).click()
    }
    // Aksi untuk input username
    chooseDate(date){
        cy.get('#dateOfBirthInput').click()
        cy.get(`.react-datepicker__day--0${date}`).click()

    }
    // Aksi untuk input username
    chooseSubjects(subjects){
        cy.get('.subjects-auto-complete__value-container').click()
        cy.get('.subjects-auto-complete__value-container').type(subjects + '{enter}')
    }
    // Aksi untuk input username
    chooseHobbies(hobbies){
        cy.get('#hobbiesWrapper > .col-md-9').contains(hobbies).click()
    }
    // Aksi untuk input username
    uploadFile(namefile){
        const filepath = `images/${namefile}`
        cy.get('#uploadPicture').attachFile(filepath)
    }
    // Aksi untuk input username
    inputAddress(address){
        cy.get('#currentAddress').type(address + '{enter}')
    }
    // Aksi untuk input username
    chooseStateCity(state, city){
        cy.get('#state > .css-yk16xz-control').type(state + '{enter}')
        cy.get('#city > .css-yk16xz-control').type(state + '{enter}')
    }
    // Aksi untuk input username
    clickSubmit(){
        cy.get('#submit')
    }
}