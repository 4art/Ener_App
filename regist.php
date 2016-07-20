<!DOCTYPE html>
<html lang="de">
  <head>
    <?include 'includes/meta.php'; ?>
    <link rel="stylesheet" type="text/css" href="css/signin.css">
  </head>

  <body ng-app="valid">

    <div class="container" ng-controller="ctrl">
    <?include 'includes/nav-bar.php'; ?>
      <form class="form-signin" name="form_valid">
       <!-- <h2 class="form-signin-heading">Bitte Loggen Sie sich ein.</h2>-->
        <div class="form-group">
          <label for="inputName" class="sr-only">Name</label>
          <input type="test" id="inputName_Reg" class="form-control" placeholder="Name" required autofocus>
        </div>
        <div class="form-group">
          <label for="inputEmail" class="sr-only">Email</label>
          <input type="email" id="inputEmail_Reg" class="form-control" placeholder="Email" required autofocus>
          <p class="errorHid" id="emailError">Schreiben Sie eine echte Email Adresse</p>
        </div>
        <div class="form-group">
          <label for="inputPassword" class="sr-only">Kennword</label>
          <input type="password" id="inputPassword_Reg" class="form-control" placeholder="Kennword" required>
          <p class="errorHid" id="password_error_reg">* Das Kennwort ist zu kurz</p>
        </div>
        <div class="form-group">
          <label for="inputPassword" class="sr-only">Kennword wiederholen</label>
          <input type="password" id="inputPassword_Reg_re" class="form-control" placeholder="Kennword wieder" required>
        </div>
        <p class="errorHid" id="error_regist">* Füllen Sie alle Felder richtig aus.</p>
        <button id="reg_but" class="btn btn-lg btn-primary btn-block" type="submit">Registrieren</button>
      </form>
      <div class="empty"></div>
      <?include 'includes/footer.php'; ?>
    </div> <!-- /container -->

  </body>
</html>
