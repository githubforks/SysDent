function checkLogin(username,password,callback)
{
  var dao = new UserDAO();
  dao.findUserLogin(username,password,function(result){
      var user = result[0];
      console.log(result);
      if(user)
      {
        let loggedUser = user;
        callback(user);
      }
      else
        callback(false);
  });
}
