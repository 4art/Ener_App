<!DOCTYPE html>
<html lang="de">
  <head>
    <?include 'includes/meta.php'; ?>
    <link rel="stylesheet" type="text/css" href="css/signin.css">
  </head>

  <body>

    <div class="container">
    <?include 'includes/nav-bar.php'; ?>
      <form class="form-signin">
        <h2 class="form-signin-heading">Bitte Loggen Sie sich ein.</h2>
        <div class="form-group">
          <label for="inputEmail" class="sr-only">Email Addresse</label>
          <input type="test" id="inputEmail_Log" class="form-control" placeholder="Email addresse oder Login" required autofocus>
        </div>
        <div class="form-group">
          <label for="inputPassword" class="sr-only">Kennword</label>
          <input type="password" id="inputPassword_Log" class="form-control" placeholder="Kennword" required>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Merken
          </label>
          <p id="error_log" class="errorHid">* Fü</p>
        </div>
        <button id="login_but" class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
      <div class="empty"></div>
      <?include 'includes/footer.php'; ?>
    </div> <!-- /container -->


  </body>
</html>
