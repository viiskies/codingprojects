var currentImage = 0;

function changeIMGsrc() {
	
	var image = document.getElementById('maskine');
	
	var images = ['https://www.appliancesdirect.co.uk/Images/774052781WMXTF742K_1_Supersize.jpg', 
				  'https://www.appliancesdirect.co.uk/Images/WW80K5413UW_9_Supersize.jpg',
				  'https://www.appliancesdirect.co.uk/Images/774051131WMAO743P_1_Supersize.jpg',
				  'http://newworld.co.za/wp-content/uploads/2016/08/ww70j4263GS.jpg',
				  'https://www.appliancesdirect.co.uk/Images/WM105VS_1_supersize.jpg'
				  ];
	image.setAttribute('src', images[currentImage]);
	currentImage++;
	if (currentImage > images.length - 1) {
		currentImage = 0;
	}



}

