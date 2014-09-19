//////////////////////////////////blocks
const int maxblocks             = 10000;
class block{
	public:
		double x,y,w,h;
		block(double xpos,double ypos,double width,double height);
		~block();
};
block::block(double xpos,double ypos,double width,double height){
	x=xpos;
	y=ypos;
	w=width;
	h=height;
}
block::~block(){
}
block *blocks[maxblocks];
int n_blocks = 0;

void deleteblock(int num){
	delete blocks[num];
	if(num!=n_blocks)for(int b=num;b<n_blocks;b++)blocks[b]=blocks[b+1];
	n_blocks-=1;
}

void makeblock(double x,double y,double w,double h){
	if(n_blocks<maxblocks){
		blocks[n_blocks]=new block(x,y,w,h);
		n_blocks++;
	}
}

/////////////////////////////////walls
const int maxwalls             = 10000;
block *walls[maxwalls];
int n_walls = 0;

void deletewall(int num){
	for(int a=0; a<n_blocks; a++)if(blocks[a]==walls[num])deleteblock(a);
	if(num!=n_walls)for(int b=num;b<n_walls;b++)walls[b]=walls[b+1];
	n_walls-=1;
}

void makewall(double x,double y,double w,double h){
	if(n_walls<maxwalls){
		makeblock(x,y,w,h);
		walls[n_walls]=blocks[n_blocks-1];
		n_walls++;
	}
}

//////////////////////////////////checkpoints
const int maxcheckpoints             = 100;
class checkpoint{
	public:
		double x,y;
		checkpoint(double xpos,double ypos);
		~checkpoint();
};
checkpoint::checkpoint(double xpos,double ypos){
	x=xpos;
	y=ypos;
}
checkpoint::~checkpoint(){
}
checkpoint *checkpoints[maxcheckpoints];
int n_checkpoints = 0;

void deletecheckpoint(int num){
	delete checkpoints[num];
	if(num!=n_checkpoints)for(int b=num;b<n_checkpoints;b++)checkpoints[b]=checkpoints[b+1];
	n_checkpoints-=1;
}

void makecheckpoint(double x,double y){
	if(n_checkpoints<maxcheckpoints){
		checkpoints[n_checkpoints]=new checkpoint(x,y);
		n_checkpoints++;
	}
}