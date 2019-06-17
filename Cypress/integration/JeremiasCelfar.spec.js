
var paginas =['https://nahual.github.io/qc-celfar/?v=1','https://nahual.github.io/qc-celfar/?v=2'
,'https://nahual.github.io/qc-celfar/?v=3','https://nahual.github.io/qc-celfar/?v=4',
'https://nahual.github.io/qc-celfar']



var numerito = 0
var mensaje = "";
/// <reference types='Cypress' />
describe('Celfar', function() {
    paginas.forEach(pagina => {
     
    numerito = numerito + 1 ;
    mensaje = "---Version     " + numerito;
    it('Ingreso a la pagina'+ mensaje, function() {
     cy.visit(pagina)
    })

    it('Tutulo de pagina'+ mensaje, function() {
        cy.get('title').should('contain','Conversor CelFar')
       })


    it('Titulo'+ mensaje, function() {
        cy.get('h1').should('contain','CelFar')
       })

    it('Descipción'+ mensaje , function() {       
        cy.visit(pagina)
        cy.get('#description')
     .should('contain','Conversor de temperaturas entre grados Celcius y Fahrenheit')
    })

    it('Test hipervinculo celcius'+ mensaje, function() {       
        cy.visit(pagina)
        cy.contains('Celcius').should('have.attr', 'href')
        cy.get('[href="http://es.wikipedia.org/wiki/Grado_Celsius"]')
    })
    
    it('Test hipervinculo farenheid'+ mensaje, function() {
        cy.visit(pagina)
        cy.contains('Fahrenheit').should('have.attr', 'href')
        cy.get('[href="http://es.wikipedia.org/wiki/Grado_Fahrenheit"]')
       })
    it('Test ver campo'+ mensaje, function() {
        cy.get('#input')
       })   

    it('Test ver boton'+ mensaje, function() {
        cy.get('.button')
       })      
       
    it('Test ver resultado'+ mensaje, function() {
        cy.get('#output').should('contain','Pendiente de cálculo...')
       })   
     
    it('Numero estandar '+ mensaje, function() {
        cy.get('#input').clear()
        cy.get('#input').type(50)
        cy.contains('convertir!').click()
        cy.get('#output').should('contain','122')
           
    })   
    it('Numero limite inferior '+ mensaje, function() {
        cy.get('#input').clear()
        cy.get('#input').type(-273)
        cy.contains('convertir!').click()
        cy.get('#output').should('contain','-459.4')
           
    }) 
    it('Numero limite superior '+ mensaje, function() {
        cy.get('#input').clear()
        cy.get('#input').type(999999)
        cy.contains('convertir!').click()
        cy.get('#output').should('contain','1800030.2')
           
    })
    
    it('Numero limite inferior invalido '+ mensaje, function() {
        cy.get('#input').clear()
        cy.get('#input').type(-274)
        cy.contains('convertir!').click()
        cy.get('#output').should('contain','El valor ingresado está debajo del 0 absoluto')
           
         })   
    
    it('Numero limite superior '+ mensaje, function() {
        cy.get('#input').clear()
        cy.get('#input').type(999999)
        cy.contains('convertir!').click()
        cy.get('#output').should('contain','1800030.2')
           
    })
    
    it('Test cantidad de digitos '+ mensaje, function() {
        cy.get('#input').clear()
        cy.get('#input').type(9999999)
        cy.contains('convertir!').click()
        cy.get('#output').should('contain','El valor ingresado es muy largo')
           
    })
    
    it('Test Ingreso de caracteres invalido '+ mensaje, function() {
        cy.get('#input').clear()
        cy.get('#input').type('Jeremias Giglio')
        cy.contains('convertir!').click()
        cy.get('#output').should('contain','El valor ingresado no es un número (recuerde que los decimales deben expresarse con \'.\' y no con \',\')')
           
    })

    it('Test Ingreso de caracteres y numeros '+ mensaje, function() {
        cy.get('#input').clear()
        cy.get('#input').type('JG1997')
        cy.contains('convertir!').click()
        cy.get('#output').should('contain','El valor ingresado no es un número (recuerde que los decimales deben expresarse con \'.\' y no con \',\')')
           
    })

    it('Test Ingreso de simbolos'+ mensaje, function() {
        cy.get('#input').clear()
        cy.get('#input').type('#$%&&//-+')
        cy.contains('convertir!').click()
        cy.get('#output').should('contain','El valor ingresado no es un número (recuerde que los decimales deben expresarse con \'.\' y no con \',\')')
           
    })

    it('Test hiperlinlk 0 absoluto '+ mensaje, function() {
        cy.get('#input').clear()
        cy.get('#input').type(-274)
        cy.contains('convertir!').click()
        cy.contains('0 absoluto').should('have.attr', 'href').and('include', 'http://es.wikipedia.org/wiki/Cero_absoluto')
    })

})

});     
    
       /*Creatd by Jeremias Giglio 
        https://www.linkedin.com/in/jeremiasgiglio/
        */

            


            
 




 












