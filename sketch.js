let size = 23;
let heart;
let njimat;
let qlouba;
let msg = -1;
let numberOfMessages = 12;
let clrs = [];
let song;
let fon;

let boxs = [];

function preload() {
  soundFormats('mp3');
  let a = int(random(8));
  console.log(a);
  //let a = 0;
  song = loadSound('song' + str(a) +'.mp3');
  /*songs.push(loadSound('song1.mp3'));
  songs.push(loadSound('song2.mp3'));
  songs.push(loadSound('song3.mp3'));
  songs.push(loadSound('song4.mp3'));
  songs.push(loadSound('song5.mp3'));
  songs.push(loadSound('song6.mp3'));*/
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
	njimat = new Njimat(200);
	qlouba = new Hearts(numberOfMessages);
	for (let i = 0; i < numberOfMessages; i++) {
		boxs.push(new MessageBox(color(255, 255, 255)));
    }
	song.play();
    //song++;
	//textFont(font);
	rectMode(CENTER);
  fon = loadFont('raleway.ttf');
}

function draw() {
	if (!song.isPlaying()) {
		song.play();
	}
  background(0, 0, 20, 20);
	njimat.display();
  qlouba.display();
	if (msg != -1) {
		boxs[msg].show();
	}
}

function Heart(cx, cy) {
  this.x = cx;
  this.y = cy;
  this.r = 1;
  this.clr = color(round(random(255)), round(random(255)), round(random(255, 255)));
	this.phase = random(0, 500);
  
  this.show = function() {
    this.pulse();
    fill(this.clr);
    beginShape();
    for (let t = 0; t < 360; t++) {
      let a = radians(t);
      let x = this.x + this.r*(16*pow(sin(a), 3));
      let y = this.y + this.r*(13*cos(a) - 5*cos(2*a) - 2*cos(3*a) - cos(4*a));
      curveVertex(x, -y);
    }
    endShape(CLOSE);
  };
  
  this.pulse = function() {
    this.r = 0.7 + 0.75*abs(cos(this.phase + frameCount/15));
  };
	
	this.getColor = function() {
		return [red(this.clr), green(this.clr), blue(this.clr)];	
	};
}

function Hearts(n) {
	this.total = n;
	this. hrts = [];
	
	for (let i = 0; i < this.total; i++) {
		let ht = new Heart(random(0 + 100, width - 100), random(-100, -height + 100));
		this.hrts.push(ht);
		clrs.push(ht.getColor());
	}
	
	this.display = function() {
		noStroke()
    for (let i = 0; i < this.total; i++) {
      this.hrts[i].show();
    }
  };
	
	this.getHearts = function() {
		return this.hrts;
	}
}

function Njima(x, y) {
	this.x = x;
	this.y = y;
	this.r = random(2, 7);
	this.red = 255;
	this.g = random(90);
	this.b = random(90);
	this.phase = random(0, 500);

	this.show = function() {
		this.pulse();
		noStroke();
		fill(this.red, this.g, this.b);
		ellipse(this.x, this.y, this.r, this.r);
	}
		
	this.pulse = function() {
		this.red = 255 - 100*abs(cos(this.phase + frameCount/25)); 
	};
}

function Njimat(n) {
  this.total = n;
  this.nejmat = [];
  
  for (let i = 0; i < this.total; i++) {
    this.nejmat.push(new Njima(random(0, width), random(0, height)));
  }
  
  this.display = function() {
    for (let i = 0; i < this.total; i++) {
      this.nejmat[i].show();
    }
  };
}


let messages = ["Even if we didn't get the chance to meet, if our friendship and our bond depended solely on the fact that we needed to see each other then I don't think that that's the type of bond that I want to have. During this year, I can say with extreme confidence that I was truly happy and it's directly correlated with the family. This link will never cease even after we part ways in ensias. I won't let it for sure. ~Yasser", "Salam chabab cv labass 3likom kolchi mzn ntmena tkono bikhir... Saraha makrehtch kon tla9ina f dorof khra hssen mn anana ghi tandwew f watsp walakin l9adar la3eb m3ana hhh mhm ntemaw khir inchallah fl9odam ontla9aw f sa3et lkhir on3ewdo ga3 hadchi lli daz...  Ohebokom fe lah . ~Imane", "Salam asdi9a2i, lohim had l ayam l huzn mntacher ft9riban ga3 les groupes walakin bghirkum t3rfu bli wakha ga3 mnrj3ush 3ala9tna maghadash thlay rr fl ensias 7int 7na ktjm3na committee 3la 9dha w mazal nkhrju w nfr7um3a b3diatna. ~Yoyo", "Guys I am glad to be a part of the family w tmniit kon ghir nrj3o bach n tchawfo w li mkan3rfoch face n3rfo w had les discussion li kandiro hna ndirohom f agora wla foq l gazo but wakha hakak u r soo precious 3ndy kamliinn w nshaeAllah qriibbb ntlaqaw f ensias wla berra. ~Khadija", "I have always been dazzled and fascinated by the synergy between ensias it club's members. I was thrilled when I was granted the opportunity to join this beautiful family. I immediately felt a sense of belonging. Ensias it club's family is like a heavenly choir,where each member hums his own and unique melody, that soathes the worries and breeds a surge of hope. Some ineffable reason that defies my understanding made me feel comfortable with these beautiful people rapidly. I am grateful I  became a part of such a unique family, I hope our bond never shatters.", "Nass dyal family mn bin ahssan nass lli erft had l eam nass dryfin ghzaliin  wl9lb lkbir Lhaja lli zwina f à distance hiya dkhlt lgroupe wt3rft elikom", "The second time that I felt belonging to a family was in the IT Family where I met super awesome people that I wish our bonds stay stronger after graduation. The few days that we spent together at the excursion are never-to-be-forgotten, and i wish i could extract those memories and re-experience all those moments ( like harry potter xD ) full of joy and excitement. Also, it goes without saying that a great deal of love that I have for Ensias is thanks to the IT family.", "", "Family, Had smia li f had datha l nas l3adine makat3ni walo mn rir klma katgal w sf, l bo3d dyalha w lma3na lha9i9i dyalha mam3rofch. Hta ana knt mn nas l3adine li makanch 3arf chno hya w chno dalala dyalha hta jat l’ensias dik sa3a 9dit nhot had lklma f blastha w 3rft bli aham haja hya l family. Wst l IT had llama l3bat dawr w khlatni n3raf chhal nas li 9rab lik mohimin w chhal momkin y3awnok bla mathas w chhal kaywliw y3niw lik bla maths lidalik tsmaw Family. Ay wahd mn had nas 3ndo makana b nisba lik li s3iiiib tkhla 3liha w kaywli raghma ga3 dorof w raghma ga3 so3obat hadik l family hya l malja2 dyalk. Lidalk n9d ngol daba b kol ti9a family hya ana w ana howa l family w ga3 li fiha mn aham nas lia w mn aham nas li kanchof bihom tfadit kolchi f hyati. Chokran lihom kamline w chokran hitch kano m3aya ", "In family life, love is the oil that eases friction, the cement that binds closer together, and the music that brings harmony. When I was a first-year student, I was afraid of joining the ENSIAS Clubs, but since I chose ENSIAS, than IT club seems to be the perfect choice. I had the pleasure to join the committee. Oh! Sorry, *THE FAMILY and I had more fun by feeling and living the best moments the best memories despite the sanitary situation. From a member to vice-president and responsible for media, I learned a lot from my dear piloting team, and from my members. Dear family, other things may change us, but we start and end with this wonderful family. Love u all", "گروب فاميلي أكثر من گروب عادي ، گروب كيجمع بنات و ولاد زوينين وبعقليات مختلفة ، الهدف ديالو هو نشر الحب ولا شيء غير الحب  الگروب لي تقدر دوي فيه وتعبر كيفما بغيتي بكل ارياحية الگروب لي تلقى فيه لي يسمع ليك ويعاونك و يرشدك  الگروب لي فيه الزهو و النشاط و الكثييير من التفاهةههههههه  گروب فاميلي فكرة ، والفكرة لا تموت", "Family houma wahd nas li t3lmt mnhom bzaf. Maybe des fois kitraw des malentendus walakin l'ikhtilaf haja 3adiya, maymknch nkono kamlin mtafqin 3la haja whda, w l'ikhtilaf ma3mro kan khayb par contre kikhlik t3rf nas lakhrin kifach kichofo les choses w ki3lmk mat7kmch 3la nas. Family kant wahd lblasa li knt kanchuf fiha rasi mumkin n3ber without being juged, wahd lblasa li nqdr nkoun contre ach katgul wla ngulik ma3jbnich hdchi li kadir walakin hdchi may2atrch 3la les relations personnelles li binatna, mais malheureusement lqit bli kayn li machi capable yfre9 had 2 hajat. Bref, le message li j'aimerai bien partager m3akom howa bseh nit t3lmt hajat mnkom m3a ga3 had les expériences li dzna mnhom soit khaybin wla zwinin, w bnit some memories m3akom li I believe anahu ghanbqa 3aqla 3lihom wakha tfrqna dnya. And I hope you guys can always be happy."];
function MessageBox(ccc) {
	this.x = 0;
	this.y = 0;
	this.tiktak = 0;
	this.displayMessage = true;
	this.displayBox = true;
	this.bclr = ccc;
	
	this.show = function() {
		if (this.displayMessage) {
			if (this.x < 500) {
				this.update(1);
				fill(this.bclr);
				//heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeere
				stroke(255, 0, 200);
				strokeWeight(2);
				rect(width/2, height/2, this.x, this.y, 20);
				push()
				rectMode(CORNER);
				fill(this.bclr);
				//heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeere
				stroke(255, 0, 200);
				strokeWeight(2);
				rect(width/2 - this.x/2, height/2 + this.y/2 + 10, this.x, 7, 20);
				pop()
			}
			else if (this.tiktak < this.x) {
				fill(this.bclr);
				//heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeere
				stroke(255, 0, 200);
				strokeWeight(2);
				rect(width/2, height/2, this.x, this.y, 20);
				push()
				rectMode(CORNER);
				//heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeere
				stroke(255, 0, 0);
				strokeWeight(1);
				fill(255, 0, 0);
				textSize(size/1.5);
                textFont(fon);
				text(messages[msg], width/2 - this.x/2 + 5, height/2 - this.y/2 + 15, this.x, this.y)
				fill(this.bclr);
				stroke(255, 0, 200);
				strokeWeight(1);
				rect(width/2 - this.x/2, height/2 + this.y/2 + 10, this.x - this.tiktak, 7, 20);
				this.tiktak += 3;
				pop()
			}
			else {
				this.displayMessage = false;
			}
		}
		else {
			this.update(-1);
			//heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeere
			stroke(255);
			strokeWeight(1);
            fill(this.bclr);
			//fill(red(this.bclr), green(this.bclr), blue(this.bclr), map(this.x, 0, width + 500, 255, 0));
			rect(width/2, height/2, this.x, this.y, 20);
			if (this.x > width + 500) {
				this.reset();
			}
		}
	};
			
	this.update = function(a) {
		if (a == 1) {
			this.x += 20;
			this.y += 10;
		}
		if (a == -1) {
			this.x += 200;
			this.y += 100;
		}
	};
		
	this.reset = function() {
		this.x = 0;
		this.y = 0;
		this.tiktak = 0;
		this.displayMessage = true;
		this.displayBox = true;
		msg = -1;
	};	
}

function mouseClicked() {
	let clr = get(mouseX, mouseY);
	if (msg == -1) {
		for (let i = 0; i < numberOfMessages; i++) {
			if (red(clr) == red(clrs[i]) && green(clr) == green(clrs[i]) && blue(clr) == blue(clrs[i])) {
				msg = i;
			}
		}
	}
}