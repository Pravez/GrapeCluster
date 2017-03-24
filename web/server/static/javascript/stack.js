addAjaxHandler("/stack/"+STACKID, function(stack) {

	$('#stackTemp')
		.btnColor(stack.heat<CONSTANTS.stackHeatLimit)
		.text(stack.heat+'°C');

	var raspAction = function(raspSlot, raspData) {
		if(raspData !== undefined) {
			$('#raspName'+raspSlot).html('<a href="/view/rasp/'+raspData.address+'" class="card-link">'+raspData.name+' ('+raspData.address+')</a>');
			$('#raspI2C'+raspSlot).text(raspData.address);
			$('#raspOS'+raspSlot).text(raspData.os);
			$('#raspIP'+raspSlot).text(raspData.ip);
			$('#raspCPU'+raspSlot).text(raspData.cpu);
			$('#raspRAM'+raspSlot).text(raspData.ram);
			$('#raspStatus'+raspSlot)
				.btnColor(raspData.status)
				.text(CONSTANTS.raspStatus[raspData.status])
				.attr('raspId', raspData.address)
				.show();

			//console.log(raspSlot+' : '+JSON.stringify(raspData))
		}
		else {
			$('#raspName'+raspSlot).html('---');
			$('#raspI2C'+raspSlot).text('');
			$('#raspOS'+raspSlot).text('');
			$('#raspIP'+raspSlot).text('');
			$('#raspCPU'+raspSlot).text('');
			$('#raspRAM'+raspSlot).text('');
			$('#raspStatus'+raspSlot).hide();

			//console.log(raspSlot+' : Empty')
		}
	}

	for(var i=0; i < CONSTANTS.nSlavesByStack+1; ++i)
		raspAction(i, stack.rasps[i]);

}, true);

$('.statusBtn').click(function() {
	if($(this).text() == CONSTANTS.raspStatus[0]) {
		if(confirm("Allumer la Rasp ?")) {
			addAjaxHandler('/rasp/start/'+$(this).attr('raspId'), function() {
				$(this).text(CONSTANTS.raspStatus[1]).btnColor(1);
			}, false, 'POST');
		}
	}
	if($(this).text() == CONSTANTS.raspStatus[1]) {
		if(confirm("Eteindre la Rasp ?")) {
			addAjaxHandler('/rasp/start/'+$(this).attr('raspId'), function() {
				$(this).text(CONSTANTS.raspStatus[0]).btnColor(0);
			}, false, 'POST');
		}
	}
});
