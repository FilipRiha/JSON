

window.onload=async()=>{ 
    try{
        const file=await fetch("./res/data/books.json");
        const data = await file.json();
        console.log(data);
        console.log(data.count);
        console.log(data.books);
       data.books.forEach(book => {
            console.log(book)
       });

    }catch(err){
        console.log(err)
    }
    
}