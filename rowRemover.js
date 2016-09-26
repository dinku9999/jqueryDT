function tableCleaner(tableName){    // for example first 3 column data in the row
			$('#'+tableName+' tbody tr').each(function() {
			    if($(this)[0].childNodes[0].innerText==""||$(this)[0].childNodes[0].innerText ==" " || $(this)[0].childNodes[0].innerText==null
			    	&& $$(this)[0].childNodes[1].innerHTML=="" || $(this)[0].childNodes[1].innerHTML==" " || $(this)[0].childNodes[1].innerHTML==null
			    	&& $$(this)[0].childNodes[2].innerHTML=="" || $(this)[0].childNodes[2].innerHTML==" "|| $(this)[0].childNodes[2].innerHTML==null
			    		){
			    	$(this).remove();
			    }
			});
}
// The above function can be called in this case. You can always customize it depending on 
// considering that there are 5 columns in a datatable , and you want to remove a row if first 3 elements in the datatable are empty or null 


function tableCleanerForOneRow(tableName){    // for example first 3 column data in the row
			$('#'+tableName+' tbody tr').each(function() {
			    if($(this)[0].childNodes[0].innerHTML==""||$(this)[0].childNodes[0].innerHTML ==" " || $(this)[0].childNodes[0].innerHTML==null){
			    	$(this).remove();
			    }
			}); // give the number of childnode corresponding to the element you want to verify this data for example 1 for column 2
