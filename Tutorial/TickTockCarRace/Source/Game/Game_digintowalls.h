void digintowalls(double x,double y,double w,double h){
	int wallstocheck=n_walls;
	//loop threw every preexisting block
	for(int a=0; a<wallstocheck; a++)
	//find one that overlaps the area we are clearing out
	if(walls[a]->x+walls[a]->w>x && walls[a]->x<x+w
	&& walls[a]->y+walls[a]->h>y && walls[a]->y<y+h){
		//subdivide it into smaller blocks that arent in that area
		//see if we can make a devide left from the clear area
		if(walls[a]->x<x){
			makewall(
				walls[a]->x,
				walls[a]->y,
				(x)-(walls[a]->x),
				walls[a]->h);
			walls[a]->w=(walls[a]->x+walls[a]->w)-(x);
			walls[a]->x=x;
		}
		//see if we can make a devide right from the clear area
		if(walls[a]->x+walls[a]->w>x+w){
			makewall(
				x+w,
				walls[a]->y,
				(walls[a]->x+walls[a]->w)-(x+w),
				walls[a]->h);
			walls[a]->w=(x+w)-(walls[a]->x);
		}
		//see if we can make a devide down from the clear area
		if(walls[a]->y<y){
			makewall(
				walls[a]->x,
				walls[a]->y,
				walls[a]->w,
				(y)-(walls[a]->y));
			walls[a]->h=(walls[a]->y+walls[a]->h)-(y);
			walls[a]->y=y;
		}
		//see if we can make a devide up from the clear area
		if(walls[a]->y+walls[a]->h>y+h){
			makewall(
				walls[a]->x,
				y+h,
				walls[a]->w,
				(walls[a]->y+walls[a]->h)-(y+h));
			walls[a]->h=(y+h)-(walls[a]->y);
		}
		//then delete the original undevided block
		deletewall(a);
		//we don't want/need to check the blocks we just created
		wallstocheck--;
		//but we dont want to skip the next block on the list
		//which has just been lowered to the current position in the array
		a--;
	}
}
