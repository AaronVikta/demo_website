describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit(`http://localhost:3000`)
      cy.get('button').click({ position: 'topLeft', multiple:true, force:true})
  })
})
