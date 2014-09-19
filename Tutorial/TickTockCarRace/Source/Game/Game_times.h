int playtime;
int besttime;

int runtime;
int oldruntime;
int timehaspassed;
double framerate;
double gamespeed;

void game_setuptimes(){
	playtime=0;
	besttime=0;
	ifstream indata;
	indata.open("besttime.dat");
	indata >> besttime;
	indata.close();
}

void game_endtime(){
	if(besttime>playtime || besttime==0){
		besttime=playtime;
		ofstream outdata;
		outdata.open("besttime.dat");
		outdata << besttime << endl;
		outdata.close();
	}
}

void Game_drawtimes(){

oldruntime=runtime;
runtime=SDL_GetTicks();
timehaspassed=runtime-oldruntime;
framerate=1000/(double)timehaspassed;
gamespeed=60/framerate;

int hou,min,sec,mil;
char temptext[100];

hou=(int)(floor(floor(floor((double)besttime/1000)/60)/60));
min=(int)(floor(floor((double)besttime/1000)/60)-hou*60);
sec=(int)(floor((double)besttime/1000)-min*60);
mil=(int)(besttime-hou*60*60*1000-min*60*1000-sec*1000);

sprintf(temptext,"%s","");
if(hou==0){
	sprintf(temptext,"%s%s",temptext,"00");
}else if(hou<10){
	sprintf(temptext,"%s%s%d",temptext,"0",hou);
}else{
	sprintf(temptext,"%s%s%d",temptext,"",hou);
}
if(min==0){
	sprintf(temptext,"%s%s",temptext,":00");
}else if(min<10){
	sprintf(temptext,"%s%s%d",temptext,":0",min);
}else{
	sprintf(temptext,"%s%s%d",temptext,":",min);
}
if(sec==0){
	sprintf(temptext,"%s%s",temptext,":00");
}else if(sec<10){
	sprintf(temptext,"%s%s%d",temptext,":0",sec);
}else{
	sprintf(temptext,"%s%s%d",temptext,":",sec);
}
if(mil==0){
	sprintf(temptext,"%s%s",temptext,":000");
}else if(mil<10){
	sprintf(temptext,"%s%s%d",temptext,":00",mil);
}else if(mil<100){
	sprintf(temptext,"%s%s%d",temptext,":0",mil);
}else{
	sprintf(temptext,"%s%s%d",temptext,":",mil);
}

Game_spritetext(10,20,(char*)"Best Time");
Game_spritetext(205,20,temptext);

hou=(int)(floor(floor(floor((double)playtime/1000)/60)/60));
min=(int)(floor(floor((double)playtime/1000)/60)-hou*60);
sec=(int)(floor((double)playtime/1000)-min*60);
mil=(int)(playtime-hou*60*60*1000-min*60*1000-sec*1000);

sprintf(temptext,"%s","");
if(hou==0){
	sprintf(temptext,"%s%s",temptext,"00");
}else if(hou<10){
	sprintf(temptext,"%s%s%d",temptext,"0",hou);
}else{
	sprintf(temptext,"%s%s%d",temptext,"",hou);
}
if(min==0){
	sprintf(temptext,"%s%s",temptext,":00");
}else if(min<10){
	sprintf(temptext,"%s%s%d",temptext,":0",min);
}else{
	sprintf(temptext,"%s%s%d",temptext,":",min);
}
if(sec==0){
	sprintf(temptext,"%s%s",temptext,":00");
}else if(sec<10){
	sprintf(temptext,"%s%s%d",temptext,":0",sec);
}else{
	sprintf(temptext,"%s%s%d",temptext,":",sec);
}
if(mil==0){
	sprintf(temptext,"%s%s",temptext,":000");
}else if(mil<10){
	sprintf(temptext,"%s%s%d",temptext,":00",mil);
}else if(mil<100){
	sprintf(temptext,"%s%s%d",temptext,":0",mil);
}else{
	sprintf(temptext,"%s%s%d",temptext,":",mil);
}

Game_spritetext(10,50,(char*)"Current Time");
Game_spritetext(205,50,temptext);

/*
sprintf(temptext,"%s%f","framerate ",framerate);
Game_spritetext(200,100,temptext);
sprintf(temptext,"%s%f","gamespeed ",gamespeed);
Game_spritetext(200,150,temptext);
*/

}
