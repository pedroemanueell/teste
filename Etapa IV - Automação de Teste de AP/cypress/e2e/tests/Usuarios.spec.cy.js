describe('Cadastro do usuario', () => {
  let usuariotId;

    it('Validar cadastro de usuario', () => {
      cy.request({
        method: 'POST',
        url: 'usuarios',
        body: {
            nome: "Teste da Silva",
            email: "testebemoooll@qa.com.br",
            password: "teste",
            administrador: 'true'
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body._id).to.exist;
        expect(response.body.message).to.eq("Cadastro realizado com sucesso");

        usuariotId = response.body._id;
      });
    });
    
    it('Validar consulta do usuario cadastrado', () => {
      cy.request({
      method: 'GET',
      url: `usuarios/${usuariotId}`    
      
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.nome).to.eq('Teste da Silva');
      expect(response.body.email).to.eq('testebemoooll@qa.com.br');
      expect(response.body.password).to.eq('teste');
      expect(response.body.administrador).to.eq('true');
      expect(response.body._id).to.eq(usuariotId);
    });
  });
})