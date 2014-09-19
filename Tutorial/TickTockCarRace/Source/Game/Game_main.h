int gamestate=0;

#include "Game_classes.h"
#include "Game_rotoscale.h"
#include "Game_text.h"
#include "Game_times.h"
#include "Game_setup.h"
#include "Game_loadlevel.h"
#include "Game_savelevel.h"
#include "Game_digintowalls.h"
#include "Game_hitmap.h"
#include "Game_menu.h"
#include "Game_options.h"
#include "Game_howto.h"
#include "Game_credits.h"
#include "Game_play.h"
#include "Game_draw.h"

void Game_run(){

if(gamestate==0){
	Game_menu();
}else if(gamestate==1){
	Game_loadlevel("map.dat");
	gamestate=2;
}else if(gamestate==2){
	Game_play();
	Game_draw();
}else if(gamestate==3){
	Game_options();
}else if(gamestate==4){
	Game_howto();
}else if(gamestate==5){
	Game_credits();
}

Game_drawtimes();

if(screenoverlay)apply_surface(0,0,screenborder_sprite,screen,NULL);
if(keystate[SDLK_ESCAPE])gamestate=0;

}