void Game_howto(){

apply_surface(0,0,menubg_sprite,screen,NULL);

int y=435;

if(cursorx>=screenx-(int)buttonxpos[5] && cursory>=y && cursory<=y+31){
	if(mousestate[SDL_BUTTON_LEFT]==2)gamestate=0;
	buttonxpos[5]*=0.9;buttonxpos[5]+=200*0.1;}else{
	buttonxpos[5]*=0.9;buttonxpos[5]+=175*0.1;
}apply_surface(screenx-(int)buttonxpos[5],y,menubuttonback_sprite,screen,NULL);

y=100;

Game_spritetextsmall(20,y,(char*)"The goal of the game is to complete three laps");y+=20;
Game_spritetextsmall(20,y,(char*)"around the city in as little time as you can.");y+=20;
Game_spritetextsmall(20,y,(char*)"To do this just follow the white arrow from each");y+=20;
Game_spritetextsmall(20,y,(char*)"checkpoint to the next.");y+=20;
y+=10;
Game_spritetextsmall(20,y,(char*)"Use the W or UP key to accelerate.");y+=20;
Game_spritetextsmall(20,y,(char*)"Use the S or DOWN key to go in reverse.");y+=20;
Game_spritetextsmall(20,y,(char*)"Use the A or LEFT key to turn left.");y+=20;
Game_spritetextsmall(20,y,(char*)"Use the D or RIGHT key to turn right.");y+=20;
Game_spritetextsmall(20,y,(char*)"Use the SPACE key to use nitro.");y+=20;
y+=10;
Game_spritetextsmall(20,y,(char*)"Using nitro will speed you up but you have a");y+=20;
Game_spritetextsmall(20,y,(char*)"limited supply of it. The bar at the bottom");y+=20;
Game_spritetextsmall(20,y,(char*)"of the screen shows how much nitro you have");y+=20;
Game_spritetextsmall(20,y,(char*)"left. When using nitro you  can smash");y+=20;
Game_spritetextsmall(20,y,(char*)"through walls.");y+=20;

}