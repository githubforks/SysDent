function actionClickLogin()
{
    var cpf          = document.getElementById('inputCpf').value;
    var password     = document.getElementById('inputPassword').value;
    if(cpf === '' || password === '')
    {
      alert("Campos de usuário ou senha estão vazios.","Erro");
      return;
    }
    checkLogin(cpf,password,function(result)
    {
        if(result)
          alert('Bem-vindo ao sistema, ' + result.name);
        else
        {
            document.getElementById('inputPassword').value = '';
            alert('Login ou senha inválidos');
        }
    });
}
