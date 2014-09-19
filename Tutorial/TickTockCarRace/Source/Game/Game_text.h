SDL_Surface *font_sprite = NULL;SDL_Rect font_frame[95];
SDL_Surface *fontsmall_sprite = NULL;SDL_Rect fontsmall_frame[95];

void Game_setuptext(){
	font_sprite = IMG_LoadOptimizeAlpha("Media/font.png");
	for(int y=0; y<95; y++){
		font_frame[y].x=0+1;
		font_frame[y].y=y*40+1;
		font_frame[y].w=40-2;
		font_frame[y].h=40-2;
	}
	Uint32 red=SDL_MapRGB(font_sprite->format,255,0,0);
	for(int y=0; y<95; y++)
		while(font_frame[y].w>0
		&& getpixel(font_sprite,font_frame[y].x+font_frame[y].w,font_frame[y].y)==red)
			font_frame[y].w-=1;
	fontsmall_sprite = IMG_LoadOptimizeAlpha("Media/fontsmall.png");
	for(int y=0; y<95; y++){
		fontsmall_frame[y].x=0+1;
		fontsmall_frame[y].y=y*30+1;
		fontsmall_frame[y].w=30-2;
		fontsmall_frame[y].h=30-2;
	}
	for(int y=0; y<95; y++)
		while(fontsmall_frame[y].w>0
		&& getpixel(fontsmall_sprite,fontsmall_frame[y].x+fontsmall_frame[y].w,fontsmall_frame[y].y)==red)
			fontsmall_frame[y].w-=1;
}

void Game_spritetext(int posx,int posy,char* text){
	for(int a=0;a<(signed)strlen(text);a++){
		apply_surface(posx,posy,font_sprite,screen,&font_frame[text[a]-' ']);
		posx+=font_frame[text[a]-' '].w-4;
	}
}

void Game_spritetextsmall(int posx,int posy,char* text){
	for(int a=0;a<(signed)strlen(text);a++){
		apply_surface(posx,posy,fontsmall_sprite,screen,&fontsmall_frame[text[a]-' ']);
		posx+=fontsmall_frame[text[a]-' '].w-2;
	}
}