<%@ page import="com.Patient"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Patient Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.4.1.min.js"></script>
<script src="Components/items.js"></script>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-6">

				<h1>Patient Management v10-new</h1>
				<form id="formPatient" name="formPatiet" method="post" action="Patient.jsp">
					Name: 
					<input id="name" name="name" type="text"class="form-control form-control-sm">
					 <br> Address:
					<input id="address" name="address" type="text"class="form-control form-control-sm"> 
					<br> Dob: 
					<input id="dob" name="dob" type="text"class="form-control form-control-sm"> 
					<br> Email: 
					<input id="email" name="email" type="text"class="form-control form-control-sm">
					<br> PhoneNo: 
					<input id="phoneNo" name="phoneNo" type="text"class="form-control form-control-sm">
					 <br> 
					<input id="btnSave" name="btnSave" type="button" value="Save"class="btn btn-primary">
		<input type="hidden" id="hidItemIDSave" name="hidItemIDSave" value="">
				</form>


				<div id="alertSuccess" class="alert alert-success"></div>
		<div id="alertError" class="alert alert-danger"></div>
  
   <br>
   <div id="divPatientGrid">
   
   <%
   
      Patient patientobj = new Patient();
      out.print(patientobj.readPatient());
   %>
   </div>

			</div>
		</div>
	</div>

</body>
</html>