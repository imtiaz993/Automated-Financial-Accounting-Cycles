const ledgerEntry=(entry)=>{
    let obj1={}
    let obj2={}
    switch (entry.accType1) {
        case "Capital":
               obj1=Object.assign({...entry,accType1:"Cash",CD:"Debit",GeneralAcc:"Asset"})
               obj2=Object.assign({...entry,accType1:"Capital",CD:"Credit",GeneralAcc:"Capital"})

                
            break;

        case "Drawing":
            obj1=Object.assign({...entry,accType1:"Drawing",CD:"Debit",GeneralAcc:"Liabilities"})
            obj2=Object.assign({...entry,accType1:"Cash",CD:"Credit",GeneralAcc:"Asset"})
            
            break;

        case "Income":
            obj1=Object.assign({...entry,accType1:"Cash",CD:"Debit",GeneralAcc:"Asset"})
            obj2=Object.assign({...entry,accType1:entry.title,CD:"Credit",GeneralAcc:"Revenue"})
            
            break;

        case "Expense":
            obj1=Object.assign({...entry,accType1:entry.title,CD:"Debit",GeneralAcc:"Expense"})
            obj2=Object.assign({...entry,accType1:"Cash",CD:"Credit",GeneralAcc:"Asset"})
            
            break;

        case "Purchase Goods":
            if(entry.payment==="Cash"){
                obj1=Object.assign({...entry,accType1:entry.title,CD:"Debit",GeneralAcc:"Asset"})
                obj2=Object.assign({...entry,accType1:"Cash",CD:"Credit",GeneralAcc:"Asset"})
    
            }
            else if(entry.payment==="Credit"){
                obj1=Object.assign({...entry,accType1:entry.title,CD:"Debit",GeneralAcc:"Asset"})
                obj2=Object.assign({...entry,accType1:"Account Payable",CD:"Credit",GeneralAcc:"Liabilities"})
            }
            break;

        case "Account Payable":
            if(entry.payment==="Settle"){
                obj1=Object.assign({...entry,accType1:"Account Payable",CD:"Debit",GeneralAcc:"Asset"})
                obj2=Object.assign({...entry,accType1:"Cash",CD:"Credit",GeneralAcc:"Asset"})
                
            }
            else if(entry.payment==="More"){
                obj1=Object.assign({...entry,accType1:entry.title,CD:"Debit",GeneralAcc:"Asset"})
                obj2=Object.assign({...entry,accType1:"Account Payable",CD:"Credit",GeneralAcc:"Liabilities"})
                
            }
            break;

        case "Sale":
            if(entry.payment==="Cash"){
                obj1=Object.assign({...entry,accType1:"Cash",CD:"Debit",GeneralAcc:"Asset"})
                obj2=Object.assign({...entry,accType1:entry.title,CD:"Credit",GeneralAcc:"Revenue"})
                
            }
            else if(entry.payment==="Credit"){
                obj1=Object.assign({...entry,accType1:"Account Recieveable",CD:"Debit",GeneralAcc:"Asset"})
                obj2=Object.assign({...entry,accType1:entry.title,CD:"Credit",GeneralAcc:"Revenue"})
                
            }
            break;

        case "Account Recieveable":
            if(entry.payment==="Settle"){
                obj1=Object.assign({...entry,accType1:"Cash",CD:"Debit",GeneralAcc:"Asset"})
                obj2=Object.assign({...entry,accType1:"Account Recieveable",CD:"Credit",GeneralAcc:"Asset"})

            }
            else if(entry.payment==="More"){
                obj1=Object.assign({...entry,accType1:"Account Recieveable",CD:"Debit",GeneralAcc:"Asset"})
                obj2=Object.assign({...entry,accType1:entry.title,CD:"Credit",GeneralAcc:"Revenue"})

               
            }
            break;

        case "Purchase Assets":
            if(entry.payment==="Cash"){
                obj1=Object.assign({...entry,accType1:entry.title,CD:"Debit",GeneralAcc:"Asset"})
                obj2=Object.assign({...entry,accType1:"Cash",CD:"Credit",GeneralAcc:"Asset"})

               
            }
            else if(entry.payment==="Credit"){
                obj1=Object.assign({...entry,accType1:entry.title,CD:"Debit",GeneralAcc:"Asset"})
                obj2=Object.assign({...entry,accType1:"Account Payable",CD:"Credit",GeneralAcc:"Liabilities"})

                
            }
            break;
    
        default:
            break;
    }
return {obj1,obj2}

}
export{ledgerEntry}