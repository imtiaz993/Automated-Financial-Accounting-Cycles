//General Entry
const processEntry=(entry)=>{
    switch (entry.accType1) {
        case "Capital":
                entry={...entry,accType1:"Cash",accType2:"Capital"}
            break;

        case "Drawing":
                entry={...entry,accType1:"Drawing",accType2:"Cash"}
            break;

        case "Income": 
                entry={...entry,accType1:"Cash",accType2:entry.title+" income"}
            break;

        case "Expense":
                entry={...entry,accType1:entry.title+" expense",accType2:"Cash"}
            break;

        case "Purchase Goods":
            if(entry.payment==="Cash"){
                entry={...entry,accType1:entry.title,accType2:"Cash"}
            }
            else if(entry.payment==="Credit"){
                entry={...entry,accType1:entry.title,accType2:"Account Payable"}
            }
            break;

        case "Account Payable":
            if(entry.payment==="Settle"){
                entry={...entry,accType1:"Account Payable",accType2:"Cash"}
            }
            else if(entry.payment==="More"){
                entry={...entry,accType1:entry.title,accType2:"Account Payable"}
            }
            break;

        case "Sale":
            if(entry.payment==="Cash"){
                entry={...entry,accType1:"Cash",accType2:entry.title+"Sold"}
            }
            else if(entry.payment==="Credit"){
                entry={...entry,accType1:"Account Recieveable",accType2:entry.title+"Sold"}
            }
            break;

        case "Account Recieveable":
            if(entry.payment==="Settle"){
                entry={...entry,accType1:"Cash",accType2:"Revenue"}
            }
            else if(entry.payment==="More"){
                entry={...entry,accType1:"Account Recieveable",accType2:"Revenue"}
            }
            break;

        case "Purchase Assets":
            if(entry.payment==="Cash"){
                entry={...entry,accType1:entry.title,accType2:"Cash"}
            }
            else if(entry.payment==="Credit"){
                entry={...entry,accType1:entry.title,accType2:"Account Payable"}
            }
            break;
    
        default:
            break;
    }
return entry
}
export{processEntry}