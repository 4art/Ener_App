<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="index.php">Metra Nutrition</a>

    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="index.php">Home</a></li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Ernährung <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="naehrwertzaeler.php">Nährwertzähler</a></li>
            <li><a href="myrat.php">Mein Ration</a></li>
          </ul>
        </li>
        <li><a href="#">Kontakt</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li class="resp_hid"><a href="myrat.php" class="resp_vis" id=userName></a></li>
        <li class="resp_hid"><a class="hidden"><input type="button" class="btn btn-success btn-xs" style="margin-top:-4px;" id="loginExit" value="Abmelden"></a></li>
        <li><a href="regist.php"><!--<span class="glyphicon glyphicon-user">--></span> Registration</a></li>
        <li><a href="signin.php"><!--<span class="glyphicon glyphicon-log-in">--></span> Einloggen</a></li>
      </ul>
    </div>
  </div>
</nav>