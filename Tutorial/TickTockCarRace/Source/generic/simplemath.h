double dist(double x1,double y1,double x2,double y2){
	x1-=x2;
	y1-=y2;
	return sqrt(x1*x1+y1*y1);
}