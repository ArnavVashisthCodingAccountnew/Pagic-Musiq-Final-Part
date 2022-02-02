peterpan = "";
harry_potter = "";
harrypotterstatus  = "";
peterpanstatus  = "";
scoreRightWrist = 0; 
	 scoreLeftWrist = 0; 
	 rightWristX = 0; 
	 rightWristY = 0; 
	 leftWristX = 0; 
	 leftWristY = 0;

function preload() {
	 peterpan = loadSound('peterpan.mp3'); 
	 harry_potter = loadSound('harrypotter.mp3');
	} 


	
	function setup() {
		canvas =  createCanvas(600, 500);
		canvas.center();
	
		video = createCapture(VIDEO);
		video.hide();
	
		poseNet = ml5.poseNet(video, modelLoaded);
		poseNet.on('pose', gotposes);
	}
function modelLoaded() {
	console.log('PoseNet Is Initialized');
}
function draw()  { 
	image(video, 0, 0, 600, 500);
	harrypotterstatus = harry_potter.isPlaying();

	peterpanstatus  = peterpan.isPlaying();


	console.log(harrypotterstatus);
	fill("#FF0000");
	stroke("#FF0000");
	
			 if (scoreRightWrist > 0.2){
				circle(rightWristX,rightWristY,20);
		     	   peterpan.stop();
			   }
			   if (harrypotterstatus == false){
                harry_potter.play();
				document.getElementById("Songname").innerHTML  = "Song Name:Harry Potter Themed Song";

			   }
			   if (scoreLeftWrist > 0.2){
				circle(leftWristX,leftWristY,20);
				 harry_potter.stop();
				 document.getElementById("Songname").innerHTML  = "Song Name:Peter Pan";

			   }
			   if (peterpanstatus == false){
				   peterpan.play();
				   document.getElementById("Songname").innerHTML = "Song Name: Peter Pan";
	   
			   }
	   
		   
			 
			}
		
			function gotposes(results)
			{
			  if(results.length > 0)
			  {
				console.log(results);
				scoreRightWrist =  results[0].pose.keypoints[10].score;
				scoreLeftWrist =  results[0].pose.keypoints[9].score;
				console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);
				
				rightWristX = results[0].pose.rightWrist.x;
				rightWristY = results[0].pose.rightWrist.y;
				console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
			
				leftWristX = results[0].pose.leftWrist.x;
				leftWristY = results[0].pose.leftWrist.y;
				console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
					
			  }
			}			 

			function play()
			{
				song.play();
				song.setVolume(1);
				song.rate(1);
			}
			
			