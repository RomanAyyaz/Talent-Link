const Company = require('../../Models/CompanyModels/Company')

const BusinessOverView = async (req,res)=>{
    const {  mission , vision , values } = req.body;
    const {id} = req.params;
    try {
        const companyInformation = await Company.findByIdAndUpdate(
          id ,{
            mission , vision , values 
        },
        { new: true });
    
        await companyInformation.save();
        return res.status(201).json({ message: 'Company Business overView has been added' });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    };

module.exports ={
    BusinessOverView
}