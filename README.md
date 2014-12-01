Variable buttons
Use up to 5 buttons to assign values to a Qlik Sense variable
 
Properties:
Variable to use- Set the variable name to be used (Default: vButtonValue)
 
Number of buttons – Number of buttons to be used (Default: 1 – Max: 5)
 
Button Values - The value set per button (Default: 1,2,3,4,5)
 
Button Names - The legend to show per button (Default: Button 1, Button 2..)
 
Latest Version
Version 0.1.0 based on Qlik Sense 1.0

Uses

 Use the variable in Qlik Sense expressions to;
-Dynamically change the expression of a graph
 
 
Expression formula: if(vButtonValue=1,sum([Costs (SAP Demo)]),Sum([Net value]))
-Dynamically change the dimension of the graph
 
 
Dimension formula: if($(vButtonValue2)=1,[Month],[Division Name])
-Use the dimension for comparisons
 
 
Background color expression: if(Sum([Net value])>$(vButtonValue3),green())
-Anywhere a variable could be used..


