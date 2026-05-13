export const handleGuestMessage= (req,res)=>{
    try {
        const payload= req.body;
        console.log(payload);
        return res.status(200).json({message:"Message received successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal server error"});
    }
}