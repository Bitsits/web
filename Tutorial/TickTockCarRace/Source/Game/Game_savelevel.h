void Game_savelevel(char* filename){

ofstream outdata;
outdata.open(filename);
int a=0;

for(int y=0; y<mapsizey; y++){
	for(int x=0; x<mapsizex; x++){
		outdata << (char)(map[a]+'A');
		a++;
	}
	outdata << endl;
}

outdata.close();

}
