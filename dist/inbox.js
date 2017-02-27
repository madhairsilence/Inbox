/*! inbox - v1.0 - 2017-02-27
* Copyright (c) 2017 Harish Kumar; Licensed MIT */
/*! inbox - v1.0 - 2016-03-25
* Copyright (c) 2016 Harish Kumar; Licensed MIT */
(function ($) {
  
  // Default options.
  var defaults = {
    folders : ['Inbox', 'Sent', 'Draft', 'Trash' ],     
      labels : ['UnRead', 'Important', 'Promotions', 'Social'],
      data  : [],
      punctuation : '.',
      onInit : function(){},
      onMailSelect : function(mailId){ return mailId;},
      onFolderSelect : function(folder){return  folder;},
      onLabelSelect : function(label){return  label;},
      unreadCount : 0
  };


  var methods = {
        init : function(options) {
          this.settings = $.extend(defaults,options);         
          methods.buildLayout.apply(this,[]);            
            return this;
        },

        buildLayout : function( ) {         
          this.addClass('inbox-container')
            .append(methods.addFolder.apply(this,[]))
            .append(methods.addMainSection.apply(this,[]));

          methods.bindEvents.apply(this,[]);

        },

        addMainSection : function(){
          var mainSection = $('<div class="main-section"></div>');
          mainSection.append(methods.addHeader.apply(this,[]))
                .append(methods.addLabels.apply(this,[]))
                .append(methods.addMailList.apply(this,[]))
                .append(methods.addMailBody.apply(this,[]));
          
          return mainSection;
        },

        addHeader : function(){

          var headerSection = $('<div class="header-section"> </div>');

          headerSection.append('<h3> Mail </h3>');
          headerSection.append('<div> You have '+this.settings.unreadCount+' unread Mails  </>');
          return headerSection;

        },

        addFolder : function(){
          var folderContainer = $('<div class="folders"></div>');
          var folders = $('<ul></ul>');
          $.each(this.settings.folders, function(index, value){           
            folders.append('<li>'+ value + '</li>');
          });

          folderContainer.append(folders);

          return folderContainer;
        },

        addLabels : function(){
          var labelsHolder = $('<div class="labels"></div>');
          var labels = $('<ul></ul>');

          $.each(this.settings.labels, function(index,value){
            labels.append('<li>'+ value+ '</li>');
          });

          labelsHolder.append(labels);

          return labelsHolder;
        },

        addMailList : function(){

          var mailListContainer = $('<div class="mails"></div>');
            methods.addMails.apply(this,mailListContainer); 
          return mailListContainer;

        },

        addMails : function(mailListContainer){
            var mails = $('<ul></ul>');
            $.each(this.settings.data, function(index,value){
                mails.append('<li data-id="'+index+'"> '+
                                '<div class="subject">'+ value.subject+'</div>'+
                                '<div class="sender">'+ value.sender+'</div>'+
                            '</li>');
            });

            $(mailListContainer).html('').append(mails);

        },

        addMailBody : function(){

          var mailBodyContainer = $('<div class="mailBody"></div>');          
          var mailBody = $('<div></div>');
          mailBody.append('<h3 class="subject"></h3>'+
                  '<div class="dateTime"></div>'+
                  '<div class="body"></div>');

          mailBodyContainer.append(mailBody);
          return mailBodyContainer;
        },

        bindEvents : function(){          
          methods.onInit.apply(this,[]); 
          methods.onMailSelect.apply(this,[]); 
          methods.onFolderSelect.apply(this,[]);  
          methods.onLabelSelect.apply(this,[]);
          
        },
        onInit: function(){
            this.settings.onInit();
        },

        onMailSelect: function(){

            var _this = this;
            $(this).find('.mails ul li').on('click', function(){
                var id = $(this).data('id');
                var subject = _this.settings.data[id].subject;                
                var body =  _this.settings.data[id].body;
                
                _this.settings.data[id].read = true;



                $(this).parents().find('.mailBody').find('.subject').html(subject);
                $(this).parents().find('.mailBody').find('.body').html(body);

                //Callback select
                _this.settings.onMailSelect(id);
            });

        },

        onFolderSelect : function(){
            var _this = this;
            $(this).find('.folders ul li').on('click',function(){
                _this.settings.onFolderSelect($(this).html());
            });
            
        },

        onLabelSelect : function(){
            var _this = this;
            $(this).find('.labels ul li').on('click',function(){
                _this.settings.onLabelSelect($(this).html());
            });
            
        },

        setData : function(data,callback){
            this.settings.data = data;            
            methods.addMails.apply(this,$(this).find('div.mails'));             
            methods.onMailSelect.apply(this); 
            if(callback){
                callback();
            }
              
        }

    };

  $.fn.Inbox = function (methodOrOptions) {
    // Override default options with passed-in options.
    this.settings = $.extend({} , defaults, methodOrOptions);
    
    if ( methods[methodOrOptions] ) {
            return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
            // Default to "init"
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );
      }  
  };

}(jQuery));
