void Game_options(){

apply_surface(0,0,menubg_sprite,screen,NULL);

int y=435;

if(cursorx>=screenx-(int)buttonxpos[5] && cursory>=y && cursory<=y+31){
	if(mousestate[SDL_BUTTON_LEFT]==2)gamestate=0;
	buttonxpos[5]*=0.9;buttonxpos[5]+=200*0.1;}else{
	buttonxpos[5]*=0.9;buttonxpos[5]+=175*0.1;
}apply_surface(screenx-(int)buttonxpos[5],y,menubuttonback_sprite,screen,NULL);

y=100;

Game_spritetextsmall(20,y,(char*)"Camera rotation");y+=20;
if(camrotation){
	if(cursorx>=screenx/2-50 && cursorx<=screenx/2+50 && cursory>=y && cursory<=y+30)
		if(mousestate[SDL_BUTTON_LEFT]==2)camrotation=0;
	apply_surface(screenx/2-50,y,menubuttonon_sprite,screen,NULL);
}else{
	if(cursorx>=screenx/2-50 && cursorx<=screenx/2+50 && cursory>=y && cursory<=y+30)
		if(mousestate[SDL_BUTTON_LEFT]==2)camrotation=1;
	apply_surface(screenx/2-50,y,menubuttonoff_sprite,screen,NULL);
}y+=50;

Game_spritetextsmall(20,y,(char*)"Camera zoom");y+=20;
if(camzoom){
	if(cursorx>=screenx/2-50 && cursorx<=screenx/2+50 && cursory>=y && cursory<=y+30)
		if(mousestate[SDL_BUTTON_LEFT]==2)camzoom=0;
	apply_surface(screenx/2-50,y,menubuttonon_sprite,screen,NULL);
}else{
	if(cursorx>=screenx/2-50 && cursorx<=screenx/2+50 && cursory>=y && cursory<=y+30)
		if(mousestate[SDL_BUTTON_LEFT]==2)camzoom=1;
	apply_surface(screenx/2-50,y,menubuttonoff_sprite,screen,NULL);
}y+=50;

Game_spritetextsmall(20,y,(char*)"Camera motion blur");y+=20;
if(camblur){
	if(cursorx>=screenx/2-50 && cursorx<=screenx/2+50 && cursory>=y && cursory<=y+30)
		if(mousestate[SDL_BUTTON_LEFT]==2)camblur=0;
	apply_surface(screenx/2-50,y,menubuttonon_sprite,screen,NULL);
}else{
	if(cursorx>=screenx/2-50 && cursorx<=screenx/2+50 && cursory>=y && cursory<=y+30)
		if(mousestate[SDL_BUTTON_LEFT]==2)camblur=1;
	apply_surface(screenx/2-50,y,menubuttonoff_sprite,screen,NULL);
}y+=50;

Game_spritetextsmall(20,y,(char*)"World motion blur");y+=20;
if(worldblur){
	if(cursorx>=screenx/2-50 && cursorx<=screenx/2+50 && cursory>=y && cursory<=y+30)
		if(mousestate[SDL_BUTTON_LEFT]==2)worldblur=0;
	apply_surface(screenx/2-50,y,menubuttonon_sprite,screen,NULL);
}else{
	if(cursorx>=screenx/2-50 && cursorx<=screenx/2+50 && cursory>=y && cursory<=y+30)
		if(mousestate[SDL_BUTTON_LEFT]==2)worldblur=1;
	apply_surface(screenx/2-50,y,menubuttonoff_sprite,screen,NULL);
}y+=50;

Game_spritetextsmall(20,y,(char*)"Screen Overlay");y+=20;
if(screenoverlay){
	if(cursorx>=screenx/2-50 && cursorx<=screenx/2+50 && cursory>=y && cursory<=y+30)
		if(mousestate[SDL_BUTTON_LEFT]==2)screenoverlay=0;
	apply_surface(screenx/2-50,y,menubuttonon_sprite,screen,NULL);
}else{
	if(cursorx>=screenx/2-50 && cursorx<=screenx/2+50 && cursory>=y && cursory<=y+30)
		if(mousestate[SDL_BUTTON_LEFT]==2)screenoverlay=1;
	apply_surface(screenx/2-50,y,menubuttonoff_sprite,screen,NULL);
}y+=50;

}