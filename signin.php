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
        <label for="inputEmail" class="sr-only">Email Addresse</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputPassword" class="sr-only">Kennword</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Merken
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
      <div class="empty"></div>
      <?include 'includes/footer.php'; ?>
    </div> <!-- /container -->


  </body>
</html>
