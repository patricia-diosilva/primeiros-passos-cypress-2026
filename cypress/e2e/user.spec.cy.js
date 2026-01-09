import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MyInfoPage from '../pages/MyInfoPage.js'
import MenuPage from '../pages/menuPage.js'

const Chance = require('chance');

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {
    

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.word(), chance.last())
    myInfoPage.fillEmployerDetails(chance.phone({ formatted: false }), chance.ssn(), chance.ssn(), chance.date({string: true}))
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })

})
