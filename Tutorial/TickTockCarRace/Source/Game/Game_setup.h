SDL_Surface *screenborder_sprite = NULL;

SDL_Surface *groundtiles_sprite = NULL;SDL_Rect groundtiles_frame[44];
SDL_Surface *car_sprite = NULL;SDL_Rect car_frame[180];
SDL_Surface *tiretrack_sprite = NULL;
SDL_Surface *checkpoint_sprite = NULL;

SDL_Surface *arrow_sprite = NULL;SDL_Rect arrow_frame[180];

SDL_Surface *menubg_sprite = NULL;
SDL_Surface *menutitle_sprite = NULL;
SDL_Surface *menubutton1_sprite = NULL;
SDL_Surface *menubutton2_sprite = NULL;
SDL_Surface *menubutton3_sprite = NULL;
SDL_Surface *menubutton4_sprite = NULL;
SDL_Surface *menubutton5_sprite = NULL;
SDL_Surface *menubuttonback_sprite = NULL;
SDL_Surface *menubuttonon_sprite = NULL;
SDL_Surface *menubuttonoff_sprite = NULL;

SDL_Surface *cam = NULL;

SDL_Surface *motionblurcam = NULL;
SDL_Surface *motionblurscreen = NULL;

SDL_Surface *groundlayer = NULL;

int* map;
int mapsizex;
int mapsizey;

bool camrotation=1;
bool camzoom=1;
bool camblur=0;
bool worldblur=0;
bool screenoverlay=1;

double camx;
double camy;
double camz;
double cama;

double carx;
double cary;
double cara;
double carmovex;
double carmovey;
double carmovea;
double nitrosupply;

Mix_Music *music = NULL;

void Game_init(){

game_setuptimes();
Game_setuptext();

SDL_Surface *tempsurface;

screenborder_sprite = IMG_LoadOptimizeAlpha("Media/screenborder.png");

groundtiles_sprite = IMG_LoadOptimize("Media/groundtiles.png");
for(int y=0; y<11; y++)for(int x=0; x<4; x++){
	groundtiles_frame[x+y*4].x=x*52+1;
	groundtiles_frame[x+y*4].y=y*52+1;
	groundtiles_frame[x+y*4].w=50;
	groundtiles_frame[x+y*4].h=50;
}

tempsurface = IMG_LoadOptimizeAlpha("Media/car.png");
car_sprite = SDL_CreateRGBSurface(tempsurface->flags,
								  110,110*180,
								  tempsurface->format->BitsPerPixel,
								  tempsurface->format->Rmask,
								  tempsurface->format->Gmask,
								  tempsurface->format->Bmask,
								  tempsurface->format->Amask);
for(int a=0;a<180;a++)
	Game_rotoscale(tempsurface,car_sprite,(double)a*0.0174532925*2,1,0,110*a,110,110);
SDL_FreeSurface(tempsurface);
for(int y=0; y<180; y++){
	car_frame[y].x=0;
	car_frame[y].y=y*110;
	car_frame[y].w=110;
	car_frame[y].h=110;
}

tiretrack_sprite = IMG_LoadOptimize("Media/tiretrack.png");
checkpoint_sprite = IMG_LoadOptimizeAlpha("Media/checkpoint.png");

tempsurface = IMG_LoadOptimizeAlpha("Media/arrow.png");
arrow_sprite = SDL_CreateRGBSurface(tempsurface->flags,
								  90,90*180,
								  tempsurface->format->BitsPerPixel,
								  tempsurface->format->Rmask,
								  tempsurface->format->Gmask,
								  tempsurface->format->Bmask,
								  tempsurface->format->Amask);
for(int a=0;a<180;a++)
	Game_rotoscale(tempsurface,arrow_sprite,(double)a*0.0174532925*2,1,0,90*a,90,90);
SDL_FreeSurface(tempsurface);
for(int y=0; y<180; y++){
	arrow_frame[y].x=0;
	arrow_frame[y].y=y*90;
	arrow_frame[y].w=90;
	arrow_frame[y].h=90;
}

menubg_sprite = IMG_LoadOptimize("Media/menubg.png");
menutitle_sprite = IMG_LoadOptimizeAlpha("Media/menutitle.png");
menubutton1_sprite = IMG_LoadOptimize("Media/menubutton1.png");
menubutton2_sprite = IMG_LoadOptimize("Media/menubutton2.png");
menubutton3_sprite = IMG_LoadOptimize("Media/menubutton3.png");
menubutton4_sprite = IMG_LoadOptimize("Media/menubutton4.png");
menubutton5_sprite = IMG_LoadOptimize("Media/menubutton5.png");
menubuttonback_sprite = IMG_LoadOptimize("Media/menubuttonback.png");
menubuttonon_sprite = IMG_LoadOptimize("Media/menubuttonon.png");
menubuttonoff_sprite = IMG_LoadOptimize("Media/menubuttonoff.png");

cam = SDL_CreateRGBSurface(screen->flags,
						   800,800,
						   screen->format->BitsPerPixel,
						   screen->format->Rmask,
						   screen->format->Gmask,
						   screen->format->Bmask,
						   screen->format->Amask);

motionblurcam = SDL_DisplayFormat(cam);
motionblurscreen = SDL_DisplayFormat(screen);

groundlayer = SDL_CreateRGBSurface(screen->flags,
						   900,900,
						   screen->format->BitsPerPixel,
						   screen->format->Rmask,
						   screen->format->Gmask,
						   screen->format->Bmask,
						   screen->format->Amask);

Mix_OpenAudio(0,0,0,0);
music = Mix_LoadMUS("Media/Tarmac.ogg");
Mix_VolumeMusic(100);
Mix_PlayMusic(music,-1);

}