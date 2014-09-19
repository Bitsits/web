void Game_play(){

	//update the clock by adding how much time has passed
	playtime+=timehaspassed;

	//check input
	bool up=0,down=0,left=0,right=0,nitro=0;
	if(keystate[SDLK_w]|keystate[SDLK_UP])up=1;
	if(keystate[SDLK_s]|keystate[SDLK_DOWN])down=1;
	if(keystate[SDLK_a]|keystate[SDLK_LEFT])left=1;
	if(keystate[SDLK_d]|keystate[SDLK_RIGHT])right=1;
	if(keystate[SDLK_SPACE])nitro=1;

	//can you really get a nitro boost
	if(up==0 && down==0)nitro=0;
	if(nitro){
		if(nitrosupply>0){
			nitrosupply-=0.075*gamespeed;
			if(nitrosupply<0)nitrosupply=0;
		}else{
			nitro=0;
		}
	}

	//get input speed and current move speed
	double inputspeed=up*0.6-down*0.40;
	if(nitro)inputspeed*=1.5;
	double movespeed=dist(0,0,carmovex,carmovey);

	//check your info
	double oldx=carx;
	double oldy=cary;
	double olda=cara;

	//turn
	carmovea-=carmovea*0.1*gamespeed;
	carmovea+=(right-left)*movespeed*0.00075*gamespeed;
	cara+=carmovea*gamespeed;

	//move
	carmovex-=carmovex*0.085*gamespeed;
	carmovey-=carmovey*0.085*gamespeed;
	carmovex+=inputspeed*cos(cara-90*0.0174532925)*gamespeed;
	carmovey+=inputspeed*sin(cara-90*0.0174532925)*gamespeed;
	carx+=carmovex*gamespeed;
	cary+=carmovey*gamespeed;

	//bump into stuff
	//there should really be some rotating rectangle on rectangle detection here  
	//but I've never done that before
	//and its really easy to do some nice sliding circle on rectangle collissions
	//so Im doing the lazy thing and treating the car as a grid of circles
	double ymovex=cos(cara-90*0.0174532925);
	double ymovey=sin(cara-90*0.0174532925);
	double xmovex=cos(cara-180*0.0174532925);
	double xmovey=sin(cara-180*0.0174532925);
	for(int y=0;y<8;y++){
		carx+=y*5.5*ymovex;//check up
		cary+=y*5.5*ymovey;
		for(int x=0;x<4;x++){
			carx+=x*5.5*xmovex;//check to the left
			cary+=x*5.5*xmovey;
			Game_hitmap(carx,cary,10,nitro);
			carx-=x*5.5*2*xmovex;//check to the right
			cary-=x*5.5*2*xmovey;
			Game_hitmap(carx,cary,10,nitro);
			carx+=x*5.5*xmovex;//recenter
			cary+=x*5.5*xmovey;
		}
		carx-=y*5.5*2*ymovex;//check down
		cary-=y*5.5*2*ymovey;
		for(int x=0;x<4;x++){
			carx+=x*5.5*xmovex;//check to the left
			cary+=x*5.5*xmovey;
			Game_hitmap(carx,cary,10,nitro);
			carx-=x*5.5*2*xmovex;//check to the right
			cary-=x*5.5*2*xmovey;
			Game_hitmap(carx,cary,10,nitro);
			carx+=x*5.5*xmovex;//recenter
			cary+=x*5.5*xmovey;
		}
		carx+=y*5.5*ymovex;//recenter
		cary+=y*5.5*ymovey;
	}

	//correct your speeds
	carmovex=(carx-oldx)/gamespeed;
	carmovey=(cary-oldy)/gamespeed;
	carmovea=(cara-olda)/gamespeed;

	//hit checkpoint
	if(n_checkpoints)
	if(dist(carx,cary,checkpoints[0]->x,checkpoints[0]->y)<150)
	deletecheckpoint(0);

	//where the camera should be
	double gcamx,gcamy,gcamz,gcama;
	gcamx=carx+carmovex*35;
	gcamy=cary+carmovey*35;
	gcamz=0.7+movespeed*0.03;
	if(gcamz<0.7)gcamz=0.7;
	if(gcamz>1.0)gcamz=1.0;
	gcama=cara;

	//move the camera but do it slowly to make it look smooth
	camx+=(gcamx-camx)*0.04*gamespeed;
	camy+=(gcamy-camy)*0.04*gamespeed;
	camz+=(gcamz-camz)*0.04*gamespeed;
	cama+=(gcama-cama)*0.04*gamespeed;

	//camera rotation and zoom is optional
	if(!camrotation)cama=0;
	if(!camzoom)camz=1;

	//race ends if you have hit every checkpoint
	if(n_checkpoints==0){
		game_endtime();
		gamestate=0;
	}

}