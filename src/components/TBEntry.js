const TBEntry=(entry)=>{
    var TB=[];
    entry.map((el)=>{
        let debit=0;
        let credit=0;
        el[1].map((e)=>{
       
            if(e.CD==="Debit"){
                
                debit+=e.amount
            }
            if(e.CD==="Credit"){
                
                credit+=e.amount
            }
        })
        if(debit>=credit){
            
            TB.push({title:el[0],CD:"Debit",amount:debit-credit})
        }
        else{
            
            TB.push({title:el[0],CD:"Credit",amount:credit-debit})
            
        }
        
    })
    return TB
}
export{TBEntry}