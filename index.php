<?php
include "../utils.php";
$listJobs = dirToArray("./");
?>
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet" />
  <link rel="stylesheet" href="../style.css" />
  <title>Runtrack3</title>
</head>

<body>
  <?php include "../header.php" ?>
  <main>
    <div
      style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        ">
      <p class="title" style="text-align: center">Runtrack3</p>
      <ul>
        <?php foreach ($listJobs as $key => $value): ?>
          <li>
            <a href="#" class="btnToggle"><?php echo $key ?> </a>
            <ul class="submenu hidden">
              <?php foreach ($value as $k => $v): ?>
                <li><a href=<?php echo $key . "/" . $k . "/" ?>><?php echo $k; ?></a></li>
              <?php endforeach ?>
            </ul>
          </li>
        <?php endforeach ?>
      </ul>
    </div>
  </main>
  <script src="../script.js"></script>
</body>

</html>