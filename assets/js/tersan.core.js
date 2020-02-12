// METHOD
	function emethod(getClass, getMethod, getVariables, getLocation){
		$.ajax({
			type:"GET",
			url:purl+'enjekte/core/methodRouter.php?class='+getClass+'&method='+getMethod+'&variables='+getVariables,
			success:function(result){
				$(getLocation).show();
				if(getLocation=='.generalpopup'){
					$(getLocation+' > .popupcontent').html(result);
				}else{
					$(getLocation).html(result);
				}
			},
			dataType:"html"
		})
	}
// METHOD JSON
	function emethodjson(getClass, getMethod, getVariables, getLocation){
		$.ajax({
			url:purl+'enjekte/core/methodRouter.php?class='+getClass+'&method='+getMethod+'&variables='+getVariables,
			success:function(result){
				if(result.urldirects){
					document.location.href = result.urldirects;
				}else{
					if(getLocation=='.generalmessage'){
						generalmessage(result.type, result.message)
					}else{
						$(getLocation).show();
						$(getLocation).html(result.message);
					}
				}
			},
			dataType:"json"
		})
	}
// FORM
	function eform(getClass, getMethod, getFormID){
		$('#btn-'+getFormID).hide();
		$('#btnload-'+getFormID).show();
		$('#'+getFormID+' .feedback').html('');
		$('#'+getFormID+' .resultmessage').hide();
		$('#'+getFormID+' .resultmessage div').removeClass();
		$.post(purl+'enjekte/core/methodRouter.php?class='+getClass+'&method='+getMethod, $('#'+getFormID).serialize(), function(result){
			with(result)
			if(result.urldirects){
				document.location.href = result.urldirects;
			}else if(result.emethod=='true'){
				emethod(result.class, result.classmethod, result.variables, result.location);
			}else{
				$('#btn-'+getFormID).show();
				$('#btnload-'+getFormID).hide();
				if(result.message){
					$('#'+getFormID+' .resultmessage').show();
					$('#'+getFormID+' .resultmessage div').addClass(result.type);
					$('#'+getFormID+' .resultmessage div').html(result.message);
				}
				if(result.formelements){
					eformelements(result.formelements, result.formresult, getFormID);
				}
			}
		},"json");
	}
// FORM
	function eformhtml(getClass, getMethod, getFormID, getLocation){
		$('#btn-'+getFormID).hide();
		$('#btnload-'+getFormID).show();
		$('#'+getFormID+' .feedback').html('');
		$('#'+getFormID+' .resultmessage').hide();
		$('#'+getFormID+' .resultmessage div').removeClass();
		$.post(purl+'enjekte/core/methodRouter.php?class='+getClass+'&method='+getMethod, $('#'+getFormID).serialize(), function(result){
			with(result)
			$(getLocation).html(result);
		},"html");
	}
// FORM ELEMENTS
	function eformelements(formElements, formResult, formID){
		$('#'+formID+' .formitem').removeClass("error");
		$('#'+formID+' .formitem').removeClass("warning");
		$('#'+formID+' .formitem').removeClass("success");
		for(i in formElements){
			$('#'+formID+' #formitem_'+formElements[i]+' .feedback').html("");
			if(formResult[formElements[i]]){
				if(formResult[formElements[i]]["feedback"]){
					if(formResult[formElements[i]]["type"]){
						$('#'+formID+' #formitem-'+formElements[i]).addClass(formResult[formElements[i]]["type"]);
					}else{
						$('#'+formID+' #formitem-'+formElements[i]).addClass('error');
					}
					$('#'+formID+' #formitem-'+formElements[i]+' .feedback').html(formResult[formElements[i]]["feedback"])
				}else{
					$('#'+formID+' #formitem-'+formElements[i]).addClass("success");
				}
			}else{
				$('#'+formID+' #formitem-'+formElements[i]).addClass("success");
			}
		}
	}
// VERIFICATION
	function everification(getClass, getMethod, getVariables, getLocation){
		$('.generalmessage').show();
		$('.generalmessage div').removeClass();
		$('.generalmessage div').addClass('warning animated fadeInLeft');
		$('.generalmessage div').html("<div class=\"confirmation\"><div class=\"description\">Bu iÅŸlemi gerÃ§ekleÅŸtirmek isdediÄŸnize emin misiniz?</div><div class=\"buttons\"><a class=\"success\" href=\"javascript:void(0);\" onclick=\"emethodjson('"+getClass+"','"+getMethod+"','"+getVariables+"');\"><span class=\"icon-checkmark\"></span>Tamam</a><a class=\"cancel\" href=\"javascript:void(0);\" onclick=\"ecancel();\"><span class=\"icon-blocked\"></span>VazgeÃ§</a></div></div>");
	}
// CANCEL
	function ecancel(){
		$('.generalmessage').hide();
	}
// GENERAL MESSAGE
	function generalmessage(type, message){
		$('.generalmessage').show();
		$('.generalmessage div').removeClass();
		$('.generalmessage div').addClass(type+' animated fadeInRight');
		if(type=="error"){
			$('.generalmessage div').html('<i class="icon-blocked"></i><p>'+message+'</p>');
		}else if(type=="warning"){
			$('.generalmessage div').html('<i class="icon-warning"></i><p>'+message+'</p>');
		}else if(type=="success"){
			$('.generalmessage div').html('<i class="icon-checkmark"></i><p>'+message+'</p>');
		}else{
			$('.generalmessage div').html('<i class="icon-info"></i><p>'+message+'</p>');
		}
		genelmesajkapat();
	}
// GENERAL MESSAGE CLOSE
	function genelmesajkapat(){
		setTimeout(function(){
			$('.generalmessage').addClass('fadeOutRight');
		}, 4000);
		setTimeout(function(){
			$('.generalmessage').removeClass('fadeOutRight');
			$('.generalmessage').hide();
		}, 4100);
	}
// GENERAL POPUP CLOSE
	function genelpopupclose(){
		$('.generalpopup').hide();
	}
