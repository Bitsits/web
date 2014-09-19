void Game_rotoscale(SDL_Surface *source,SDL_Surface *destination,double angle,double scale,int dx,int dy,int dw,int dh){
	
double x1=	dist(0,0,source->w/2,source->w/2)			*scale	*cos(atan2(source->w/2.0,source->w/2.0)+angle);
double y1=	dist(0,0,source->w/2,source->w/2)			*scale	*sin(atan2(source->w/2.0,source->w/2.0)+angle);
double x2=	dist(source->w,0,source->w/2,source->w/2)	*scale	*cos(atan2(source->w/2.0,source->w/2.0-source->w)+angle);
double y2=	dist(source->w,0,source->w/2,source->w/2)	*scale	*sin(atan2(source->w/2.0,source->w/2.0-source->w)+angle);
double x3=	dist(0,source->w,source->w/2,source->w/2)	*scale	*cos(atan2(source->w/2.0-source->w,source->w/2.0)+angle);
double y3=	dist(0,source->w,source->w/2,source->w/2)	*scale	*sin(atan2(source->w/2.0-source->w,source->w/2.0)+angle);

double xdifx=(x1-x2)/source->w;
double xdify=(y1-y2)/source->w;
double ydifx=(x1-x3)/source->w;
double ydify=(y1-y3)/source->w;

double offsetx=source->w/2;
double offsety=source->w/2;
double xuse=0;
double yuse=0;

for(int y=0;y<dh;y++){
	xuse=offsetx+y*ydifx-dw/2*xdifx-dh/2*ydifx;
	yuse=offsety+y*ydify-dw/2*xdify-dh/2*ydify;
	for(int x=0;x<dw;x++){
		xuse+=xdifx;
		yuse+=xdify;
		if(xuse>0 && xuse<source->w && yuse>0 && yuse<source->h){
			putpixel(destination,x+dx,y+dy,getpixel(source,(int)xuse,(int)yuse));
		}
	}
}

}
