console.log("working");
//gallery generate on load all images, adds id by position within images object
	for (i=0; i<images.length; i++) {
		document.getElementById('gallery').innerHTML 	
	  +=   	'<div class="mb-3 pics animation all 2">'
    + 		'<img onclick="similarfunction(this.id)" class="img-fluid test '+ images[i].keyword1 +'" id="'+[i]+'" src="'+ images[i].source +'" alt="Card image cap">'
  	+ 		'</div>'
  };
	
  // function included as onclick function within html when images are pasted

  function similarfunction(clicked_id)
  {

  //show individual image modal and remove old content, disable scroll on bg content
 
  document.getElementById('imageModal').innerHTML = '';
  document.getElementById('imageModal').style.display="block";  
  document.getElementById('body').style.overflow="hidden";
  document.getElementById('imageModal').innerHTML 

  //paste clicked element as image as well as keywords and modal background, also sets up div for related images to be placed in

    +=	'<div class="imageModalBg">'
    +	'<div class="imageModalImage" id="test">'
    + '</br>'
    + '<img src="images/titleLogo.png" class=".img-fluid" id="titleLogo2">'
    + '</br>'
    + '<img src="'+ images[clicked_id].source +'">'
    + '</br>'
    + '<p> Image keyword: </p>'
    +	'<p> '+ images[clicked_id].keyword1 +' </p>'

  // related images appear in this div

    + '<div class="gallery">'
    + '<div class="mb-3 pics animation all 2" id="relatedImagesBox">'
    + '</div>'
    + '</div>'
    + '</div>'
    +	'</div>'

  //sets screen to top of fixed modal

    document.getElementById('titleLogo2').scrollIntoView();

  //establish variables to use later for finding related

    var keyClicked1 = images[clicked_id].keyword1;
    var keyClickedTitle = images[clicked_id].title;
    var keyArray1 = "";
    var keyArrayTitle = "";

  //loop through images object to find matches

    for (i=0; i<images.length; i++){

  //set variables as keywords

    keyArray1 = images[i].keyword1;
    keyArrayTitle = images[i].title;

  //check for objects within images that have matching keywords

    if ((keyArray1 === keyClicked1) && (keyArrayTitle != images[clicked_id].title)) {

    document.getElementById('relatedImagesBox').innerHTML 

  //paste each match in as image

    +='<img class="secondGalleryImg" src="'+ images[i].source +'">'
  } 
}


  //set close modal on click, enable scroll on body
    
    document.getElementById('imageModal').addEventListener('click', function(){
  	document.getElementById('imageModal').style.display="none";
    document.getElementById('body').style.overflow="scroll";

  });
  }


  //generate menu from keywords array and set each keyword as its own id
    for (k=0; k<keywords.length; k++) {
    document.getElementById('keyWordList').innerHTML 

  //sets up new id for each keyword using the keyword

    += '<div class="p-2 keywords" id="'+keywords[k]+'">'+ keywords[k] +'</div>'
    }

//create mouseover effect on generated menu

var id = ""

for (t=0; t<keywords.length; t++) {
  id = keywords[t];
  document.getElementById(id).addEventListener('mouseover', function(){
    document.getElementById(this.id).style.color = "#E64C4C";
  });
    document.getElementById(id).addEventListener('mouseleave', function(){
    document.getElementById(this.id).style.color = "white";
  });
}


  document.getElementById('closeKeyWordBox').addEventListener('mouseover', function(){
    document.getElementById('closeKeyWordBox').style.color = "#E64C4C";
  });
    document.getElementById('closeKeyWordBox').addEventListener('mouseleave', function(){
    document.getElementById('closeKeyWordBox').style.color = "white";
  });
//generates gallery based on matching keyword menu id with image keywords

var key = ""

for (s=0; s<keywords.length; s++) {
  key = keywords[s];
 document.getElementById(key).addEventListener('click', function(){
  document.getElementById('gallery').innerHTML = ""; // clears body
    for (i=0; i<images.length; i++) {
      if ((images[i].keyword1 === this.id)){
    document.getElementById('gallery').innerHTML  
  +=    '<div class="mb-3 pics animation all 2">'
    +     '<img onclick="similarfunction(this.id)" class="img-fluid test '+ images[i].keyword1 +'" id="'+[i]+'" src="'+ images[i].source +'" alt="Card image cap">'
    +     '</div>'
}}
 });

}


//hide menu

		document.getElementById('closeKeyWordBox').addEventListener('click', function(){
			document.getElementById('keyWordBox').style.display = ('none');
		});

				document.getElementById('keyWordBox2').addEventListener('click', function(){
			document.getElementById('keyWordBox').style.display = ('none');
		});



//show menu
document.getElementById('keyWordSearch').addEventListener('click', function(){

	document.getElementById('keyWordBox').style.display = ('block');


});

document.getElementById('returnArrow').addEventListener('click',function(){
  document.getElementById('titleLogo').scrollIntoView({ block: 'end',  behavior: 'smooth' });
});

