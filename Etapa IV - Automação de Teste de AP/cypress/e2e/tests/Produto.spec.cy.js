describe('Realizar login', () => {
    let authToken;
    let produtoId;
  
    before(() => {
      cy.request({
        method: 'POST',
        url: 'login',
        body: {
          email: 'testebemool@qa.com.br',
          password: 'teste'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.authorization).to.exist;
  
        authToken = response.body.authorization;
      });
    });
  
    it('Validar cadastro de um produto', () => {
      cy.request({
        method: 'POST',
        url: 'produtos',
        headers: {
          Authorization: `${authToken}`
        },
        body: {
          nome: 'Productoo Name',
          preco: '470',
          descricao: 'Product Description',
          quantidade: 1099
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body._id).to.exist;
        expect(response.body.message).to.eq("Cadastro realizado com sucesso");

        produtoId = response.body._id;
      });
    });
    
    it('Validar consulta de um produto cadastrado', () => {
        cy.request({
        method: 'GET',
        url: `produtos/${produtoId}`,
        headers: {
          Authorization: `${authToken}`
        }
      }).then((response) => {
        expect(response.status).to.eq(200);        
        expect(response.body.nome).to.eq('Productoo Name');
        expect(response.body.preco).to.eq(470);
        expect(response.body.descricao).to.eq('Product Description');
        expect(response.body.quantidade).to.eq(1099);
        expect(response.body._id).to.eq(produtoId);
      });
    });
  });
  
  
  
  
  
  
  
  