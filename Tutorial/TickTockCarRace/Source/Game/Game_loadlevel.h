void Game_loadlevel(char* filename){

while(n_checkpoints)deletecheckpoint(0);
while(n_walls)deletewall(0);
while(n_blocks)deleteblock(0);

mapsizex=100;
mapsizey=100;
map = new int[mapsizex*mapsizey];
for(int a=0;a<mapsizex*mapsizey;a++)map[a]=26;

carx=mapsizex*50/2;
cary=mapsizey*50/2;
cara=0;
carmovex=0;
carmovey=0;
carmovea=0;
nitrosupply=100;

char* temptext=new char[mapsizex];
ifstream indata;
indata.open(filename);
int a=0;

for(int y=0; y<mapsizey; y++){
	sprintf(temptext,"%s","");
	indata >> temptext;indata.eof();
	for(int x=0; x<mapsizex; x++){
		map[a]=(int)(temptext[x]-'A');
		a++;
	}
}

indata.close();
delete temptext;

for(int y=0; y<mapsizey; y++)for(int x=0; x<mapsizex; x++){
	int tilenum=map[x+y*mapsizex];
	if((tilenum>7 && tilenum<25)||tilenum==26){
		makeblock(x*50,y*50,50,50);}
	if(tilenum==28){
		makewall(x*50+2,y*50,4,50);}
	if(tilenum==29){
		makewall(x*50,y*50+2,50,4);}
	if(tilenum==30){
		makewall(x*50+44,y*50,4,50);}
	if(tilenum==31){
		makewall(x*50,y*50+44,50,4);}
	if(tilenum==32){
		makewall(x*50+2,y*50+2,4,50-2);
		makewall(x*50+6,y*50+2,50-6,4);}
	if(tilenum==33){
		makewall(x*50,y*50+2,50-2,4);
		makewall(x*50+50-6,y*50+6,4,50-6);}
	if(tilenum==34){
		makewall(x*50+44,y*50,4,50-2);
		makewall(x*50,y*50+50-6,50-6,4);}
	if(tilenum==35){
		makewall(x*50+2,y*50+44,50-2,4);
		makewall(x*50+2,y*50,4,50-6);}
	if(tilenum==36){
		makewall(x*50+2,y*50,4,6);
		makewall(x*50,y*50+2,6,4);}
	if(tilenum==37){
		makewall(x*50+50-6,y*50,4,6);
		makewall(x*50+50-6,y*50+2,6,4);}
	if(tilenum==38){
		makewall(x*50+50-6,y*50+50-6,4,6);
		makewall(x*50+50-6,y*50+50-6,6,4);}
	if(tilenum==39){
		makewall(x*50+2,y*50+50-6,4,6);
		makewall(x*50,y*50+50-6,6,4);}
	if(tilenum==40){
		makewall(x*50+2,y*50,4,4);
		makewall(x*50+2,y*50+50-4,4,4);}
	if(tilenum==41){
		makewall(x*50,y*50+2,4,4);
		makewall(x*50+50-4,y*50+2,4,4);}
	if(tilenum==42){
		makewall(x*50+50-6,y*50,4,4);
		makewall(x*50+50-6,y*50+50-4,4,4);}
	if(tilenum==43){
		makewall(x*50,y*50+50-6,4,4);
		makewall(x*50+50-4,y*50+50-6,4,4);}
}

// lap 1
makecheckpoint(1615,2117);
makecheckpoint(1647,1168);
makecheckpoint(2660,1136);
makecheckpoint(3776,1598);
makecheckpoint(2968,3847);
makecheckpoint(1537,3818);
// lap 2
makecheckpoint(1615,2117);
makecheckpoint(1647,1168);
makecheckpoint(2660,1136);
makecheckpoint(3776,1598);
makecheckpoint(2968,3847);
makecheckpoint(1537,3818);
// lap 3
makecheckpoint(1615,2117);
makecheckpoint(1647,1168);
makecheckpoint(2660,1136);
makecheckpoint(3776,1598);
makecheckpoint(2968,3847);
makecheckpoint(1537,3818);

carx=1563.2;
cary=3675.3;
cara=0.0;

camx=carx;
camy=cary;
camz=1;
cama=cara;

playtime=0;

}
