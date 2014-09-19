bool done = false;
#include "Generic\generic.h"
#include "Game\Game_main.h"

int main(int argc, char* argv[]){
	init();
	Game_init();
	while(!done){
		SDL_PumpEvents();
		updatecontrolinput();
		Game_run();
		SDL_Flip(screen);
		SDL_Event event;
		while(SDL_PeepEvents(&event,1,SDL_GETEVENT,SDL_ALLEVENTS)>0)
			if(event.type==SDL_QUIT)done=1;
	}
	return 0;
}
