let arg1=process.argv[2];
myFunction(arg1);
function myFunction()
{
   if(arg1>=2 && arg1<=10)
   {
       let i=0;
       let space=arg1-1;
       let k,j,l,m,n;
       for(;i<arg1;i++)
       {
            for(k=i;k<arg1;k++)
            {
                process.stdout.write(" ");
            }
            space--;
            for(j=1;j<=(2*i-1);j++)
            {
               process.stdout.write("*")
            }
            console.log(" ")
        }
        space=1;
        for(l=1;l<=arg1-1;l++)
        {
            for(m=1;m<=space;m++){
                
                process.stdout.write(" ");
            }
            space++;
            for(n=1;n<=2*(arg1-l)-1;n++)
            {
                process.stdout.write("*");

            }
            console.log(" ");
        }
    }
   else
   {
       console.log("Arguments must be in range 2 to 10  only");
   }
}

