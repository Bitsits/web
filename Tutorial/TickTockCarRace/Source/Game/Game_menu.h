double titlexpos=0;
double buttonxpos[]={0,0,0,0,0,0};

void Game_menu(){

apply_surface(0,0,menubg_sprite,screen,NULL);

titlexpos*=0.95;titlexpos+=257*0.05;
apply_surface((int)titlexpos-257,90,menutitle_sprite,screen,NULL);

int y=275;

if(cursorx<=buttonxpos[0] && cursory>=y && cursory<=y+31){
	if(mousestate[SDL_BUTTON_LEFT]==2)gamestate=1;
	buttonxpos[0]*=0.9;buttonxpos[0]+=200*0.1;}else{
	buttonxpos[0]*=0.9;buttonxpos[0]+=175*0.1;
}apply_surface((int)buttonxpos[0]-200,y,menubutton1_sprite,screen,NULL);y+=40;

if(cursorx<=buttonxpos[1] && cursory>=y && cursory<=y+31){
	if(mousestate[SDL_BUTTON_LEFT]==2)gamestate=3;
	buttonxpos[1]*=0.9;buttonxpos[1]+=200*0.1;}else{
	buttonxpos[1]*=0.9;buttonxpos[1]+=175*0.1;
}apply_surface((int)buttonxpos[1]-200,y,menubutton2_sprite,screen,NULL);y+=40;

if(cursorx<=buttonxpos[2] && cursory>=y && cursory<=y+31){
	if(mousestate[SDL_BUTTON_LEFT]==2)gamestate=4;
	buttonxpos[2]*=0.9;buttonxpos[2]+=200*0.1;}else{
	buttonxpos[2]*=0.9;buttonxpos[2]+=175*0.1;
}apply_surface((int)buttonxpos[2]-200,y,menubutton3_sprite,screen,NULL);y+=40;

if(cursorx<=buttonxpos[3] && cursory>=y && cursory<=y+31){
	if(mousestate[SDL_BUTTON_LEFT]==2)gamestate=5;
	buttonxpos[3]*=0.9;buttonxpos[3]+=200*0.1;}else{
	buttonxpos[3]*=0.9;buttonxpos[3]+=175*0.1;
}apply_surface((int)buttonxpos[3]-200,y,menubutton4_sprite,screen,NULL);y+=40;

if(cursorx<=buttonxpos[4] && cursory>=y && cursory<=y+31){
	if(mousestate[SDL_BUTTON_LEFT]==2)done=1;
	buttonxpos[4]*=0.9;buttonxpos[4]+=200*0.1;}else{
	buttonxpos[4]*=0.9;buttonxpos[4]+=175*0.1;
}apply_surface((int)buttonxpos[4]-200,y,menubutton5_sprite,screen,NULL);y+=40;

}