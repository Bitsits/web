int cursorx;
int cursory;

const int keycount=500;
int keystate[keycount];
const int mousecount=10;
int mousestate[mousecount];

void updatecontrolinput(){
	SDL_Event event;

	for(int a=0;a<keycount;a++)if(keystate[a]){keystate[a]=1;}else{keystate[a]=0;}
	while(SDL_PeepEvents(&event,1,SDL_GETEVENT,SDL_EVENTMASK(SDL_KEYDOWN)))
		for(int a=0;a<keycount;a++)if(event.key.keysym.sym==a)keystate[a]=2;
	while(SDL_PeepEvents(&event,1,SDL_GETEVENT,SDL_EVENTMASK(SDL_KEYUP)))
		for(int a=0;a<keycount;a++)if(event.key.keysym.sym==a)keystate[a]=0;

	for(int a=0;a<mousecount;a++)if(mousestate[a]){mousestate[a]=1;}else{mousestate[a]=0;}
	while(SDL_PeepEvents(&event,1,SDL_GETEVENT,SDL_EVENTMASK(SDL_MOUSEBUTTONDOWN)))
		for(int a=0;a<mousecount;a++)if(event.button.button==a)mousestate[a]=2;
	while(SDL_PeepEvents(&event,1,SDL_GETEVENT,SDL_EVENTMASK(SDL_MOUSEBUTTONUP)))
		for(int a=0;a<mousecount;a++)if(event.button.button==a)mousestate[a]=0;

	Uint8 mousestate=SDL_GetMouseState(&cursorx,&cursory);

}
