"use strict"
//Global Constants
const SIZE = 5;
const MINSALARY = 0;
const MAXSALARY = 1000000;
const zipFormat = /^\d{5}$|^\d{5}-\d{4}$/

//Array Variables
let employeeData = new Array(SIZE);
let employeeDataCopy = new Array(SIZE);
let numEmployees = 0;
let totSalary = 0;
let avgSalary = 0;
let lowSalary = 0;
let highSalary = 0;

//Create an alias for getElementById
let $ = function(id) 
{ 
    return document.getElementById(id); 
};

//Form Validation
let formValidation = () =>
{
    if ($("firstName").value == "")
    {
        $("message").innerHTML = "First Name Blank, It is Required.";
        $("firstName").focus();
        return false;
    }
    else if ($("lastName").value == "")
    {
        $("message2").innerHTML = "Last Name Blank, It is Required.";
        $("lastName").focus();
        return false;
    }
    else if ($("address").value == "")
    {
        $("message3").innerHTML = "Address is Blank, It is Required.";
        $("address").focus();
        return false;
    }
    else if ($("city").value == "")
    {
        $("message4").innerHTML = "City is Blank, It is Required.";
        $("city").focus();
        return false;
    }
    else if ($("state").value == ($("noSelect").value))
    {
        $("stateMessage").innerHTML = "No State Selected, It is Required.";
        $("state").focus();
        return false;
    }
    else if ($("zipcode").value == "")
    {
        $("zipMessage").innerHTML = "Zip is Blank, It is Requiredd.";
        $("zipcode").focus();
        return false;
    }
    else if ($("zipcode").value !== zipFormat)
    {
        $("zipMessage").innerHTML = "Bad Format";
        $("zipcode").focus();
        return false;
    }
    else if ($("department").value == ($("noDept").value))
    {
        $("deptMessage").innerHTML = "No Department Selected, It is Required.";
        $("department").focus();
        return false;
    }
    else if ($("salary").value == "")
    {
        $("salMessage").innerHTML = "Salary is Blank, It is Required.";
        $("salary").focus();
        return false;
    }
    else if (isNaN($("salary").value))
    {
        $("salMessage").innerHTML = "Salary is Not Numeric, It is Required.";
        $("salary").focus();
        return false;
    }
    else if (($("salary").value < MINSALARY) || ($("salary").value > MAXSALARY))
    {
        $("salMessage").innerHTML = "Salary is OOR, It is Required.";
        $("salary").focus();
        return false;
    }
    else
    {
        $("message").innerHTML = "";
        $("message2").innerHTML = "";
        $("message3").innerHTML = "";
        $("message4").innerHTML = "";
        $("stateMessage").innerHTML = "";
        $("zipMessage").innerHTML = "";
        $("deptMessage").innerHTML = "";
        $("salMessage").innerHTML = "";

        //submit, search, totals buttons
        // Don't know how to do, or where to start.
        createNewArray();
        displayArray(employeeData, "Original");
    }


}
 let clearEntries = () =>
 {
     $("firstName").value = "";
     $("lastName").value = "";
     $("address").value = "";
     $("city").value = "";
     $("state").value = $("noSelect").value;
     $("zipcode").value = "";
     $("department").value = $("noDept").value;
     $("salary").value = "";
     $("firstName").focus();
 }
window.onload = () =>
{
    $("submit").onclick = formValidation;
    $("clear").onclick = clearEntries;


    $("firstName").focus();
}