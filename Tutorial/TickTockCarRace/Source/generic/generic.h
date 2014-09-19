#include <windows.h>
#include <SDL.h>
#include <SDL_image.h>
#include <SDL_mixer.h>

#include <stdlib.h>
#include <stdio.h>
#include <time.h>
#include <string>
#include <math.h>

#include <iostream>
using std::cerr;
using std::cout;
using std::endl;
#include <fstream>
using std::ofstream;
using std::ifstream;
#include <cstdlib>

#include "simplemath.h"
#include "loadanddraw.h"
#include "getputpixel.h"
#include "input.h"

SDL_Surface *screen = NULL;

const int screenx=640;
const int screeny=480;
const int screenb=0;

void init(){
	srand((int)time(NULL));
	SDL_Init(SDL_INIT_EVERYTHING);
	SDL_ShowCursor(SDL_ENABLE);
	screen = SDL_SetVideoMode(screenx,screeny,screenb,SDL_DOUBLEBUF);
	SDL_WM_SetCaption( "Tick Tock Car Race", NULL );
}
