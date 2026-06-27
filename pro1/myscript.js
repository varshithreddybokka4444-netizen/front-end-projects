let index=1;
show(index);

function fun(y){
index=index+y;
show(index);
}

function show(z){
    let x=document.getElementsByClassName("mySlides");

if(z<1){
    index=x.length;
}
if(z>x.length){
    index=1;
}

    for(let i=0;i<x.length;i++){
        x[i].style.display="none";
    }
x[index-1].style.display="block";
}