$(document).ready(function() 
{  
	if ($("#alertSuccess").text().trim() == "")  
	{   
		$("#alertSuccess").hide();  
	}  
	$("#alertError").hide(); }); 
 
// SAVE ============================================ 
$(document).on("click", "#btnSave", function(event) 
{  
	// Clear alerts---------------------  
	$("#alertSuccess").text("");  
	$("#alertSuccess").hide();  
	$("#alertError").text("");  
	$("#alertError").hide(); 
 
	// Form validation-------------------  
	var status = validatePatientForm();  
	if (status != true)  
	{   
		$("#alertError").text(status);   
		$("#alertError").show();   
		return;  
	} 
 
	// If valid------------------------  
	var type = ($("#hidPatientIDSave").val() == "") ? "POST" : "PUT"; 
	
	$.ajax( 
	{  
		url : "PatientAPI",  
		type : type,  
		data : $("#formPatient").serialize(),  
		dataType : "text",  
		complete : function(response, status)  
		{   
			onPatientSaveComplete(response.responseText, status);  
		} 
	}); 
}); 

function onPatientSaveComplete(response, status) 
{  
	if (status == "success")  
	{   
		var resultSet = JSON.parse(response); 

		if (resultSet.status.trim() == "success")   
		{    
			$("#alertSuccess").text("Successfully saved.");    
			$("#alertSuccess").show(); 

			$("#divItemsGrid").html(resultSet.data);   
		} else if (resultSet.status.trim() == "error")   
		{    
			$("#alertError").text(resultSet.data);    
			$("#alertError").show();   
		} 

	} else if (status == "error")  
	{   
		$("#alertError").text("Error while saving.");   
		$("#alertError").show();  
	} else  
	{   
		$("#alertError").text("Unknown error while saving..");   
		$("#alertError").show();  
	} 

	$("#hidItemIDSave").val("");  
	$("#formItem")[0].reset(); 
} 
 
// UPDATE========================================== 
$(document).on("click", ".btnUpdate", function(event) 
{     
	$("#hidPatientIDSave").val($(this).closest("tr").find('#hidPatientIDUpdate').val());     
	$("#name").val($(this).closest("tr").find('td:eq(0)').text());     
	$("#address").val($(this).closest("tr").find('td:eq(1)').text());     
	$("#dob").val($(this).closest("tr").find('td:eq(2)').text());     
	$("#email").val($(this).closest("tr").find('td:eq(2)').text()); 
	$("#phoneNo").val($(this).closest("tr").find('td:eq(3)').text()); 
}); 

//REMOVE===========================================
$(document).on("click", ".btnRemove", function(event) 
{  
	$.ajax(  
	{   
		url : "PatientAPI",   
		type : "DELETE",   
		data : "patientID=" + $(this).data("patientid"),   
		dataType : "text",   
		complete : function(response, status)   
		{    
			onPatientDeleteComplete(response.responseText, status);   
		}  
	}); 
}); 

function onPatientDeleteComplete(response, status) 
{  
	if (status == "success")  
	{   
		var resultSet = JSON.parse(response); 

		if (resultSet.status.trim() == "success")   
		{    
			$("#alertSuccess").text("Successfully deleted.");    
			$("#alertSuccess").show(); 
		
			$("#divPatientsGrid").html(resultSet.data);   
		} else if (resultSet.status.trim() == "error")   
		{    
			$("#alertError").text(resultSet.data);    
			$("#alertError").show();   
		}

	} else if (status == "error")  
	{   
		$("#alertError").text("Error while deleting.");   
		$("#alertError").show();  
	} else  
	{   
		$("#alertError").text("Unknown error while deleting..");   
		$("#alertError").show();  
	}
}
 
// CLIENT-MODEL========================================================================= 
function validatePatientForm() 
{  
	// NAME  
	if ($("#name").val().trim() == "")  
	{   
		return "Insert Patient Name.";  
	} 
 
	// ADdress  
	if ($("#address").val().trim() == "")  
	{   
		return "Insert Patient Address.";  
	} 
	
	// DOB  
	if ($("#dob").val().trim() == "")  
	{   
		return "Insert Patient DOB.";  
	} 
	// EMAIL  
	if ($("#email").val().trim() == "")  
	{   
		return "Insert Patient Email.";  
	} 
	
	// PhoneNo  
	if ($("#phoneNo").val().trim() == "")  
	{   
		return "Insert Patient PhoneNo.";  
	} 

	

	


	return true; 
}