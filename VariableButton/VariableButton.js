define(["jquery","qlik"], function($, qlik) {
	
 		
	return {
        
      initialProperties: {
			version: 1.0,
          	var_to_use: "vButtonValue",
        	num_of_buttons: "1",
        	buttonname1: "Button 1",
        	buttonname2: "Button 2",
        	buttonname3: "Button 3",
        	buttonname4: "Button 4",
        	buttonname5: "Button 5",
        	buttonvalue1: "1",
        	buttonvalue2: "2",
        	buttonvalue3: "3",
        	buttonvalue4: "4",
        	buttonvalue5: "5"   
		},
		//property panel
		definition: {
			type: "items",
			component: "accordion",
			items: {
				settings: {
					uses: "settings",
					items : {
						usevariable : {
							ref : "var_to_use",
							expression:"optional",
							label : "Variable to use",
							type : "string",
							defaultValue : "vButtonValue"
						},
                        usevariable2 : {
							ref : "num_of_buttons",
							expression:"",
							label : "Number of buttons",
							type : "integer",
                          	component: "dropdown",
							defaultValue : "1",
                          	max:5,
                            options: 
								[ {
									value: "1",
									label: "1"
								}, {
									value: "2",
									label: "2"
								}, {
                                  	value: "3",
									label: "3"
								}, {
                                  	value: "4",
									label: "4"
								}, {
									value: "5",
									label: "5"
								}],
						},
                        
                        usevariable4 : {
                          label : "Button Values",
                          ref : "button_value_block",
                          settings: {
								uses: "settings",
                            	
                                    items : {
                      			        			    
                      					buttonvalue1p : {
											ref : "buttonvalue1",
											expression:"optional",
											label : "Button value 1",
											type : "string",
											defaultValue : "1"
                                        },
                                        buttonvalue2p : {
											ref : "buttonvalue2",
											expression:"optional",
											label : "Button value 2",
											type : "string",
											defaultValue : "2"
                                        },
                                        buttonvalue3p : {
											ref : "buttonvalue3",
											expression:"optional",
											label : "Button value 3",
											type : "string",
											defaultValue : "3"
                                        },
                                        buttonvalue4p : {
											ref : "buttonvalue4",
											expression:"optional",
											label : "Button value 4",
											type : "string",
											defaultValue : "4"
                                        },
                                        buttonvalue5p : {
											ref : "buttonvalue5",
											expression:"optional",
											label : "Button value 5",
											type : "string",
											defaultValue : "5"
                                        }
                                    }
                          }
                        },
                      
						usevariable3 : {
                          label : "Button Names",
                          ref : "button_names_block",
                          settings: {
								uses: "settings",
                            	
                                    items : {
                      			        			    
                      					buttonname1p : {
											ref : "buttonname1",
											expression:"optional",
											label : "Button name 1",
											type : "string",
											defaultValue : "Button 1"
                                        },
                                        buttonname2p : {
											ref : "buttonname2",
											expression:"optional",
											label : "Button name 2",
											type : "string",
											defaultValue : "Button 2"
                                        },
                                        buttonname3p : {
											ref : "buttonname3",
											expression:"optional",
											label : "Button name 3",
											type : "string",
											defaultValue : "Button 3"
                                        },
                                        buttonname4p : {
											ref : "buttonname4",
											expression:"optional",
											label : "Button name 4",
											type : "string",
											defaultValue : "Button 4"
                                        },
                                        buttonname5p : {
											ref : "buttonname5",
											expression:"optional",
											label : "Button name 5",
											type : "string",
											defaultValue : "Button 5"
                                        }
                        
                                    }
                          },
                        
                        
   
                    }
                }
                    
				}
			}
		},
		snapshot: {
			canTakeSnapshot: false
		},
           
		paint: function ($element,layout) {
		  
          var numbuttons=layout.num_of_buttons;
          var numbuttonsmax=parseFloat(numbuttons)+1;

          
         if (numbuttonsmax > 6) {
    	 		numbuttonsmax = 6;
		  };
  
          var html='<div width="100%">';
          var i = 0;
          var idbutnom='hola';
          
          for (i = 1; i < numbuttonsmax; i++) {
     		          
             switch(i) {
    				case 1:
        				idbutnom=layout.buttonname1;
        				break;
    				case 2:
        				idbutnom=layout.buttonname2;
        				break;
                 	case 3:
        				idbutnom=layout.buttonname3;
        				break;
                 	case 4:
        				idbutnom=layout.buttonname4;
        				break;
                 	case 5:
        				idbutnom=layout.buttonname5;
        				break;
				};
            		
             html=html+"<button class='qirby-button' width='auto' id='button" + i + "'>" + idbutnom + "</button>"    
                         
   		  };
          
          html=html+"</div>";
          
          $element.html(html);
          
      
          $element.find("#button1").on("qv-activate", function() {
					
            		var app = qlik.currApp();
             		var textobus=layout.var_to_use;
            		app.variable.setContent(textobus, layout.buttonvalue1);

		  });
          
          $element.find("#button2").on("qv-activate", function() {
					
            		var app = qlik.currApp();
             		var textobus=layout.var_to_use;
            		app.variable.setContent(textobus, layout.buttonvalue2);

		  });
          
          $element.find("#button3").on("qv-activate", function() {
					
            		var app = qlik.currApp();
             		var textobus=layout.var_to_use;
            		app.variable.setContent(textobus, layout.buttonvalue3);

		  });
          $element.find("#button4").on("qv-activate", function() {
					
            		var app = qlik.currApp();
             		var textobus=layout.var_to_use;
            		app.variable.setContent(textobus, layout.buttonvalue4);

		  });
				
	      $element.find("#button5").on("qv-activate", function() {
					
            		var app = qlik.currApp();
             		var textobus=layout.var_to_use;
            		app.variable.setContent(textobus, layout.buttonvalue5);

		  });		
         }
    
	 }

});
