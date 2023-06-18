<?php
$salary = $_POST['salary'];
$load = $_POST['load'];

switch ($load) {
    case '101':
        $newSalary = $salary * 1.1;
        break;
    case '102':
        $newSalary = $salary * 1.2;
        break;
    case '103':
        $newSalary = $salary * 1.3;
        break;
    default:
        $newSalary = $salary;
}

$difference = $newSalary - $salary;

echo "<h2>Old Salary: $salary</h2>";
echo "<h2>New Salary: $newSalary</h2>";
echo "<h2>Difference: $difference</h2>";
?>