import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
      $(document).ready(function(){
        $(this).scroll(function(){
          let $navLink = $('.nav-link');
          let $nav = $('#nav-header');
          // if($(this).scrollTop() > 798){
            if($(this).scrollTop() >= $('#about-page').offset().top){
              $nav.addClass('scrolled');
              $navLink.addClass('link-scrolled')
          }else{
            $nav.removeClass('scrolled');
            $navLink.removeClass('link-scrolled')
          }
          //console.log($(this).scrollTop());
        })
            

            $('#home-btn').on('click', function(){
            //console.log('clicked')
            $('html, body').animate({
              scrollTop: 0}, 1000)
            })

          $('#about-btn').on('click', function(){
            $('html, body').animate({
              scrollTop: $("#about-page").offset().top}, 1200)
            })

            $('#skill-btn').on('click', function(){
            $('html, body').animate({
              scrollTop: $("#skill-page").offset().top}, 1500)
            })

            $('#portfolio-btn').on('click', function(){
            $('html, body').animate({
              scrollTop: $("#portfolio-page").offset().top}, 1500)
            })
            $('#contact-btn').on('click', function(){
            $('html, body').animate({
              scrollTop: $("#contact-page").offset().top}, 1600)
            })
            $("#hamburger-menu").on('click',function(){
              $(".bottom-nav-links").toggle('display')
            })
            
        

        
      })
  }

}
