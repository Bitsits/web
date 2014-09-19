void Game_hitmap(double &posx,double &posy,double radius,bool smashwall){

double distance,impactx,impacty;
bool hit=0;

for(int a=0; a<n_blocks; a++)
if(posx>blocks[a]->x-radius && posx<blocks[a]->x+blocks[a]->w+radius
&& posy>blocks[a]->y-radius && posy<blocks[a]->y+blocks[a]->h+radius){
	if(posx>blocks[a]->x+blocks[a]->w){
		impactx=blocks[a]->x+blocks[a]->w;
	}else if(posx<blocks[a]->x){
		impactx=blocks[a]->x;
	}else{
		impactx=posx;
	}
	if(posy>blocks[a]->y+blocks[a]->h){
		impacty=blocks[a]->y+blocks[a]->h;
	}else if(posy<blocks[a]->y){
		impacty=blocks[a]->y;
	}else{
		impacty=posy;
	}
	distance=dist(posx,posy,impactx,impacty);
	if(distance<radius){
		double percentx=(posx-impactx)/distance;
		double percenty=(posy-impacty)/distance;
		posx=impactx+percentx*radius;
		posy=impacty+percenty*radius;
		hit=1;
	}
}

if(smashwall && hit)
	digintowalls(posx-radius-10,posy-radius-10,radius*2+20,radius*2+20);

}
