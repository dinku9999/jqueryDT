function tableCleaner(tableName){    // for example , if first three elements in row are empty delete row
			$('#'+tableName+' tbody tr').each(function() {
			    if($(this)[0].childNodes[0].innerText==""||$(this)[0].childNodes[0].innerText ==" " || $(this)[0].childNodes[0].innerText==null
			    	&& $$(this)[0].childNodes[1].innerHTML=="" || $(this)[0].childNodes[1].innerHTML==" " || $(this)[0].childNodes[1].innerHTML==null
			    	&& $$(this)[0].childNodes[2].innerHTML=="" || $(this)[0].childNodes[2].innerHTML==" "|| $(this)[0].childNodes[2].innerHTML==null
			    		){
			    	$(this).remove();
			    }
			});
}
// The above function can be called in this case. You can always customize it dependingly

// considering that there are 5 columns in a datatable , and you want to remove a row if first 3 elements in the datatable are empty or null 
function tableCleanerForOneRow(tableName){    // for example , if first 3rd element in row is empty/null delete row
			$('#'+tableName+' tbody tr').each(function() {
			    if($(this)[0].childNodes[2].innerHTML==""||$(this)[0].childNodes[2].innerHTML ==" " || $(this)[0].childNodes[2].innerHTML==null){
			    	$(this).remove();
			    }
			}); 
}

//END
			