function createGrid(row, col){
	var sketchPad = document.querySelector(".sketchpad");
	
    for(var j=0;j<row; j++){
        const row=document.createElement("div");
        row.classList.add('row');
        for(var i=0;i<col;i++){
            const col = document.createElement("div");
            col.classList.add('col');
            row.appendChild(col);
        }
        sketchPad.appendChild(row);
    }



}
createGrid(3,2);