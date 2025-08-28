const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] 

let per_page_items = 10;
let total_pages = items.length / per_page_items;
let pages = [];

let start = 1;
let count = 1;
while(start <= total_pages){
    var page = [];
    for(let col = 0; col < per_page_items; col++){
            page.push(items[count-1]);
            if(count <= items.length){
                count +=1
            }
    }
    start +=1
    pages.push(page);
    
}

console.log(pages);