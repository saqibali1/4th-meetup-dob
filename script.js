function getSign() {

 let name = document.querySelector(".inp1").value;
 let month = document.querySelector(".inp3").value;
 let day = document.querySelector(".inp2").value;
 let para = document.querySelector("#para");




  if((month == 1 && day >= 20) || (month == 2 && day <=18)) {
   para.innerHTML = ( name + " you are Aquarius \n Element: Air \n Quality: Fixed \n Color: Light-Blue, Silver \n Day: Saturday\n Ruler: Uranus, Saturn\n Greatest Overall Compatibility: Leo, Sagittarius \n Lucky Numbers: 4, 7, 11, 22, 29 \n Date range: January 20 - February 18. ");


  } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
   para.innerHTML = (name + " you are PISCES. \n Element: Water, \n Quality: Mutable, \n Color: Mauve, Lilac, Purple, Violet, Sea green \n Day: Thursday \n Ruler: Neptune, Jupiter,\n Greatest Overall Compatibility: Virgo, Taurus \n Lucky Numbers: 3, 9, 12, 15, 18, 24, \n Date range: February 19 - March 20. ");
  

  } else if((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    para.innerHTML = ( name + " you are ARIES. \n  Element: Fire, \n Quality: Cardinal, \n Color: Red \n   Day: Tuesday\n   Ruler: Mars\n Greatest Overall Compatibility: Libra, Leo ,\n Lucky Numbers: 1, 8, 17, \n  Date range: March 21 - April 19. ");


  } else if((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
     para.innerHTML =( name + " you are TAURUS. \n Element: Earth, \n Quality: Fixed, \n  Color: Green, Pink \n Day: Friday, Monday \n Ruler: Venus \n Greatest Overall Compatibility: Scorpio, Cancer \n Lucky Numbers: 2, 6, 9, 12, 24,\n Date range: April 20 - May 20. ");


  } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
     para.innerHTML =(name + " you are GEMINI. \n Element: Air, \n Quality: Mutable, \n Color: Light-Green, Yellow \n Day: Wednesday \n Ruler: Mercury \n Greatest Overall Compatibility: Sagittarius, Aquarius \n Lucky Numbers: 5, 7, 14, 23, \n Date range: May 21 - June 20. ")


  } else if((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
     para.innerHTML =( name +" you are  Cancer. \n  Element: Water, \n  Quality: Cardinal, \n Color: White \n Day: Monday, Thursday \n Ruler: Moon \n Greatest Overall Compatibility: Capricorn, Taurus \n Lucky Numbers: 2, 3, 15, 20, \n Date range: June 21 - July 22. ")


  } else if((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
     para.innerHTML =( name +" you are leo. \n Element: Fire, \n Quality: Fixed, \n Color: Gold, Yellow, Orange \n Day: Sunday \n Ruler: Sun \n Greatest Overall Compatibility: Aquarius, Gemini \n Lucky Numbers: 1, 3, 10, 19, \n  Date range: July 23 - August 22. ")


  } else if((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
   	 para.innerHTML =( name +" you are Virgo. \n Element: Earth, \n Quality: Mutable, \n Color: Grey, Beige, Pale-Yellow \n Day: Wednesday \n Ruler: Mercury \n Greatest Overall Compatibility: Pisces, Cancer \n Lucky Numbers: 5, 14, 15, 23, 32, \n Date range: August 23 – September 22. ")
 

  } else if((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
     para.innerHTML =( name +" you are Libra. \n  Element: Air, \n Quality: Cardinal, \n Color: Pink, Green \n Day: Friday \n Ruler: Venus \n Greatest Overall Compatibility: Aries, Sagittarius \n Lucky Numbers: 4, 6, 13, 15, 24, \n Date range: September 23 - October 22. ")
 

  } else if((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
     para.innerHTML =( name +" you are Scorpio. \n Element: Water, \n Quality: Fixed, \n Color: Scarlet, Red, Rust \n Day: Tuesday \n Ruler: Pluto, Mars \n Greatest Overall Compatibility: Taurus, Cancer \n Lucky Numbers: 8, 11, 18, 22, \n Date range: October 23 - November 21. ")


  } else if((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    para.innerHTML =( name +" you are Sagittarius. \n Element: Fire, \n Quality: Mutable, \n Color: Blue \n  Day: Thursday \n Ruler: Jupiter \n Greatest Overall Compatibility: Gemini, Aries \n Lucky Numbers: 3, 7, 9, 12, 21, \n Date range: November 22 - December 21. ")


  } else if((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
     para.innerHTML =( name +" you are Capricorn. \n Element: Earth, \n Quality: Cardinal, \n Color: Brown, Black, \n Day: Saturday, \n Ruler: Saturn, \n Greatest Overall Compatibility: Taurus, Cancer, \n Lucky Numbers: 4, 8, 13, 22, \n Date range: December 22 - January 19.")

  }

}


