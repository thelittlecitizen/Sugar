class shape
{
    constructor(area, color, location)
    {
        this._area=area;
        this._color=color;
        this._location=location;
    }

}

class location
{
    constructor(x,y)
    {
        this._x=x;
        this._y=y;
    }
}

class circle extends shape
{
    constructor(area, color, location,high)
    {
        super(area,color,location);
        this._high=high;
    }
}
circleshape = new circle(20,yellow,(6,8), 4.8)
console.log(circleshape)
