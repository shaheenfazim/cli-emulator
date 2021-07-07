import { Component, OnInit } from '@angular/core';
declare var $: any;
declare global {
    interface Document {
        webkitExitFullscreen: any;
        msExitFullscreen: any;
        webkitIsFullScreen: any;
        mozFullScreen: any;
        msFullscreenElement: any;
        
    }
  
    interface HTMLElement {
      msRequestFullscreen?: () => Promise<void>;
      webkitRequestFullscreen?: () => Promise<void>;
    }
  }

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  (function() {
    var j, typex;
  
    typex = function() {
      var alpha, name, s, texty;
      alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '0', '1', '0', '1', '0', '1', '1', '0', '1', '1', '1', '1', '1', '0', '1'];
      name = 'Enter the Matrix';
      texty = name;
      if (j < texty.length) {
        s = Math.floor(Math.random() * 70);
        document.getElementById('welcome-msg').innerHTML = alpha[s];
        setTimeout(typex, 20);
        if (alpha[s] === texty.charAt(j)) {
          document.getElementById('welcome-wrt').innerHTML += alpha[s];
          j++;
          document.getElementById('welcome-msg').innerHTML = '';
          setTimeout(typex, 5);
        }
      }
    };
  
    $(document).ready(function() {
      typex();
    });
  
    j = 0;
  
  }).call(this);
    
    

     
  var element = document.getElementById("lengther");
  element.scrollTop = element.scrollHeight - element.clientHeight;

  var chr_time = 150;
  var lin_time = 500;


  var widthpx= document.getElementById("lengther").offsetWidth;
   
  console.log(widthpx);

  var resplen = Math.round((widthpx) / 10);
  console.log(resplen);

  
  //daemon process
  (function(delay, callback){
      var loop = function(){
          callback();
          setTimeout(loop, delay);
      }; loop();
  })(100, function(){
    //Always check for full screen requests and intiate changes
    if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement !== null)
    {
        $('.welcome-message').css('display', 'block');
        $('.terminal-container').css('display', 'none');
        $('app-keyboard').css('display', 'none');
        
    }
    
    if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement === null)
    {
        $('.welcome-message').css('display', 'none');
        $('.terminal-container').css('display', 'block');
        $('app-keyboard').css('display', 'block');
    }
      //Always Scroll to bottom
      $('html, body').animate({
      scrollTop: $("#lengther").offset().top
      }, 100);
  });
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;

  
  var terminal = document.getElementsByClassName('command-line')[0];
  
  
  window.onload = function () {

      var commands = [
          
          {
              command: 'test',
              help   : 'Test if terminal is up and running',
              exec   : function () {
                  printCli("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
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
              command: 'exit',
              help   : 'exit the matrix',
              exec   : function () {
                  window.location.href = "/terminal";


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
                      }, lin_time);
                  }
              } else {
                  return false;
              }
          };
  
          delayedPrint(0, 0);
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
  
      var processCommand = function (chr: any) {
        var command       = input.textContent.toLowerCase();
        input.textContent = String();
        ClearConsole();

        if (command.startsWith("no")) {

                printCli("Are u sure!");

        }
        else if (command.startsWith("yes") || command.startsWith("yeah") || command.startsWith("ok")) {

                printCli("Plato insists that those who free themselves and come to perceive reality have a duty to return and teach others");
                
        }  
        else if (command.startsWith("who")) {
            var command = command.substring("who".length).trim();

            var valid = false;

            if (command.toLowerCase() === "are u") {
                printCli("Not yet. We will make ourselves known");
                valid = true;
            }


            if (!valid) {
                printCli("Not yet.");
            }
        }
        else if (command.startsWith("why")) {
            var command = command.substring("why".length).trim();
            var valid = false;

            if (command.toLowerCase() === "me") {
                printCli("Why, by accident or maybe fate u will know soon");
                valid = true;
            }


            if (!valid) {
                printCli("Soon you will know");
            }
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
                printCli("Follow the white rabbit.");
            }
        }
    };
  
      var launchPrompt = function () {
          fixPrompt();
  
          // backspace seems to be a special case since it's the browsers-default location.back
          window.addEventListener('keydown', function (event) {
              var keyCode = event.charCode ? event.charCode : event.keyCode;
              switch (keyCode) {
                  case 8:
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
                  case '8':// backspacespace
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

        printCli("Hello There,\nHave you ever felt that something was not right with the world?");              
    
    }
    



    var runOnce = (function() {
       var executed = false;
       return function() {
           if (!executed) {
               executed = true;
               IntroMesg();
               setTimeout(launchPrompt, 12500) 
           }
       };
   })();

   
   resetLine();
  // if (document.webkitExitFullscreen || document.msExitFullscreen == null){
    //$('.console-bg').css('background-color', 'blue');
    //}


   

    $("html, body").click(function(){
       openFullscreen();
       setTimeout(runOnce,1000)
       $(document).ready(function() {
        var mobile = (/iphone|ipod|android|blackberry|mini|palm/i.test(navigator.userAgent.toLowerCase())); //include window/linux to test if working  
        if (mobile) { 
            console.log("mobile device detected, keyboard revealed");
            $('.screen-keyboard').css('display', 'block'); // or use $('.classname').hide();
            $('.bottom-div').css('height', '260px');
        } 
        else 
        { 
            console.log("familiar device detected, keyboard hidden"); 
  
        }
  
  
    });
     });
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
