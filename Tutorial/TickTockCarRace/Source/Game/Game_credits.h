void Game_credits(){

apply_surface(0,0,menubg_sprite,screen,NULL);

int y=435;

if(cursorx>=screenx-(int)buttonxpos[5] && cursory>=y && cursory<=y+31){
	if(mousestate[SDL_BUTTON_LEFT]==2)gamestate=0;
	buttonxpos[5]*=0.9;buttonxpos[5]+=200*0.1;}else{
	buttonxpos[5]*=0.9;buttonxpos[5]+=175*0.1;
}apply_surface(screenx-(int)buttonxpos[5],y,menubuttonback_sprite,screen,NULL);

y=100;

Game_spritetextsmall(20,y,(char*)"Design, programing and graphics");y+=20;
Game_spritetextsmall(20,y,(char*)"by ThatOtherPerson.");y+=20;
Game_spritetextsmall(20,y,(char*)"thatotherdev.wordpress.com");y+=20;
y+=10;
Game_spritetextsmall(20,y,(char*)"Tarmac background music by et_");y+=20;
Game_spritetextsmall(20,y,(char*)"et-official.com");y+=20;

}