import { Component, OnInit } from '@angular/core';
declare var $: any;
declare global {
    interface Document {
        webkitExitFullscreen: any;
        msExitFullscreen: any;
    }
  
    interface HTMLElement {
      msRequestFullscreen?: () => Promise<void>;
      webkitRequestFullscreen?: () => Promise<void>;
    }
  }

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  constructor() { }
  
//next trying to implement directory system named workspaces with switch with different content
  ngOnInit(): void {

   //To make commands array work, add two commands with exec as an error,then add too processed function,
   // as an if loop with name ending with a white space



    //Browser detection and works starts here
    $(document).ready(function() {
        var mobile = (/iphone|ipod|android|blackberry|mini|palm/i.test(navigator.userAgent.toLowerCase())); //include window/linux to test if working  
        if (mobile) { 
            console.log("mobile device detected, keyboard revealed");
            $('.screen-keyboard').css('display', 'block'); // or use $('.classname').hide();
            $('.bottom-div').css('height', '260px');
            $('.switch-two').val('1');//for disable keyboard prompt
        } 
        else 
        { 
            console.log("familiar device detected, keyboard hidden"); 

        }
        //Detect if screen is rotated and let lengther work to find new max length to print output responsivly
        var previousOrientation = window.orientation;
        var checkOrientation = function(){
        if(window.orientation !== previousOrientation){
             previousOrientation = window.orientation;
             location.reload();
             //$("#lengther").load(location.href + " #lengther");
             
        }
        };

        window.addEventListener("resize", checkOrientation, false);
        window.addEventListener("orientationchange", checkOrientation, false);

        // (optional) Android doesn't always fire orientationChange on 180 degree turns
        setInterval(checkOrientation, 2000);
        


    });

    //User theme switcher
    $(document).ready(function() {
        //Saving user theme in cached local storage
        var themeVal;
        var themeSaved = localStorage.getItem("theme");
        if (themeSaved) { //important check or else data load will fail
            themeVal = themeSaved;
        }
        else{
            themeVal = $(".switch-theme").val();
        }
        //alert(themeVal)
        if(themeVal == 0){
            trans();
            document.documentElement.setAttribute('data-theme', 'dark'); 

        }
        else if(themeVal == 1){
            trans();
            document.documentElement.setAttribute('data-theme', 'light'); 


        }
        else if(themeVal == 2){
            trans();
            document.documentElement.setAttribute('data-theme', 'chrimson'); 


        }
        else if(themeVal == 3){
            trans();
            document.documentElement.setAttribute('data-theme', 'bluescreen'); 


        }


    });
      
      



       
    var element = document.getElementById("lengther");
    element.scrollTop = element.scrollHeight - element.clientHeight;


    var widthpx= document.getElementById("lengther").offsetWidth;
     
    console.log(widthpx);

    var resplen = Math.round((widthpx) / 10);
    console.log(resplen);

    
     //daemon process
   // (function(delay, callback){
        //var loop = function(){
          //  callback();
          //  setTimeout(loop, delay);
       // }; loop();
   // })(100, function(){
        //Always Scroll to bottom
        //$('html, body').animate({
       // scrollTop: $("#lengther").offset().top
       // }, 100);

   // });
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition')
        }, 1000)
    }




    //Console working starts here
    var terminal = document.getElementsByClassName('command-line')[0];
    
    var chr_time = 1;
    var lin_time = 1;
    window.onload = function () {
        //local storage bootstrap
        var stored = document.querySelector('#store');
        var saved = localStorage.getItem('storedItems');
        if (saved) { //important check or else data load will fail
            stored.innerHTML = saved;
        }


        var commands = [
            {
                command: 'clear',
                help   : 'Clears the console output',
                exec   : function () {
                    ClearConsole();
                }
            },
            {
                command: 'test',
                help   : 'Test if terminal is up and running',
                exec   : function () {
                    printCli("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
                }
            },
            {
                command: 'make',
                help   : 'Make a new file [make <filename>]',
                exec   : function () {
                    printCli("make: error: Input required.");

                }
            },
            {
                command: 'rm',
                help   : 'Remove a file [rm <filename>]',
                exec   : function () {
                    printCli("rm: error: Input required.");

                }
            },
            {
                command: 'write',
                help   : 'Write to a file [write <file> <text>]',
                exec   : function () {
                    printCli("write: error: Input required.");

                }
            },
            {
                command: 'ls',
                help   : 'Lists current files',
                exec   : function () {

                }
            },
            {
                command: 'cat',
                help   : 'View file as standard output, usage: [cat <file>]',
                exec   : function () {
                    printCli("cat: error: Input required.");

                }
            },
            {
                command: 'pwd',
                help   : 'List current workspace',
                exec   : function () {
                    printCli("[The Internet]");

                }
            },
            {
                command: 'echo',
                help   : 'Print text on screen',
                exec   : function () {
                    printCli("echo: error: Input required.");

                }
            },
            {
                command: 'info',
                help   : 'View more detail about the command,  usage: [info <command>]',
                exec   : function () {
                    printCli("info: error: Input required.");

                }
            },
            {
                command: 'date',
                help   : 'Get current date and time',
                exec   : function () {
                    printCli(dateTime);

                }
            },
            {
                command: 'matrix',
                help   : 'Enter the matrix.',
                exec   : function () {
                    window.location.href = "/matrix";


                }
            },
            {
                command: 'experimental',
                help   : 'Enter the experimental console , disclaimer! highly unstable.',
                exec   : function () {
                    //window.location.href = "/experimental";


                }
            },
            {
                command: 'flicker',
                help   : 'Toggle flickering effect [flicker <on/off>]',
                exec   : function () {
                    printCli("flicker: error: Input required.");



                }
            },
            {
                command: 'typewriter',
                help   : 'Toggle typewriting effect [typewriter <on/off>]',
                exec   : function () {
                    printCli("typewriter: error: Input required.");



                }
            },
            {
                command: 'theme',
                help   : 'Change console theme [theme <value>]\n\nvalues:\nlight - black text with white background.\ndark - green text with black background.\nchrimson - black text with red background.\nbluescreen - white text with blue background.',
                exec   : function () {
                    printCli("theme: error: Input required.");


                }
            }
            ,
            {
                command: 'fullscreen',
                help   : 'View console in fullscreen.',
                exec   : function () {

                    openFullscreen();

                }
            }
            ,
            {
                command: 'open',
                help   : 'Open website with provided link [open <link>]',
                exec   : function () {
                    printCli("open: error: Input required.");

                }
            }
            ,
            {
                command: 'calc',
                help   : 'Calculate arbitary arithemetic operation [calc <operations>]\n\nOperators: + - / % ^',
                exec   : function () {
                    printCli("calc: error: Input required.");

                }
            },
            {
                command: 'whats',
                help   : 'Fetch information for given input from the internet [whats <input>]',
                exec   : function () {
                    printCli("whats: error: Input required.");

                }
            }
            ,
            {
                command: 'reload',
                help   : 'Reload or restart currrent terminal.',
                exec   : function () {
                    //location.reload();

                }
            }
            ,
            {
                command: 'keyboard',
                help   : 'Enable or disable virtual keyboard [keyboard <on/off>]',
                exec   : function () {
                    printCli("keyboard: error: Input required.");

                }
            }
            ,
            {
                command: 'erase',
                help   : 'Erase all local data (including files and user settings)',
                exec   : function () {
                    localStorage.clear();
                    location.reload();

              }
            }


        
        ];
        var line_counter = 0;
        var input        = (function () {
            var i           = document.getElementById('dummy');
            i.className     = 'command-enter';
            i.style.display = 'none';
    
            terminal.appendChild(i);
            return i;
        })();
    
        var fixPrompt = function () {
            terminal.appendChild(input);
            input.style.display = 'block';
        }
    
        var resetLine = function () {
            line_counter++;
            var l       = document.createElement('P');
            l.className = 'line_' + line_counter;
            terminal.appendChild(l);
        };

        var ClearConsole = function (){
            var childs = terminal.querySelectorAll('P');
            childs.forEach(function (node, i) {
                terminal.removeChild(node);
            });
            resetLine();
        };

        var printCli = function (str) {
            str = str.trim();
    
            var last_line = function () {
                var q = terminal.querySelectorAll('P');
                return q[q.length - 1];
            };
    
            var lines = (function () {
                var len  = resplen;
                var curr = len;
                var prev = 0;
    
                const output = [];

                while (str[curr]) {
                    if (str[curr++] == ' ') {
                        output.push(str.substring(prev, curr));
                        prev = curr;
                        curr += len;
                    }

                }

                output.push(str.substr(prev));
    
                return output;
            })();
    
            resetLine();
    

            var switchDelay = $('.switch-one').val();
            if(switchDelay == 0){

             //This function is important to print the dom characters and lines in time.
             var delayedPrint = function (lin, chr) {
                if (lin < lines.length) {

                    if (chr < lines[lin].length) {
                        //setTimeout(function () {
                            last_line().appendChild(document.createTextNode(lines[lin][chr]));
                            chr++;
                            delayedPrint(lin, chr);
                        //}, chr_time);
                    } else {
                        lin++;
                        //setTimeout(function () {
                            last_line().appendChild(document.createTextNode("\n"));
                            delayedPrint(lin, 0);
                            window.scrollTo(0,document.body.scrollHeight);//automatical scroll bottom when new line
                       // }, lin_time);
                    }
                } else {
                    return false;
                }
            };
    
            delayedPrint(0, 0);


            }

            else if (switchDelay == 1){
             //Uncomment this setTimeout to activate typewriter effect
             var delayedPrint = function (lin, chr) {
                if (lin < lines.length) {

                    if (chr < lines[lin].length) {
                        setTimeout(function () {
                            last_line().appendChild(document.createTextNode(lines[lin][chr]));
                            chr++;
                            delayedPrint(lin, chr);
                        }, chr_time);
                    } else {
                        lin++;
                        setTimeout(function () {
                            last_line().appendChild(document.createTextNode("\n"));
                            delayedPrint(lin, 0);
                            window.scrollTo(0,document.body.scrollHeight);//automatical scroll bottom when new line
                        }, lin_time);
                    }
                } else {
                    return false;
                }
            };
    
            delayedPrint(0, 0);
            }




        };
    
        var addChrToCommandQueue = function (chr) {
            input.textContent += chr;
        }
    
        var removeChrAtIndexFromQueue = function (index) {
            if (index < 0) {
                input.textContent = input.textContent.slice(0, index);
            } else {
                input.textContent = input.textContent.slice(index, input.textContent.length - 1);
            }
        }


        //Calculator
        var calc = function (array, lenth) {
            // if string is empty
            if (lenth == 0)
              return 0;
            let s = array[0];
           
            // parseInt function to convert
            // string into integer
            let value = parseInt(s);
            let sum = value;
       
            for (let i = 2; i < lenth; i = i + 2)
            {
             s = array[i];
       
              // parseInt function to convert
             // string into integer
             value = parseInt(s);
       
             // Find operator
             let operation = array[i - 1][0];
       
             // If operator is equal to '+',
              // add value in sum variable
             // else subtract
             if (operation == '+'){
                sum += value;
             }

             else if(operation == '-'){
                sum -= value;
             }
             else if(operation == '/'){
                sum /= value;
             }
             else if(operation == '*'){
                sum *= value;
             }
             else if(operation == '%'){
                sum = sum % value;
             }
             else if(operation == '^'){
                sum = Math.pow(sum, value);
             }
             else if(operation == '!'){
                sum != value;
             }

            }
           
            return sum;
        }



        var processCommand = function (chr: any) {
            var commandEchoed = input.textContent  //this is spacial for echo to keep the cases
            var command       = input.textContent.toLowerCase();
            input.textContent = String();
             //Get Files
             var allFiles = [];
             var allElements = $('.files li');
     
             for (var i = 0; i < allElements.length; i++) {
               var classes = allElements[i].className.toString().split(/\s+/);
               for (var j = 0; j < classes.length; j++) {
                 var cls = classes[j];
                 if (cls && allFiles.indexOf(cls) === -1)
                   allFiles.push(cls);
               }
             }
            //switch values for prompt cases
            var checkSub = $('.switch-case').val();
            //local storage [cache based]
            localStorage.setItem('storedItems', stored.innerHTML);
            


            if(checkSub == 0){
    
            if (command.startsWith("help")) {
                var out = "";
                commands.forEach(function (cmd_obj, i) {
                    out += cmd_obj.command;
                    out += i < commands.length - 1 ? ", " : ".";
                });
    
                printCli("Welcome to cli-emulator, a html dom based command-line to connect with the internet.\n\nCommands:\n" + out + "\nUse [info <command>] for more information.");
            }
            else if (command.startsWith("write ")) {

                
                console.log(allFiles);
                var commandEnd = command.substring("write ".length).trim();
                var valid = false;
                var checkCommand = command.split(" ")
                
                    if(checkCommand[1] =="readme")
                    {
                        printCli(`write: ${commandEnd}: Permission denied`);
                    }
                    else{
                            //not working yet
                            var checkString = commandEnd.split(" ")
                            var currentFile = checkString[0];
                            checkString.shift();
                            var contentString = "";
                            for (let i = 0; i < checkString.length; i++)
                            {
                                contentString += checkString[i];
                                contentString += i < checkString.length - 1 ? " " : "";
                            }                       
                            if(allFiles.includes(currentFile)){
                                $(`.${currentFile}`).append(document.createTextNode(contentString + " "));

                            }
                            else{
                                printCli(`write: ${commandEnd}: File not found.`);
                            }

                    }


                
            }
            else if (command.startsWith("make ")) {
                console.log(allFiles);
                var commandEnd = command.substring("make ".length).trim();
                var valid = false;


                if(!allFiles.includes(commandEnd)){
                    if(!commandEnd.match(/[!-/:-@\[-`{-ÿ]/)){       //javscript function using regex match from alt codes (! to / and : to @ and [ to ` and { to ÿ) for sanitization.
                        $(".files").append(`<li class="${commandEnd}"></li>`);
                        
                    }
                    else {
                        printCli(`make: ${commandEnd}: File name contains restricted symbols.`);
                    }

                    valid = true;

                }

                

                if (!valid) {
                    printCli(`make : ${commandEnd}: File already exists.`);
                }


                
            }
            else if (command.startsWith("rm ")) {
                console.log(allFiles);
                var commandEnd = command.substring("rm ".length).trim();
                //var valid = false;

                if(commandEnd == "readme")
                {
                    printCli(`rm: ${commandEnd}: Permission denied`);
                }
                else{
                    $(`.files .${commandEnd}`).remove();//call file as parent class is imp for sandboxing removal policy(user could have removed any element jsy by mentioning rm classname)
                }

                
            }
            else if (command.startsWith("ls")) {
                var commandEnd = command.substring("ls".length).trim();
    
                var valid = false;

                if (commandEnd == "") {
                    var files=""
                    for (let i = 0; i < allFiles.length; i++)
                    {
                        files +=allFiles[i]
                        files += i < allFiles.length - 1 ? " " : "";
                    }                       
                    printCli(files);
                    valid = true;
                }
    
                if (!valid) {
                    printCli(`ls: cannot access '${commandEnd}': No such workspace`);
                }
            }     
            else if (command.startsWith("info ")) {
                var commandEnd = command.substring("info".length).trim();
    
                var valid = false;
                commands.forEach(function (cmd_obj, i) {
                    if (cmd_obj.command.toLowerCase() === commandEnd) {
                        printCli(cmd_obj.help);
                        valid = true;
                    }

                });
                if (commandEnd === "") {
                    printCli("Type [info <command>] for more information.");
                    valid = true;
                }
    
                if (!valid) {
                    printCli(`No info entry found for "${commandEnd}", type ´help´ for help.`);
                }
            } 

            else if (command.startsWith("cat ")) {
                var commandEnd = command.substring("cat".length).trim();
    
                var valid = false;


                if(allFiles.includes(commandEnd)){
                    var content = $(`.${commandEnd}`).text();
                    printCli(content);
                    valid = true;

                }

                if (!valid) {
                    printCli(`cat: ${commandEnd}: No such file`);
                }
            } 

            else if (command.startsWith("echo ")) {
                var commandEnd = commandEchoed.substring("echo".length).trim();
                printCli(`${commandEnd}`);

            } 

            else if (command.startsWith("flicker ")) {
                var commandEnd = command.substring("flicker".length).trim();
    
                var valid = false;

                if (commandEnd === "on") {
                    $(".command-line").css("animation", "font-refresh-flicker 1ms infinite");
                    printCli("Flicker effect toggled on"); 
                    valid = true;
                }
                if (commandEnd === "off") {
                    $(".command-line").css("animation", "none");
                    printCli("Flicker effect toggled off");
                    valid = true;
                }

    
                if (!valid) {
                    printCli(`flicker: ${commandEnd}: Invalid value, use [info flicker] for more information`);
                }
            }
            else if (command.startsWith("typewriter ")) {
                var commandEnd = command.substring("typewriter".length).trim();
    
                var valid = false;

                if (commandEnd === "on") {
                    printCli("Caution! experimental feature: may result in output delay and unpredictable function execution, still want to continue? [y/n]");
                    $(".switch-case").val('3'); //Go to case 3 for promt and execution of funtion
                    valid = true;
                }
                if (commandEnd === "off") {
                    $(".switch-one").val('0');
                    printCli("Typewriter effect toggled off");
                    valid = true;
                }

    
                if (!valid) {
                    printCli(`typewriter: ${commandEnd}: Invalid value, use [info typewriter] for more information`);
                }
            }  

            else if (command.startsWith("theme ")) {
                var commandEnd = command.substring("theme".length).trim();
    
                var valid = false;

                if (commandEnd === "light") {
                    trans();
                    document.documentElement.setAttribute('data-theme', 'light');
                    printCli("Theme switched to light");
                    localStorage.setItem("theme", "1");  
                    valid = true;
                }
                if (commandEnd === "dark") {
                    trans();
                    document.documentElement.setAttribute('data-theme', 'dark'); 
                    printCli("Theme switched to dark");
                    localStorage.setItem("theme", "0");  
                    valid = true;
                }
                if (commandEnd === "chrimson") {
                    trans();
                    document.documentElement.setAttribute('data-theme', 'chrimson'); 
                    printCli("Theme switched to chrimson");
                    localStorage.setItem("theme", "2");  
                    valid = true;
                }
                if (commandEnd === "bluescreen") {
                    trans();
                    document.documentElement.setAttribute('data-theme', 'bluescreen'); 
                    printCli("Theme switched to bluescreen");
                    localStorage.setItem("theme", "3");  
                    valid = true;
                }

    
                if (!valid) {
                    printCli(`theme: ${commandEnd}: Invalid Value, use [info theme] for more information`);
                }
            } 


            else if (command.startsWith("open ")) {
                var commandEnd = command.substring("open".length).trim();
    
                var valid = false;

                if (commandEnd.startsWith("http://") || commandEnd.startsWith("https://")) {
                    if(commandEnd.includes(".")){

                    }
                    window.open(commandEnd);
                    valid = true;
                }
    
                if (!valid) {
                    if(!commandEnd.includes(".")){
                        window.open("https://" + commandEnd + ".com");
                    }
                    else{
                        window.open("https://" + commandEnd);

                    }
                    
                }
            } 

            else if (command.startsWith("calc ")) {
                let commandEnd = command.substring("calc".length).trim();

                let eleArray = commandEnd.split(/(\d+)/);

                eleArray.shift();
                console.log(eleArray[0])
                var answer = calc(eleArray, eleArray.length);
                printCli(`${answer}`);

            }
            else if (command.startsWith("whats ")) {
                var commandEnd = command.substring("whats".length).trim();
                var searchWiki = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles="+ commandEnd;
                console.log(searchWiki)
                //window.open(searchWiki);
                $.ajax({
                    url:searchWiki,
                    dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
                    success:function(json){
                        // do stuff with json (in this case an array)
                        console.log("json parse success");
                        var stringJson = JSON.stringify(json)
                        var removeBr = stringJson.replace(/{/g, "")
                        removeBr = removeBr.replace(/}/g, "")
                        var removeQt = removeBr.replace(/"/g, "")
                        let splitStrings = removeQt.split("extract:")
                        let arrayLen = splitStrings.length;
                        let fetchedString = splitStrings[arrayLen-1]
                        let arrayfetch =  fetchedString.split(". ");
                        var stringValue = arrayfetch[0]+"."+ arrayfetch[1] +"."
                        var checkundef = ".undefined."
                        if(stringValue.indexOf(checkundef) !== -1){ //used indexOf because its the fastest
                            printCli(`${commandEnd} not found in Database.`)

                        }
                        else{
                            printCli(stringValue);

                        }
                        fixPrompt();
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                      alert(jqXHR.status);
                      console.log("json parse error:" + jqXHR.status);
                      printCli("Cnnection failure: " + jqXHR.status)
                  },     
                });


            } 
            else if (command.startsWith("keyboard ")) {
                var commandEnd = command.substring("keyboard".length).trim();
    
                var valid = false;

                if (commandEnd === "on") {
                    
                    printCli("Virtual keyboard enabled.");
                    $('.screen-keyboard').css('display', 'block');
                    $('.bottom-div').css('height', '260px');

                    valid = true;
                }
                if (commandEnd === "off") {
                    var checkMob = $('.switch-two').val(); 
                    if (checkMob == 1){
                        printCli("Caution(mobile device detected)!: disabling keyboard will result in no method for input, still want to continue? [y/n]");
                        $('.switch-case').val('4');//helps to switch to case 4


                    }
                    else{
                        printCli("Virtual keyboard disabled.");
                        $('.screen-keyboard').css('display', 'none');
                        $('.bottom-div').css('height', '25px');
                    }

                    valid = true;
                }

    
                if (!valid) {
                    printCli(`keyboard: ${commandEnd}: Invalid value, use [info keyboard] for more information`);
                }
            }
            else if (command == "reload") {
    
                printCli("Are u sure u want to reload [y/n]");
                $('.switch-case').val('1');//helps to switch to case 1
            }
            else if (command == "experimental") {
    
                printCli("Are u sure u want to load experimental console [y/n]");
                $('.switch-case').val('2');//helps to switch to case 2
            }
            else if(command == ""){//to identify if empty and do nothing
            }

            
            else {
                var valid = false;
                commands.forEach(function (cmd_obj, i) {
                    if (cmd_obj.command.toLowerCase() === command) {
                        cmd_obj.exec.call(this);
                        valid = true;
                    }
                });
    
                if (!valid) {
                    var firstCommand = command.split(" ");//This is method(split(space)) should be replace startwith() function to detect first command in the future
                    printCli(`Command ´${firstCommand[0]}´ not found, type ´help´ for help.`);
                }
            }
          
            }

            else if (checkSub != 0) {
                //var checker = $(".switch-case").val();
    
                switch (checkSub) {
                    case '4':
                        if (command.startsWith("y")) {
    
                            printCli("Virtual keyboard disabled, reload page to revert changes.");
                            $('.screen-keyboard').css('display', 'none');
                            $('.switch-case').val('0');//important to backup switch
                        }
                        else if(command.startsWith("n")){
                            printCli("Process canceled");
                            $('.switch-case').val('0');//important to backup switch
                        }
                        break;
                    case '3':
                        if (command.startsWith("y")) {
    
                            printCli("Typewriter effect toggled on"); 
                            $('.switch-one').val('1');
                            $('.switch-case').val('0');//important to backup switch
                        }
                        else if(command.startsWith("n")){
                            printCli("Toggle canceled");
                            $('.switch-case').val('0');//important to backup switch
                        }
                        break;
                    case '2':
                        if (command.startsWith("y")) {
    
                            window.location.href = "/experimental";
                            $('.switch-case').val('0');
                        }
                        else if(command.startsWith("n")){
                            printCli("Load canceled");
                            $('.switch-case').val('0');
                        }
                        break;

                    case '1':
                    if (command.startsWith("y")) {
    
                            location.reload();
                            $('.switch-case').val('0');
                        }
                        else if(command.startsWith("n")){
                            printCli("Reload canceled");
                            $('.switch-case').val('0');
                        }
                        else{
                            // ClearConsole();
                            //printCli("wrong");
                        }
                        break;  
                                                     
                    default:
                        // ClearConsole();
                        //printCli("wrong");
                        break;
                }
                
    
            }




        };
    
        var launchPrompt = function () {
            fixPrompt();
    
            // backspace seems to be a special case since it's the browsers-default location.back
            window.addEventListener('keydown', function (event) {
                var keyCode = event.charCode ? event.charCode : event.keyCode;
                switch (keyCode) {
                    case 46:
                        event.stopPropagation();
                        event.preventDefault();
                    case 8:
                        removeChrAtIndexFromQueue(-1);
                        break;
                    case 46:
                        removeChrAtIndexFromQueue(1);
                        break;
                }
            });
    
            window.addEventListener('keypress', function (e) {
                // handle press
                window.scrollTo(0,document.body.scrollHeight);//automatically scroll bottom when any key is pressed
                var keyCode = e.charCode ? e.charCode : e.keyCode;
                switch (keyCode) {
                    case 13: // enter
                        processCommand(input.textContent);
                        break;
                    default:
                        var str = String.fromCharCode(keyCode);
                        if (str) {
                            addChrToCommandQueue(str);
                        }
                }
    
                // move input to bottom
                fixPrompt();
            });

            $(document).ready(function() {

                $(".screen-keyboard-row-clr").click(function() {
                    removeChrAtIndexFromQueue(input.textContent.length);
                    //ClearConsole();
                    //fixPrompt();

                });


              $(".altkey").click(function() {
                window.scrollTo(0,document.body.scrollHeight);//automatically scroll bottom when any key is pressed
                  var altCode = $(this).val();
                  var checkCode = $('.screen-keyboard-row-case').val();
                  switch (altCode) {
                      case '8':// backspace
                          removeChrAtIndexFromQueue(-1);
                          break;
                      case '13': // enter
                          processCommand(input.textContent);
                          break;
                      case '32': // space
                          var str = String.fromCharCode(altCode);
                          if (str) {
                              addChrToCommandQueue(str);
                          }
                          break;
                      case '44': // comma
                          var str = String.fromCharCode(altCode);
                          if (str) {
                               addChrToCommandQueue(str);
                           }
                           break;
                      case '46': // dot
                          var str = String.fromCharCode(altCode);
                          if (str) {
                               addChrToCommandQueue(str);
                          }
                          break;
                      default:
                          if (checkCode == 0){
                              altCode = parseFloat(altCode) + 32;
                              console.log(altCode)
                              var str = String.fromCharCode(altCode);
                              if (str) {
                                  addChrToCommandQueue(str);
                              }


                          }
                          else if(checkCode == 1){
                            altCode = parseFloat(altCode);
                            console.log(altCode)
                            var str = String.fromCharCode(altCode);
                            if (str) {
                                addChrToCommandQueue(str);
                            }
                            

                          }                  


                  }
              // move input to bottom
              fixPrompt();
              });
          });
          


        };
    
        var IntroMesg = function(){


             printCli(`[CLI EMULATOR] [${dateTime}] \n\n`);
             launchPrompt();

         
         }


    
        resetLine();
        IntroMesg();//start with this message
    }




    var elem = document.documentElement;
    function openFullscreen() {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    }
    

  }
  
  

}
