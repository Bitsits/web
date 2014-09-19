int oldcamxint=0;
int oldcamyint=0;
int groundlayerx=0;
int groundlayery=0;

void Game_draw(){

double posx,posy;

//scroll the ground
posx=floor(camx/50)*50-groundlayer->w/2;
posy=floor(camy/50)*50-groundlayer->h/2;
if((groundlayerx!=posx)||(groundlayery!=posy)){
	int xdiff=groundlayerx-(int)posx;
	int ydiff=groundlayery-(int)posy;
	apply_surface(xdiff,ydiff,groundlayer,groundlayer,NULL);
	groundlayerx=(int)posx;
	groundlayery=(int)posy;
	for(int y=0;y<mapsizey;y++)for(int x=0;x<mapsizex;x++){
		if((ydiff>0 && y<(groundlayery+ydiff)/50)
		|| (ydiff<0 && y>(groundlayery+groundlayer->h+ydiff)/50-1)
		|| (xdiff>0 && x<(groundlayerx+xdiff)/50)
		|| (xdiff<0 && x>(groundlayerx+groundlayer->w+xdiff)/50-1))
		apply_surface(
			x*50-groundlayerx,
			y*50-groundlayery,
			groundtiles_sprite,
			groundlayer,
			&groundtiles_frame[map[x+y*mapsizex]]);
	}
}

//draw tire tracks
SDL_SetAlpha(tiretrack_sprite,SDL_SRCALPHA,(Uint8)(120*abs(carmovea)));
for(int a=0;a<25;a++){
	posx=carx-carmovex/25*a*gamespeed+cos(cara)*15+cos(cara-90*0.0174532925)*35;
	posy=cary-carmovey/25*a*gamespeed+sin(cara)*15+sin(cara-90*0.0174532925)*35;
	apply_surface((int)posx-groundlayerx-7,(int)posy-groundlayery-7,tiretrack_sprite,groundlayer,NULL);
	posx=carx-carmovex/25*a*gamespeed+cos(cara)*15-cos(cara-90*0.0174532925)*35;
	posy=cary-carmovey/25*a*gamespeed+sin(cara)*15-sin(cara-90*0.0174532925)*35;
	apply_surface((int)posx-groundlayerx-7,(int)posy-groundlayery-7,tiretrack_sprite,groundlayer,NULL);
	posx=carx-carmovex/25*a*gamespeed-cos(cara)*15+cos(cara-90*0.0174532925)*35;
	posy=cary-carmovey/25*a*gamespeed-sin(cara)*15+sin(cara-90*0.0174532925)*35;
	apply_surface((int)posx-groundlayerx-7,(int)posy-groundlayery-7,tiretrack_sprite,groundlayer,NULL);
	posx=carx-carmovex/25*a*gamespeed-cos(cara)*15-cos(cara-90*0.0174532925)*35;
	posy=cary-carmovey/25*a*gamespeed-sin(cara)*15-sin(cara-90*0.0174532925)*35;
	apply_surface((int)posx-groundlayerx-7,(int)posy-groundlayery-7,tiretrack_sprite,groundlayer,NULL);
}

//get the camera draw offset
int camxint=(int)camx-400;
int camyint=(int)camy-400;

//draw the ground
apply_surface(groundlayerx-camxint,groundlayery-camyint,groundlayer,cam,NULL);

//draw world motion blur
if(worldblur){
	SDL_SetAlpha(motionblurcam,SDL_SRCALPHA,128);
	apply_surface(oldcamxint-camxint,oldcamyint-camyint,motionblurcam,cam,NULL);
}

//draw the checkpoint
if(n_checkpoints)apply_surface(
	(int)checkpoints[0]->x-camxint-105,
	(int)checkpoints[0]->y-camyint-105,
	checkpoint_sprite,cam,NULL);

//draw the car
int frame=-(int)(cara/0.0174532925/2);
while(frame>=180)frame-=180;
while(frame<0)frame+=180;
apply_surface((int)carx-camxint-55,
			  (int)cary-camyint-55,
			  car_sprite,cam,&car_frame[frame]);

//draw the walls
SDL_Rect temprect={0,0,0,0};
for(int a=0; a<n_walls; a++){
	temprect.x=(int)walls[a]->x-1-camxint;
	temprect.y=(int)walls[a]->y-1-camyint;
	temprect.w=(int)walls[a]->w+2;
	temprect.h=(int)walls[a]->h+2;
	SDL_FillRect(cam,&temprect,SDL_MapRGB(cam->format,75,75,75));
}
for(int a=0; a<n_walls; a++){
	temprect.x=(int)walls[a]->x-camxint;
	temprect.y=(int)walls[a]->y-camyint;
	temprect.w=(int)walls[a]->w;
	temprect.h=(int)walls[a]->h;
	SDL_FillRect(cam,&temprect,SDL_MapRGB(cam->format,100,100,100));
}

//record for world motion blur
if(worldblur){
	apply_surface(0,0,cam,motionblurcam,NULL);
	oldcamxint=camxint;
	oldcamyint=camyint;
}

//draw world to screen
if(cama==0 && camz==1){
	apply_surface(320-400,240-400,cam,screen,NULL);
}else{
	double x1=	dist(0,0,400,400)	*camz	*cos(atan2(400.0,400.0)+cama);
	double y1=	dist(0,0,400,400)	*camz	*sin(atan2(400.0,400.0)+cama);
	double x2=	dist(799,0,400,400)	*camz	*cos(atan2(400.0,400.0-799)+cama);
	double y2=	dist(799,0,400,400)	*camz	*sin(atan2(400.0,400.0-799)+cama);
	double x3=	dist(0,799,400,400)	*camz	*cos(atan2(400.0-799,400.0)+cama);
	double y3=	dist(0,799,400,400)	*camz	*sin(atan2(400.0-799,400.0)+cama);
	double xdifx=(x1-x2)/800;
	double xdify=(y1-y2)/800;
	double ydifx=(x1-x3)/800;
	double ydify=(y1-y3)/800;
	double offsetx=400-320*xdifx-240*ydifx;
	double offsety=400-320*xdify-240*ydify;
	double xuse=0;
	double yuse=0;
	for(int y=0;y<480;y++){
		xuse=offsetx+y*ydifx;
		yuse=offsety+y*ydify;
		for(int x=0;x<640;x++){
			xuse+=xdifx;
			yuse+=xdify;
			if(xuse>0 && xuse<800 && yuse>0 && yuse<800){
				putpixel(screen,x,y,getpixel(cam,(int)xuse,(int)yuse));
			}
		}
	}
}

//draw the camera motionblur
if(camblur){
	SDL_SetAlpha(motionblurscreen,SDL_SRCALPHA,128);
	apply_surface(0,0,motionblurscreen,screen,NULL);
	apply_surface(0,0,screen,motionblurscreen,NULL);
}

//draw arrow pointing to checkpoint
if(n_checkpoints){
	double angle=atan2(checkpoints[0]->y-camy,checkpoints[0]->x-camx)-cama;
	double distance=dist(checkpoints[0]->x,checkpoints[0]->y,camx,camy)/camz;
	frame=-(int)(angle/0.0174532925/2);
	while(frame<0)frame+=180;
	while(frame>=180)frame-=180;
	if(distance>200){
		apply_surface(
			320+(int)(200*cos(angle))-45,
			240+(int)(200*sin(angle))-45,
			arrow_sprite,screen,&arrow_frame[frame]);
	}else{
		apply_surface(
			320+(int)(distance*cos(angle))-45,
			240+(int)(distance*sin(angle))-45,
			arrow_sprite,screen,&arrow_frame[frame]);
	}
}

//draw your nitro supply
temprect.x=(int)20-3;
temprect.y=(int)screeny-40-3;
temprect.w=(int)screenx-40+6;
temprect.h=(int)20+6;
SDL_FillRect(screen,&temprect,SDL_MapRGB(cam->format,0,0,0));
temprect.x=(int)20;
temprect.y=(int)screeny-40;
temprect.w=(int)((screenx-40)*nitrosupply*0.01);
temprect.h=(int)20;
SDL_FillRect(screen,&temprect,SDL_MapRGB(cam->format,255,255,255));

}