import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    var count = 0;
    $(".screen-keyboard-row-case").click(function() {
        count++;
        var isEven = function(someNumber) {
            return (someNumber % 2 === 0) ? true : false;
        };
        if (isEven(count) === false) {
            $('.screen-keyboard-row-case').val('1');
            $(".altkey").css("text-transform", "uppercase");
            $(".screen-keyboard-row-case-icon-lower").css("display", "none");
            $(".screen-keyboard-row-case-icon-upper").css("display", "block");
        } else if (isEven(count) === true) {
            $('.screen-keyboard-row-case').val('0');
            $(".altkey").css("text-transform", "lowercase");
            $(".screen-keyboard-row-case-icon-lower").css("display", "block");
            $(".screen-keyboard-row-case-icon-upper").css("display", "none");
        }
    });

    $(".screen-keyboard-row-symbols").click(function() {
        count++;
        var isEven = function(someNumber) {
            return (someNumber % 2 === 0) ? true : false;
        };
        if (isEven(count) === false) {
            $('.screen-keyboard-row-case').val('1'); //imp
            $(".rmkey").css("display", "none");
            $(".switchkey").css("display", "block");
            $(".screen-keyboard-row-symbols").text('ABC');
        } else if (isEven(count) === true) {
            $('.screen-keyboard-row-case').val('0'); //imp
            $(".rmkey").css("display", "block");
            $(".switchkey").css("display", "none");
            $(".screen-keyboard-row-symbols").text('?01');
        }
    });

    $(".row-symbols-alt").click(function() {
      count++;
      var isEven = function(someNumber) {
          return (someNumber % 2 === 0) ? true : false;
      };
      if (isEven(count) === false) {
          $('.row-symbols-alt').val('1'); //imp
          $(".switchkey").hide();
          $(".switchkeytwo").show();
          $(".row-symbols-alt").text('dsff');
      } else if (isEven(count) === true) {
          $('.screen-keyboard-row-symbols').val('0'); //imp
          $(".switchkey").show();
          $(".switchkeytwo").hide();
          $(".row-symbols-alt").text('dgsc');
      }
  });

  }

}
