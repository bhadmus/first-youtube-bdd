import './commands'
import './customLogin/standard.actions'
import './customLogin/problem.actions'
import './customLogin/locked.actions'

Cypress.on('uncaught:exception', ()=>{
    return false
})