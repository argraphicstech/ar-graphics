import {addCustomer} from "./data";
export default function handler(req,res){
if(req.method==="POST"){
addCustomer(req.body);
res.status(200).json({msg:"saved"});
}else res.status(405).end();
}
