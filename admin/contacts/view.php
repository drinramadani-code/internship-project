<?php require_once("../../includes/dbh.inc.php") ?>

<table class="approved_businesses_table">
  <?php 
    $sql = "SELECT * FROM contact_us";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
  ?>
    <tr>
      <th>Emri</th>
      <th>E-mail</th>
      <th>Mesazhi</th>
    </tr>
    <?php 
        while ($row = mysqli_fetch_assoc($result)) {
          echo "<tr>";
            echo "<th>". $row['name'] ."</th>";
            echo "<th>". $row['email'] ."</th>";
            echo "<th>". $row['message'] ."</th>";
          echo "</tr>";
        }
    ?>
  <?php } else {
    echo "<h1 style='color: var(--secondary-color);text-align: center;'>Nuk keni asnje mesazh!</h1>";
  } ?>
</table>

