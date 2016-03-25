var documentation = [{
						subject : 'Welcome to the new Inbox plugin',
						body : 'A full fledged inbox right in front of your eyes. You dont need a big setup to get Inbox up and running. All you need is a div. Thats it!',
						sender : 'Madhairsilence',
						dateTime : '25th March'
					},
	                {
	                    subject : 'How to Setup Inbox',
	                    body : '<ul class="mylist"> <li>You need <strong>jQuery</strong> for sure. The version I used is <strong>2.1.3</strong>. Should work with almost all '+
	                    	'versions, as I have not used any hard core features <br/></li>'+
	                    	'<li>You need to include <strong>inbox.js</strong> <br/></li>'+
	                    	'<li>Create a div (an empty div, nothing needed)<br/></li>'+
	                    	'<li>Call inbox as <code> $(your-dom-selector).Inbox()</code></li>'+
	                    	'<li>If you have custom options Call inbox as <code> $(your-dom-selector).Inbox(options)</code></li>'+
	                    	'</ul>',
	                    	
	                    sender : 'Madhairsilence',
	                    dateTime : '25th March'
	                },
	                {
	                    subject : 'Default settings',
	                    body : 
	                    		'<ul class="mylist">'+	                    			
	                    			'<li> <strong>Folders -</strong> Inbox , Sent, Draft, Trash </li> '+
	                    			'<li> <strong>Labels  -</strong> UnRead, Important , Promotions, Social </li> '+
	                    		'</ul>'
	                    		,
	                    sender : 'Madhairsilence',
	                    dateTime : '25th March3'
	                },
	                {
	                    subject : 'Input Data Format',
	                    body : 'Ofcourse we accept only JSON for now, may be forever<br/><br/>'+
	                    		'<div class="mypane">'+
	                    			'{ <br/>   subject : "Your Subject" ,<br/> body : "Your Body" , <br/>sender : "Sender Info" , <br/>dateTime : " Yes! Date and Time" ,<br/> additionalnfo: "Whatever you want to add here (Plain text or JSON)"<br/>} '+
	                    		'</div>'
	                    ,
	                    sender : 'Madhairsilence',
	                    dateTime : '25th March3'
	                },
	                 {
	                    subject : 'Loading and Updating data',
	                    body : 'You can load data (mails) in two ways.'+	                    		
	                    		'<ul class="mylist">'+	                    			
	                    			'<li> You can append the data  in the options as <code> options.data = {your data} </code>and call the Inbox as with options as <code>$(your-dom-selector).Inbox(options)</code> '+
	                    			'<li> Alternatively, you can build the empty inbox first and set the data later using the methods <b>(ref. next section)</b>. This method will be useful , when you load your data from remote url using <b>AJAX </b> </li> '+
	                    		'</ul>'+
	                    		'<h5> Note : </h5> I dont provide an option to directly load from remote URL, as am completely against it. This would force the developer to pre format the data in server side, which is a tedious task. '
	                    ,
	                    sender : 'Madhairsilence',
	                    dateTime : '25th March3'
	                },
	                {
	                    subject : 'Method and Callbacks',
	                    body : 'Inbox comes with a few but useful methods , which solve most of your problems. Pass function as a value for all these attributes'+	
	                    	'<ul class="mylist">'+	                    			
	                    		'<li>'+
	                    				'<h4> setData </h4>'+
	                    				'<p> Can be used to set/update data after building Inbox .<br/> Should be called as'+
	                    				'<br/><div class="mypane"> inboxInstance.Inbox(\'setData\',newdata, function(){ <br/>alert(\'Data updated\'); <br/>}) </div>' +
	                    		'</li>'+	                    			
	                    		'<li>'+
	                    				'<h4> onInit </h4>'+
	                    				'<p> This function will be called after Inbox is loaded. '+
	                    		'</li>'+	                    			
	                    		'<ul class="mylist">'+	                    			
	                    			'<li>'+
	                    				'<h4> onInit </h4>'+
	                    				'<p> This function will be called after Inbox is loaded. (to be passed while loading Inbox)'+
	                    			'</li>'+	                    			
	                    			'<li>'+
	                    				'<h4> onMailSelect </h4>'+
	                    				'<p> This function will be called after When you click any item in the mail list. (to be passed while loading Inbox)'+
	                    			'</li>'+	                    			
	                    			'<li>'+
	                    				'<h4> onFolderSelect </h4>'+
	                    				'<p> This function will be called after When you click any folder i.e inbox, sent,....(to be passed while loading Inbox) '+
	                    			'</li>'+	                    			
	                    			'<li>'+
	                    				'<h4> onLabelSelect </h4>'+
	                    				'<p> This function will be called after When you click any label i.e unread, promotion... (to be passed while loading Inbox)'+
	                    			'</li>'+	                    			
	                    		'</ul>'+
	                    		'<h5> Note : </h5> I dont provide an option to directly load from remote URL, as am completely against it. This would force the developer to pre format the data in server side, which is a tedious task. '
	                    ,
	                    sender : 'Madhairsilence',
	                    dateTime : '25th March3'
	                },
	                 {
	                    subject : 'Tests',
	                    body : 'I love tests, but I hate writing  tests. Dont worry, will soon add tests to help you take this forward'
	                    ,
	                    sender : 'Madhairsilence',
	                    dateTime : '25th March3'
	                },
	                 {
	                    subject : 'Thanks!',
	                    body : 'Thanks for using Inbox plugin. And its all yours. Feel free to bug me for any issues and the btw the code is all yours :) '
	                    ,
	                    sender : 'Madhairsilence',
	                    dateTime : '25th March3'
	                }
				];