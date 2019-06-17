
var paginas =["https://nahual.github.io/qc-celfar/?v=1","https://nahual.github.io/qc-celfar/?v=2"
,"https://nahual.github.io/qc-celfar/?v=3","https://nahual.github.io/qc-celfar/?v=4",
"https://nahual.github.io/qc-celfar"]
//const users = [{ verion:"Version 1" , direccion: "https://nahual.github.io/qc-celfar/?v=1" },];




/// <reference types="Cypress" />
describe('Celfar', function() {
    paginas.forEach(pagina => {
     
    it("Ingreso a la pagina", function() {
        //cy.visit('https://nahual.github.io/qc-celfar/ ') final
     cy.visit(pagina)
    
     cy.get('h1').should("contain","CelFar")
    })
    it("Test titulo" , function() {       
        cy.visit(pagina)
        cy.get("#description")
     .should("contain","Conversor de temperaturas entre grados Celcius y Fahrenheit")
    })

    it("Test hipervinculo celcius", function() {       
        cy.visit(pagina)
        //cy.contains("Celcius").click()
        //cy.url().should('include', 'https://es.wikipedia.org/wiki/Grado_Celsius').pageLoadTimeout(20000)
        cy.contains("Celcius").should('have.attr', 'href').and('include', 'https://es.wikipedia.org/wiki/Grado_Celsius') 
    })
    
    it("Test hipervinculo farenheid", function() {
        cy.visit(pagina)
        //cy.contains("Fahrenheit").click()
        //cy.url().should('include', 'https://es.wikipedia.org/wiki/Grado_Fahrenheit').pageLoadTimeout(20000)
       
        cy.contains("Fahrenheit").should('have.attr', 'href').and('include', 'https://es.wikipedia.org/wiki/Grado_Fahrenheit')    })

    it("Test ver campo", function() {
        cy.get('#input')
       })   

    it("Test ver boton", function() {
        cy.get('.button')
       })      
       
    it("Test ver resultado", function() {
        cy.get('#output').should("contain","Pendiente de cálculo...")
       })   
     
    
        
    
    
    it("Numero estandar ", function() {
        cy.get('#input').clear()
        cy.get('#input').type(50)
        cy.contains('convertir!').click()
        cy.get('#output').should("contain","122")
           
    })   
    it("Numero limite inferior ", function() {
        cy.get('#input').clear()
        cy.get('#input').type(-273)
        cy.contains('convertir!').click()
        cy.get('#output').should("contain","-459.4")
           
    }) 
    it("Numero limite superior ", function() {
        cy.get('#input').clear()
        cy.get('#input').type(999999)
        cy.contains('convertir!').click()
        cy.get('#output').should("contain","1800030.2")
           
    })
    
    it("Numero limite inferior invalido ", function() {
        cy.get('#input').clear()
        cy.get('#input').type(-274)
        cy.contains('convertir!').click()
        cy.get('#output').should("contain","El valor ingresado está debajo del 0 absoluto")
           
         })   
    

    it("Test hiperlinlk 0 absoluto ", function() {
        cy.get('#input').clear()
        cy.get('#input').type(-274)
        cy.contains('convertir!').click()
        cy.contains("0 absoluto").should('have.attr', 'href').and('include', 'http://es.wikipedia.org/wiki/Cero_absoluto')
    

    
              })
         })

        });     
    
       /*Create for Jeremias Giglio 
        https://www.linkedin.com/in/jeremiasgiglio/
        */

            


            
 




 












