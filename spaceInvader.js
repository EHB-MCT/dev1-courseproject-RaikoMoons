"use strict";

SignatureRaiko();

function SignatureRaiko(){
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d"); 

    context.fillStyle='black';
    context.beginPath();
    context.rect(50,50,300,300);
    context.closePath();
    context.fill();
    context.fillStyle='#4fcc86';
    context.beginPath();
    context.rect(75,75,50,50);
    context.rect(175,75,50,50);
    context.rect(275,75,50,50);
    context.rect(75,225,50,100);
    context.rect(275,225,50,100);
    context.rect(175,275,50,50);
    context.rect(125,175,50,50);
    context.rect(225,175,50,50);
    context.fill();

}